import { json, error } from "@sveltejs/kit";
import { base_headers as headers } from '$lib/config.js';
import cache from "../../cache.js";
import { parseProp, parseNumericProp } from "$lib/api/utils.js";

const skipProps = ["id", "order"];
const numericProps = ["lat", "lng", "pop_", "pal_", "jsh_", "oth_"];
const expiry = 4 * 60 * 60; // 4 hour cache expiry

export async function GET({ params, fetch }) {
  const slug = params.slug;
  const url = `https://base.palopenmaps.org/api/database/rows/table/713/?user_field_names=true&filter__slug__equal=${slug}&size=1`;
  const poha_url = `https://base.palopenmaps.org/api/database/rows/table/716/?user_field_names=true&filter__localities__link_row_contains=${slug}&size=200`;

  const cachedData = cache.get(slug);
  if (cachedData) {
    console.log("Found cached value!");
    return json(cachedData);
  }

  try {
    const data = await Promise.all([
      (await fetch(url, {headers})).json(),
      (await fetch(poha_url, {headers})).json(),
    ]);

    const place = data?.[0]?.results?.[0];
    const poha = data?.[1]?.results || [];
    if (!place) error(404, "Locality not found.");

    const properties = {};
    for (const prop of Object.keys(place).filter(p => !skipProps.includes(p))) {
      if (prop === "poha") properties[prop] = poha.map(d => ({...d, localities: d.localities.map(d => d.value)})).filter(d => d.localities.includes(slug));
      else properties[prop] = numericProps.some(p => prop.startsWith(p)) ? parseNumericProp(place[prop]) : parseProp(place[prop]);
    }
    const geometry = {type: "Point", coordinates: [properties.lng, properties.lat]};
    const feature = {type: "Feature", properties, geometry};
    
    cache.set(slug, feature, expiry);

    return json(feature);
  }
  catch {
    error(500, "Could not fetch locality.")
  }
}
