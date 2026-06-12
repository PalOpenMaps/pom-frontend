import proj4 from 'proj4';
import { maxBounds } from './config.js';

// import { data_static_url, data_cdn_url, data_commits_url } from "./config";

// export async function getDataUrl(dev, fetch = window.fetch) {
// 	if (dev) return data_static_url;
// 	const commits = await (await fetch(data_commits_url)).json();
// 	return `${data_cdn_url}@${commits[0].sha}`;
// }

export async function getData(url, fetch = window.fetch) {
	const data = await (await fetch(url)).json();
	return data;
}

export async function getPlace(data_url, slug, fetch = window.fetch) {
	let res = await fetch(`${data_url}/data/places/${slug}.json`);
	return res ? await res.json() : null;
}

export function makeColors(options, key) {
	let cols = ['match', ['get', key]];
	Object.keys(options).forEach((op) => {
		cols.push(op);
		cols.push(options[op].color);
	});
	cols.push('rgba(0,0,0,0)');
	return cols;
}

export function makeFilter(statuses, groups, year) {
	let filter = [
		'all',
		['in', 'status', ...statuses.map((a) => a.key)],
		['in', 'group', ...groups.map((a) => a.key)]
	];
	if (year) filter = [...filter, ['<=', 'start', year], ['>=', 'end', year]];
	return filter;
}

export function i18n(key, texts, lang) {
	if (typeof key === 'object') {
		return key[`name_${lang}`] || key[`${lang}`] || key.name || key.name_en;
	}
	return texts?.[key]?.[lang] || key;
}

export function makeDataset(place) {
	let props = place.properties;
	return {
		p1945: {
			pop: props.pop_1945,
			pal: props.pal_1945 && props.pop_1945 ? (100 * props.pal_1945) / props.pop_1945 : null,
			jsh: props.jsh_1945 && props.pop_1945 ? (100 * props.jsh_1945) / props.pop_1945 : null,
			oth: null
		},
		p2016: {
			pop: props.pop_2016,
			pal: props.pal_2016 && props.pop_2016 ? (100 * props.pal_2016) / props.pop_2016 : null,
			jsh: props.jsh_2016 && props.pop_2016 ? (100 * props.jsh_2016) / props.pop_2016 : null,
			oth: props.oth_2016 && props.pop_2016 ? (100 * props.oth_2016) / props.pop_2016 : null
		}
	};
}

export function makeStyle(layer, desaturate = false) {
	return {
		version: 8,
		sprite: 'https://cdn.jsdelivr.net/gh/bothness/basemaps/sprites/omt-street',
		glyphs: 'https://cdn.jsdelivr.net/gh/bothness/basemaps/fonts/{fontstack}/{range}.pbf',
		sources: {
			source: {
				type: 'raster',
				tiles: [layer.url],
				tileSize: 256,
				attribution: layer.attribution,
				minzoom: 0,
				maxzoom: 17
			}
		},
		layers: [
			{
				id: 'base',
				type: 'raster',
				source: 'source',
				paint: {
					'raster-saturation': desaturate ? -0.85 : 0
				}
			},
			{
				id: 'overlays-div',
				type: 'background',
				paint: { 'background-opacity': 0 }
			},
			{
				id: 'places-div',
				type: 'background',
				paint: { 'background-opacity': 0 }
			}
		]
	};
}

export function sleep(ms = 1000) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function setCookie(name, value, days) {
	let expires = '';
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = name + '=' + (value || '') + '; SameSite=Strict' + expires + '; path=/';
}

export function getCookie(name) {
	const nameEQ = name + '=';
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

export function eraseCookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function roundCoords(coords, proj) {
	return coords.map((c) => (proj === 'pal23' ? Math.round(c) : Math.round(c * 1e6) / 1e6));
}

export function proj(coords, from = 'wgs84', to = 'pal23') {
	const _coords = Array.isArray(coords) ? coords : coords?.lng ? [coords.lng, coords.lat] : [0, 0];
	if (from === to) return roundCoords(_coords, to);
	const proj4_strings = {
		wgs84: 'WGS84',
		pal23:
			'+proj=cass +lat_0=31.7340969444444 +lon_0=35.2120805555556 +x_0=170251.555 +y_0=126867.909 +a=6378300.789 +b=6356566.435 +towgs84=-275.7224,94.7824,340.8944,-8.001,-4.42,-11.821,1 +units=m +no_defs +type=crs'
	};
	const proj = proj4(proj4_strings[from], proj4_strings[to]);
	return roundCoords(proj.forward(_coords), to);
}

export function makeMapUrl(center, zoom, service = 'osm') {
	return service === 'google'
		? `https://www.google.com/maps/@${center?.lat},${center?.lng},${zoom}z`
		: service === 'bing'
		? `https://www.bing.com/maps?cp=${center?.lat}~${center?.lng}&lvl=${zoom}`
		: `https://www.openstreetmap.org/#map=${zoom}/${center?.lat}/${center?.lng}`;
}

function clampCoords(coords) {
	return [
		coords[0] < maxBounds[0][0] ? maxBounds[0][0] : coords[0] > maxBounds[1][0] ? maxBounds[1][0] : coords[0],
		coords[1] < maxBounds[0][1] ? maxBounds[0][1] : coords[1] > maxBounds[1][1] ? maxBounds[1][1] : coords[1],
	];
}

export function mapUrlToCoords(url = '') {
	const type = url.includes('openstreetmap.org')
		? 'osm'
		: url.includes('google.com')
		? 'google'
		: url.includes('bing.com')
		? 'bing'
		: null;
	if (!type) return { centre: null, zoom: null };

	const regex_coords = new RegExp(
		type === 'osm'
			? /(?<=\d\/)-*\d+.\d+\/-*\d+.\d+/
			: type === 'google'
			? /(?<=@)-*\d+.\d+,-*\d+.\d+/
			: /(?<=cp=)-*\d+.\d+~-*\d+.\d+/
	);
	const regex_zoom = new RegExp(
		type === 'osm'
			? /(?<=map=)\d+(?=\/)/
			: type === 'google'
			? /(?<=,)\d+(.\d+){0,1}(?=z)/
			: /(?<=lvl=)\d+(.\d+){0,1}/
	);
	const coords = url.match(regex_coords)?.[0];
	const zoom = url.match(regex_zoom)?.[0];
    console.log({url, type, regex_coords, regex_zoom});

	return !coords || !zoom
		? { centre: null, zoom: null }
		: {
				center: clampCoords(
					coords
						.split(type === 'osm' ? '/' : type === 'google' ? ',' : '~')
						.map((c) => +c)
						.reverse()
				),
				zoom: +zoom
		  };
}
