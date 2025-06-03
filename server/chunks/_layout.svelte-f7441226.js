import { c as create_ssr_component, a as subscribe, s as setContext, b as add_attribute, e as escape, v as validate_component, g as getContext } from './index2-d563acd4.js';
import { w as writable } from './index-65483d74.js';
import { p as page } from './stores-d6b71bc6.js';
import { b as base_url } from './config-4128fe2f.js';
import { i as i18n } from './utils-e1738620.js';
import { b as base } from './paths-05fee424.js';
import { I as Icon } from './Icon-1c55d08e.js';

const css$2 = {
  code: "div.cookie-banner.svelte-17j1a6x.svelte-17j1a6x{position:fixed;z-index:100;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:center;bottom:0;left:0;right:0;background-color:rgba(255,255,255,0.9);border-top:1px solid black;padding:6px 16px 9px}.btn.svelte-17j1a6x.svelte-17j1a6x{background-color:white;color:#333;border:2px solid #333;height:40px;margin:0;padding:0 12px;font-weight:bold;text-decoration:none;white-space:nowrap}.btn.svelte-17j1a6x+.btn.svelte-17j1a6x{margin-block-start:4px}.btn-primary.svelte-17j1a6x.svelte-17j1a6x{background-color:#333;color:white}.btn.svelte-17j1a6x.svelte-17j1a6x:hover{background-color:black;border-color:black;color:white}",
  map: null
};
const AnalyticsBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_t;
  getContext("lang");
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-kcnn41_START -->${``}<!-- HEAD_svelte-kcnn41_END -->`, ""}

${``}`;
});
const css$1 = {
  code: "header.svelte-a43yuv.svelte-a43yuv{position:fixed;display:flex;flex-direction:row;left:0;right:0;top:0;height:50px;background-color:#333;z-index:2}.title.svelte-a43yuv.svelte-a43yuv{box-sizing:border-box;width:100%;display:flex;align-items:center;height:50px;padding:0 15px;font-weight:bold;font-size:1.1em}.title.svelte-a43yuv>a.svelte-a43yuv{color:white;text-decoration:none}.menu-toggle.svelte-a43yuv.svelte-a43yuv,.lang-toggle.svelte-a43yuv.svelte-a43yuv{display:inline-flex;justify-content:center;align-items:center;width:50px;min-width:50px;height:50px;background-color:#333;color:white;border:none;border-right:1px solid #777;border-radius:0;font-size:1.5em;cursor:pointer;text-decoration:none}.lang-toggle.svelte-a43yuv.svelte-a43yuv{font-size:1em;border:0}.menu-toggle.svelte-a43yuv.svelte-a43yuv:hover,.lang-toggle.svelte-a43yuv.svelte-a43yuv:hover{background-color:#444}.menu-toggle-rtl.svelte-a43yuv.svelte-a43yuv{left:auto !important;right:100%;border-right:none !important;border-left:1px solid #777}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rtl, $$unsubscribe_rtl;
  let $menu_active, $$unsubscribe_menu_active;
  let $lang, $$unsubscribe_lang;
  let $t, $$unsubscribe_t;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const menu_active = getContext("menu_active");
  $$unsubscribe_menu_active = subscribe(menu_active, (value) => $menu_active = value);
  const lang = getContext("lang");
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  const rtl = getContext("rtl");
  $$unsubscribe_rtl = subscribe(rtl, (value) => $rtl = value);
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$result.css.add(css$1);
  $$unsubscribe_rtl();
  $$unsubscribe_menu_active();
  $$unsubscribe_lang();
  $$unsubscribe_t();
  $$unsubscribe_page();
  return `<header class="svelte-a43yuv"><button class="${["menu-toggle svelte-a43yuv", $rtl ? "menu-toggle-rtl" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: $menu_active ? "close" : "menu" }, {}, {})}</button>
	<div class="title svelte-a43yuv"><a href="${escape(base, true) + "/" + escape($lang, true) + "/"}" class="svelte-a43yuv">${escape($t("Palestine Open Maps"))}</a></div>
	<a class="${["lang-toggle svelte-a43yuv", $rtl ? "lang-toggle-rtl" : ""].join(" ").trim()}"${add_attribute("title", $t("العربية"), 0)}${add_attribute("href", String($page.url.href).replace(...$lang === "en" ? ["/en", "/ar"] : ["/ar", "/en"]), 0)}>${escape($t("ع"))}</a>
</header>`;
});
const css = {
  code: "body{margin:0;padding:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lang, $$unsubscribe_lang;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  let $rtl, $$unsubscribe_rtl;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let lang = writable();
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  setContext("lang", lang);
  let rtl = writable();
  $$unsubscribe_rtl = subscribe(rtl, (value) => $rtl = value);
  setContext("rtl", rtl);
  let t = writable();
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  setContext("t", t);
  let menu_active = writable(false);
  setContext("menu_active", menu_active);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    lang.set($page.params.lang ? $page.params.lang : "en");
  }
  {
    rtl.set($lang === "ar");
  }
  {
    t.set((key) => i18n(key, data.config.translations, $lang));
  }
  $$unsubscribe_lang();
  $$unsubscribe_page();
  $$unsubscribe_t();
  $$unsubscribe_rtl();
  return `${$$result.head += `<!-- HEAD_svelte-1inu9hf_START --><meta name="description"${add_attribute("content", $t("Explore, search and download historical maps and spatial data on Palestine"), 0)}><meta property="og:description"${add_attribute("content", $t("Explore, search and download historical maps and spatial data on Palestine"), 0)}><meta property="og:type" content="website"><link rel="canonical" href="${escape(base_url, true) + escape($page.url.pathname, true)}"><meta property="og:url" content="${escape(base_url, true) + escape($page.url.pathname, true)}"><meta name="twitter:card" content="summary_large_image">${$rtl ? `<style>html {
			direction: rtl;
		}
	</style>` : ``}<!-- HEAD_svelte-1inu9hf_END -->`, ""}

${validate_component(AnalyticsBanner, "AnalyticsBanner").$$render($$result, {}, {}, {})}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-f7441226.js.map
