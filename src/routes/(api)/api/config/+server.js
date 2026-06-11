import { json, error } from '@sveltejs/kit';
import { base_headers as headers } from '$lib/config.js';
import cache from '../cache.js';
import { parseProp, parseNumericProp } from '$lib/api/utils.js';

function makeUrl(id, fields = null) {
    let url = `https://base.palopenmaps.org/api/database/rows/table/${id}/?user_field_names=true`;
    if (fields) url += `&include=${fields.join(",")}`;
    return url;
}

const tables = [
	{key: "sources", url: makeUrl(707)},
	{key: "authors", url: makeUrl(708)},
	{key: "groups", url: makeUrl(709)},
	{key: "statuses", url: makeUrl(710)},
	{key: "pages", url: makeUrl(705, ["name_en", "name_ar", "href", "icon"])},
	{key: "translations", url: makeUrl(706)},
	{key: "layers", url: makeUrl(711)}
];
const skipProps = ['id', 'order'];
const numericProps = [
	'x_min',
	'x_max',
	'y_min',
	'y_max',
	'min_zoom',
	'max_zoom',
	'scale',
	'start_year',
	'end_year'
];
const expiry = 4 * 60 * 60; // 4 hour cache expiry

// Filter and format Baserow response
function formatConfig(data) {
	const props = Object.keys(data[0]).filter((prop) => !skipProps.includes(prop));

	const key = props.includes('key') ? 'key' : props.includes('en') ? 'en' : 'name_en';

	const lookup = {};
	for (let i = 0; i < data.length; i++) {
		const d = data[i];
		const obj = {};
		for (const prop of props)
			obj[prop] =
				prop === 'image'
					? d[prop].map((img) => img.url)
					: numericProps.includes(prop)
					? parseNumericProp(d[prop])
					: parseProp(d[prop]);
		lookup[d[key]] = obj;
	}
	return lookup;
}

async function getConfig(table, fetch) {
	const response = await fetch(table.url, { headers });
	const data = await response.json();
	const lookup = formatConfig(data.results);
	return [table.key, lookup];
}

export async function GET({ fetch }) {
	const cachedData = cache.get('config');
	if (cachedData) {
		console.log('Found cached value!');
		return json(cachedData);
	}

	try {
		const config = Object.fromEntries(
			await Promise.all(tables.map(async (t) => getConfig(t, fetch)))
		);

		cache.set('config', config, expiry);

		return json(config);
	} catch {
		error(500, 'Could not fetch config.');
	}
}
