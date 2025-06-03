import { cdnBase } from "./config";

export async function getPlaces(url, fetch = window.fetch) {
	const places = await(await fetch(url)).json();
	places.features = places.features.map(f => {
		f.properties.end = f.properties.end || 10000;
		f.properties.start = f.properties.start || 0;
		return f;
	});
	return places;
}

export async function getPlace(slug, fetch = window.fetch) {
	let res = await fetch(`${cdnBase}/data/places/${slug}.json`);
	return res ? await res.json() : null;
}

export function makeColors(options, key) {
	let cols = ["match", ["get", key]];
	Object.keys(options).forEach((op) => {
		cols.push(op);
		cols.push(options[op].color);
	});
	cols.push("rgba(0,0,0,0)");
	return cols;
}

export function makeFilter(statuses, groups, year) {
	let filter = ['all', ['in', 'status', ...statuses.map(a => a.key)], ['in', 'group', ...groups.map(a => a.key)]];
	if (year) filter = [...filter, ["<=", "start", year], [">=", "end", year]];
	return filter;
}

export async function getConfig(url, fetch = window.fetch) {
	const config = await (await fetch(url)).json();
	return config;
}

export async function getSheets(url, config, fetch = window.fetch) {
	let sheets = await (await fetch(url)).json();
	return sheets;
}

export function i18n(key, texts, lang) {
	if (typeof key === "object") {
		return key[`name_${lang}`] || key[`${lang}`] || key.name || key.name_en;
	}
	return texts?.[key]?.[lang] || key;
}

export function makeDataset(place) {
	let props = place.properties;
	return {
		p1945: {
			pop: props.pop_1945,
			pal: props.pal_1945 && props.pop_1945 ? 100 * props.pal_1945 / props.pop_1945 : null,
			jsh: props.jsh_1945 && props.pop_1945 ? 100 * props.jsh_1945 / props.pop_1945 : null,
			oth: null
		},
		p2016: {
			pop: props.pop_2016,
			pal: props.pal_2016 && props.pop_2016 ? 100 * props.pal_2016 / props.pop_2016 : null,
			jsh: props.jsh_2016 && props.pop_2016 ? 100 * props.jsh_2016 / props.pop_2016 : null,
			oth: props.oth_2016 && props.pop_2016 ? 100 * props.oth_2016 / props.pop_2016 : null
		}
	}
}

export function makeStyle(layer, desaturate = false) {
	return {
		"version": 8,
		"sprite": "https://cdn.jsdelivr.net/gh/bothness/basemaps/sprites/omt-street",
		"glyphs": "https://cdn.jsdelivr.net/gh/bothness/basemaps/fonts/{fontstack}/{range}.pbf",
		"sources": {
			"source": {
				"type": "raster",
				"tiles": [layer.url],
				"tileSize": 256,
				"attribution": layer.attribution,
				"minzoom": 0,
				"maxzoom": 17
			}
		},
		"layers": [
			{
				"id": "base",
				"type": "raster",
				"source": "source",
				"paint": {
					"raster-saturation": desaturate ? -0.85 : 0
				}
			},
			{
				"id": "overlays-div",
				"type": "background",
				"paint": {"background-opacity": 0}
			},
			{
				"id": "places-div",
				"type": "background",
				"paint": {"background-opacity": 0}
			}
		]
	}
}

export function sleep (ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function setCookie(name, value, days) {
	let expires = "";
	if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + "; SameSite=Strict" + expires + "; path=/";
}

export function getCookie(name) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i ++) {
			let c = ca[i];
			while (c.charAt(0) === " ") c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

export function eraseCookie(name) {   
	document.cookie = name +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}