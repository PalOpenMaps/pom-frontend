import { l as locs_url, c as config_url, s as sheets_url } from './config-4128fe2f.js';
import { g as getPlaces, a as getConfig, b as getSheets } from './utils-e1738620.js';

async function load({ fetch }) {
  let places = await getPlaces(locs_url, fetch);
  let config = await getConfig(config_url, fetch);
  let sheets = await getSheets(sheets_url, config, fetch);
  return { places, config, sheets };
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-f7441226.js')).default;
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/nodes/0.f95326ed.js","_app/immutable/chunks/config.7ea536df.js","_app/immutable/chunks/utils.3753fc96.js","_app/immutable/chunks/index.bf16622f.js","_app/immutable/chunks/singletons.c1a12766.js","_app/immutable/chunks/paths.7f30349b.js","_app/immutable/chunks/stores.8dd52332.js","_app/immutable/chunks/Icon.dedb4f82.js"];
const stylesheets = ["_app/immutable/assets/0.5cd9a6ec.css","_app/immutable/assets/Icon.2bb40ad1.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-1e542857.js.map
