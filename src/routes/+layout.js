// export const prerender = true;

import { locs_url, config_url, sheets_url } from "$lib/config";
import { getPlaces, getConfig, getSheets } from "$lib/utils";

export async function load({ fetch }) {
	let places = await getPlaces(locs_url, fetch);
	let config = await getConfig(config_url, fetch);
	let sheets = await getSheets(sheets_url, config.layers, fetch);

	return { places, config, sheets };
}
