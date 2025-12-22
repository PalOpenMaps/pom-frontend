import { json, error } from "@sveltejs/kit";
import { BASEROW_API_KEY } from '$env/static/private';
import cache from "../cache.js";
import { parseNumericProp } from "$lib/api/utils.js";
import { parseNumericProp } from "$lib/api/utils.js";

const startUrl = "https://base.palopenmaps.org/api/database/rows/table/712/?user_field_names=true&size=200";
const headers = new Headers({Authorization: `Token ${BASEROW_API_KEY}`});
const expiry = 4 * 60 * 60; // 4 hour cache expiry

export async function GET({ fetch }) {

  const cachedData = cache.get("sheets");
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
      geojson.features.push(...data.results.map((row => {
        const [x1, x2, y1, y2] = [+row.x_min, +row.x_max, +row.y_min, +row.y_max];
        return {
          geometry: {
            type: "Polygon",
            coordinates: [[[x1, y1], [x2, y1], [x2, y2], [x1, y2], [x1, y1]]]
          },
          properties: {
            name_en: row.name_en,
            file_name: row.file_name,
            sheet_number: row.sheet_number_ext ?
              `${row.sheet_number} & ${row.sheet_number_ext}` :
              row.sheet_number,
            layer: row.layer?.[0]?.value,
              `${row.sheet_number} & ${row.sheet_number_ext}` :
              row.sheet_number,
            layer: row.layer?.[0]?.value,
            dropbox_link: row.dropbox_link,
            year: parseNumericProp(row.year)
          }
        };
      })));
      if (!data.next) complete = true;
      else url = data.next.replace("http", "https");
    }
    
    cache.set("sheets", geojson, expiry);

    return json(geojson);
  }
  catch {
    error(500, "Could not fetch sheets.");
  }
}