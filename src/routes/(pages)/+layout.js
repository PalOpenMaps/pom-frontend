import { resolve } from "$app/paths";
import { getDataUrl, getPlaces, getConfig, getSheets } from "$lib/utils";

export async function load({ fetch }) {
	let data_url = await getDataUrl(true, fetch);
	let places = await getPlaces(resolve("/api/localities"), fetch);
	let config = await getConfig(resolve("/api/config"), fetch);
	let sheets = await getSheets(resolve("/api/sheets"), config, fetch);

	return { places, config, sheets, data_url };
}
