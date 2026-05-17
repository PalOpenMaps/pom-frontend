import { resolve } from "$app/paths";
import { getData } from "$lib/utils";
import { data_static_url } from "$lib/config";

export async function load({ fetch }) {
	const data = await Promise.all([
		getData(resolve("/api/localities"), fetch),
		getData(resolve("/api/sheets"), fetch),
		getData(resolve("/api/config"), fetch)
	]);

	return { places: data[0], sheets: data[1], config: data[2], data_url: data_static_url };
}
