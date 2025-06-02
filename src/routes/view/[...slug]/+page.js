export const prerender = false;

import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { redirect_url } from '$lib/config';

export async function load({ fetch, params }) {
  let lookup = await (await fetch(redirect_url)).json();

  let par = params.slug.replace("/@", "|").replace("/","").split("|");
	let id = par[0];
	let coords = par[1] ? par[1].split(",") : null;
  let place = lookup[id];

  let slug = place ? `${place.slug}/` : "";
  let hash = coords ? `#13.00,${coords[1]},${coords[0]}` : "";

  throw redirect(301, `${base}/en/maps/${slug}${hash}`);
}
