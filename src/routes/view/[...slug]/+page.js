export const prerender = false;

import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { redirect_path } from '$lib/config';

export async function load({ fetch, params, parent }) {
  const stuff = await parent();
  const lookup = await (await fetch(`${stuff.data_url}/${redirect_path}`)).json();

  const par = params.slug.replace("/@", "|").replace("/","").split("|");
	const id = par[0];
	const coords = par[1] ? par[1].split(",") : null;
  const place = lookup[id];

  const slug = place ? `${place.slug}/` : "";
  const hash = coords ? `#13.00,${coords[1]},${coords[0]}` : "";

  redirect(301, `${base}/en/maps/${slug}${hash}`);
}
