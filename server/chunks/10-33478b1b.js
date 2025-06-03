import { r as redirect } from './index3-4dc5572a.js';
import { b as base } from './paths-05fee424.js';
import { r as redirect_url } from './config-4128fe2f.js';

const prerender = false;
async function load({ fetch, params }) {
  let lookup = await (await fetch(redirect_url)).json();
  let par = params.slug.replace("/@", "|").replace("/", "").split("|");
  let id = par[0];
  let coords = par[1] ? par[1].split(",") : null;
  let place = lookup[id];
  let slug = place ? `${place.slug}/` : "";
  let hash = coords ? `#13.00,${coords[1]},${coords[0]}` : "";
  throw redirect(301, `${base}/en/maps/${slug}${hash}`);
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 10;
const universal_id = "src/routes/view/[...slug]/+page.js";
const imports = ["_app/immutable/nodes/10.12bd5779.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/paths.7f30349b.js","_app/immutable/chunks/config.7ea536df.js"];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=10-33478b1b.js.map
