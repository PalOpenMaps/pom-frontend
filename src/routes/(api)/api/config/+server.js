import { json, error } from "@sveltejs/kit";
import { baserow_token } from "$lib/config.js";
import cache from "../cache.js";
import { parseProp, parseNumericProp } from "$lib/api/utils.js";

const tableCodes = {
  sources: 707, authors: 708, groups: 709, statuses: 710,
  pages: 705, translations: 706, layers: 711
}
const tables = Object.entries(tableCodes)
  .map(t => ({key: t[0], url: `https://base.palopenmaps.org/api/database/rows/table/${t[1]}/?user_field_names=true`}));
const skipProps = ["id", "order"];
const numericProps = ["x_min", "x_max", "y_min", "y_max", "min_zoom", "max_zoom", "scale", "start_year", "end_year"];
const headers = new Headers({Authorization: `Token ${baserow_token}`});
const expiry = 4 * 60 * 60; // 4 hour cache expiry

// Filter and format Baserow response
function formatConfig(data) {
  const props = Object.keys(data[0])
    .filter(prop => !skipProps.includes(prop));

  const key = props.includes("key") ? "key" : props.includes("en") ? "en" : "name_en";

  const lookup = {};
  for (let i = 0; i < data.length; i ++) {
    const d = data[i];
    const obj = {};
    for (const prop of props) obj[prop] = numericProps.includes(prop) ? parseNumericProp(d[prop]) : parseProp(d[prop]);
    lookup[d[key]] = obj;
  }
  return lookup;
}

export async function GET({ fetch }) {

  const cachedData = cache.get("config");
  if (cachedData) {
    console.log("Found cached value!");
    return json(cachedData);
  }

  try {
    const config = {};

    for (const table of tables) {
      const response = await fetch(table.url, {headers})
      const data = await response.json();
      const lookup = formatConfig(data.results);
      config[table.key] = lookup;
    }
    
    cache.set('config', config, expiry);

    return json(config);
  }
  catch {
    error(500, "Could not fetch config.")
  }
}