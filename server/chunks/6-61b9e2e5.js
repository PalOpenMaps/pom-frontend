async function load({ parent }) {
  const stuff = await parent();
  let places = stuff.places;
  return { places };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-7c7ef117.js')).default;
const universal_id = "src/routes/[lang]/(page)/+page.js";
const imports = ["_app/immutable/nodes/6.d1dcf020.js","_app/immutable/chunks/index.bf16622f.js","_app/immutable/chunks/navigation.8e978de6.js","_app/immutable/chunks/singletons.c1a12766.js","_app/immutable/chunks/paths.7f30349b.js","_app/immutable/chunks/config.7ea536df.js","_app/immutable/chunks/Select.f27b670f.js","_app/immutable/chunks/Icon.dedb4f82.js"];
const stylesheets = ["_app/immutable/assets/6.d54a0959.css","_app/immutable/assets/Select.5afe8512.css","_app/immutable/assets/Icon.2bb40ad1.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-61b9e2e5.js.map
