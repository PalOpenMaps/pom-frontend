import { e as error } from './index3-4dc5572a.js';
import { a as cdnBase } from './config-4128fe2f.js';

async function load({ parent, fetch, params }) {
  const stuff = await parent();
  const page = Object.values(stuff.config.pages).find((p) => p.href === params.page);
  if (!page) {
    throw error(404, {
      message: "Not found"
    });
  }
  const lang = params.lang;
  const url = `${cdnBase}/data/pages/${params.page}_${lang}.json`;
  const data = await (await fetch(url)).json();
  data.content = data.content.replaceAll("%7Bassets%7D", `${cdnBase}/assets`);
  return data;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c2ca2572.js')).default;
const universal_id = "src/routes/[lang]/(page)/[page]/+page.js";
const imports = ["_app/immutable/nodes/7.bff88ed6.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/config.7ea536df.js","_app/immutable/chunks/index.bf16622f.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=7-a6e10766.js.map
