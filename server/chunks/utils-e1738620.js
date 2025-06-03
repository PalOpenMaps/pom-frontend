import { a as cdnBase } from './config-4128fe2f.js';

async function getPlaces(url, fetch = window.fetch) {
  const places = await (await fetch(url)).json();
  places.features = places.features.map((f) => {
    f.properties.end = f.properties.end || 1e4;
    f.properties.start = f.properties.start || 0;
    return f;
  });
  return places;
}
async function getPlace(slug, fetch = window.fetch) {
  let res = await fetch(`${cdnBase}/data/places/${slug}.json`);
  return res ? await res.json() : null;
}
function makeFilter(statuses, groups, year) {
  let filter = ["all", ["in", "status", ...statuses.map((a) => a.key)], ["in", "group", ...groups.map((a) => a.key)]];
  if (year)
    filter = [...filter, ["<=", "start", year], [">=", "end", year]];
  return filter;
}
async function getConfig(url, fetch = window.fetch) {
  const config = await (await fetch(url)).json();
  return config;
}
async function getSheets(url, config, fetch = window.fetch) {
  let sheets = await (await fetch(url)).json();
  return sheets;
}
function i18n(key, texts, lang) {
  if (typeof key === "object") {
    return key[`name_${lang}`] || key[`${lang}`] || key.name || key.name_en;
  }
  return texts?.[key]?.[lang] || key;
}
function makeDataset(place) {
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
  };
}

export { getConfig as a, getSheets as b, getPlace as c, makeDataset as d, getPlaces as g, i18n as i, makeFilter as m };
//# sourceMappingURL=utils-e1738620.js.map
