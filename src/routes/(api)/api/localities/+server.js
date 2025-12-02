import { json, error } from "@sveltejs/kit";
import { BASEROW_API_KEY } from '$env/static/private';
import cache from "../cache.js";
import { parseNumericProp } from "$lib/api/utils.js";

const startUrl = 'https://base.palopenmaps.org/api/database/rows/table/713/?user_field_names=true&include=name_en,name_ar,slug,lat,lng,grp,type,change_1945,start,end_est,in_palestine&filter__in_palestine__boolean=true&size=200';
const headers = new Headers({Authorization: `Token ${BASEROW_API_KEY}`});
const expiry = 4 * 60 * 60; // 4 hour cache expiry

export async function GET({ fetch }) {

  const cachedData = cache.get("localities");
  if (cachedData) {
    console.log("Found cached value!");
    return json(cachedData);
  }

  try {
    const geojson = {type: "FeatureCollection", features: []};

    let url = startUrl;
    let complete = false;
    while (!complete) {
      const response = await fetch(url, {headers})
      const data = await response.json();
      geojson.features.push(...data.results.map((row => ({
        geometry: {
          type: "Point",
          coordinates: [
            +row.lng,
            +row.lat
          ]
        },
        properties: {
          name_en: row.name_en,
          name_ar: row.name_ar,
          slug: row.slug,
          type: row.type,
          group: row.grp,
          status: row.change_1945?.[0]?.value,
          start: parseNumericProp(row.start) || 0,
          end: parseNumericProp(row?.end_est?.[0]?.value) || 10000
        }
      }))));
      if (!data.next) complete = true;
      else url = data.next.replace("http", "https");
    }
    
    cache.set("localities", geojson, expiry);

    return json(geojson);
  }
  catch {
    error(500, "Could not fetch localities.")
  }
}