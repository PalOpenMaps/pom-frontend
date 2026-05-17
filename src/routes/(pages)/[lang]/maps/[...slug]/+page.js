import { error } from "@sveltejs/kit";
import { resolve } from "$app/paths";
  
export async function load({ params, fetch }) {
	const slug = params.slug.replace("/","");
	if (!slug) return;

	try {
		const url = resolve(`/api/localities/${slug}`);
		const place = await (await fetch(url)).json();
		return { place };
	} catch {
		return error(404, "Place not found");
	}
}
