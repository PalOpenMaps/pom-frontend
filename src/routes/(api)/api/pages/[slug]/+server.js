import { json, error } from "@sveltejs/kit";
import { parse } from "marked";
import { base_headers as headers } from '$lib/config.js';
import cache from "../../cache.js";

const skipProps = ["id", "order"];
const expiry = 4 * 60 * 60; // 4 hour cache expiry

function parseImages(markdown, data) {
  data.image = data.image.map(img => img.url);
  const images = markdown.match(/{image_\d+}/g) || [];
  for (const img of images) {
    const index = img.match(/\d+/)?.[0];
    if (data.image[index]) markdown = markdown.replace(img, data.image[index]);
  }
  return markdown;
}

export async function GET({ params, fetch }) {
  const slug = params.slug;
  const url = `https://base.palopenmaps.org/api/database/rows/table/705/?user_field_names=true&filter__href__equal=${slug}&size=1`;

  const cachedData = cache.get(slug);
  if (cachedData) {
    console.log("Found cached value!");
    return json(cachedData);
  }

  try {
    const response = await fetch(url, {headers})
    const data = (await response.json()).results[0];
    if (!data) error(404, "Page not found.");

    const page = {};
    for (const prop of Object.keys(data).filter(p => !skipProps.includes(p))) {
      page[prop] = prop.startsWith("body") ? parse(parseImages(data[prop], data)) : data[prop];
    }
    cache.set(slug, page, expiry);

    return json(page);
  }
  catch(err) {
    console.log(err);
    error(500, "Could not fetch page.")
  }
}