import { c as getPlace } from './utils-e1738620.js';
import './config-4128fe2f.js';

async function load({ params, parent, fetch }) {
  const stuff = await parent();
  let slug = params.slug.replace("/", "");
  let places = stuff.places;
  let place;
  if (slug && places.features.find((f) => f.properties.slug == slug)) {
    place = await getPlace(slug, fetch);
  } else {
    place = null;
  }
  let layers = stuff.layers;
  let sheets = stuff.sheets;
  return { layers, sheets, places, place };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-3676e149.js')).default;
const universal_id = "src/routes/[lang]/maps/[...slug]/+page.js";
const imports = ["_app/immutable/nodes/8.e72bc06a.js","_app/immutable/chunks/utils.3753fc96.js","_app/immutable/chunks/config.7ea536df.js","_app/immutable/chunks/index.bf16622f.js","_app/immutable/chunks/paths.7f30349b.js","_app/immutable/chunks/stores.8dd52332.js","_app/immutable/chunks/singletons.c1a12766.js","_app/immutable/chunks/navigation.8e978de6.js","_app/immutable/chunks/Menu.0408cfe8.js","_app/immutable/chunks/Icon.dedb4f82.js","_app/immutable/chunks/Select.f27b670f.js"];
const stylesheets = ["_app/immutable/assets/8.e1f695ca.css","_app/immutable/assets/Menu.7412e87c.css","_app/immutable/assets/Icon.2bb40ad1.css","_app/immutable/assets/Select.5afe8512.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=8-e89c4c8e.js.map
