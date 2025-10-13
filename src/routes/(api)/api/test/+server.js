import { json, error } from "@sveltejs/kit";
import { BASEROW_API_KEY } from '$env/static/private';

const url = "https://base.palopenmaps.org/api/database/rows/table/713/?user_field_names=true&size=20";
const headers = new Headers({Authorization: `Token ${BASEROW_API_KEY}`});

export async function GET({ fetch }) {
  try {
    const response = await fetch(url, {headers})
    const data = await response.json();

    return json(data);
  }
  catch {
    error(500, "Couldn't fetch from database.")
  }
}