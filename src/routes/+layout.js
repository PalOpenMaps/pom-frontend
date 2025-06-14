// import { dev } from '$app/environment';
import { locs_path, config_path, sheets_path } from "$lib/config";
import { getDataUrl, getPlaces, getConfig, getSheets } from "$lib/utils";

export async function load({ fetch }) {
	let data_url = await getDataUrl(false, fetch);
	let places = await getPlaces(`${data_url}/${locs_path}`, fetch);
	let config = await getConfig(`${data_url}/${config_path}`, fetch);
	let sheets = await getSheets(`${data_url}/${sheets_path}`, config, fetch);

	return { places, config, sheets, data_url };
}
