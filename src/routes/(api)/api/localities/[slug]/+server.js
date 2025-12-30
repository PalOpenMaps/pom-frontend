import { json, error } from "@sveltejs/kit";
import { BASEROW_API_KEY } from '$env/static/private';
import cache from "../../cache.js";
import { parseProp, parseNumericProp } from "$lib/api/utils.js";

const skipProps = ["id", "order"];
const numericProps = ["lat", "lng", "pop_", "pal_", "jsh_", "oth_"];
const headers = new Headers({Authorization: `Token ${BASEROW_API_KEY}`});
const expiry = 4 * 60 * 60; // 4 hour cache expiry

export async function GET({ params, fetch }) {
  const slug = params.slug;
  const url = `https://base.palopenmaps.org/api/database/rows/table/713/?user_field_names=true&filter__slug__equal=${slug}&size=1`;

  const cachedData = cache.get(slug);
  if (cachedData) {
    console.log("Found cached value!");
    return json(cachedData);
  }

  try {
    const response = await fetch(url, {headers})
    const data = (await response.json()).results[0];
    if (!data) error(404, "Locality not found.");

    const properties = {};
    const properties = {};
    for (const prop of Object.keys(data).filter(p => !skipProps.includes(p))) {
      properties[prop] = numericProps.some(p => prop.startsWith(p)) ? parseNumericProp(data[prop]) : parseProp(data[prop]);
      properties[prop] = numericProps.some(p => prop.startsWith(p)) ? parseNumericProp(data[prop]) : parseProp(data[prop]);
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
