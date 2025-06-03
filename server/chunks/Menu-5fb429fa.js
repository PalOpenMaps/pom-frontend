import { c as create_ssr_component, a as subscribe, g as getContext, f as add_styles, v as validate_component, h as each, b as add_attribute, e as escape } from './index2-d563acd4.js';
import { b as base } from './paths-05fee424.js';
import { p as page } from './stores-d6b71bc6.js';
import { I as Icon } from './Icon-1c55d08e.js';

function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const css$1 = {
  code: ".linkbox.svelte-eypjpt{box-sizing:border-box;width:100%;border-top:1px solid grey;padding:3px 12px}.linkbox > a, .linkbox > label{display:block;color:var(--text-color, #444444);margin:10px 0}",
  map: null
};
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="linkbox svelte-eypjpt">${slots.default ? slots.default({}) : ``}
</div>`;
});
const css = {
  code: "#menu.svelte-1hmgqby.svelte-1hmgqby{position:fixed;top:49px;width:320px;height:calc(100vh - 50px);overflow-y:auto;background-color:white;transition-duration:0.3s;z-index:1}.shadow.svelte-1hmgqby.svelte-1hmgqby{box-shadow:0 0 8px rgba(0,0,0,0.5)}a.active.svelte-1hmgqby.svelte-1hmgqby{color:black;font-weight:bold}a.svelte-1hmgqby span.svelte-1hmgqby{margin:0 11px}#menu label{display:flex;flex-direction:row;align-items:flex-start;width:100%}#menu label span{margin:0 11px}#menu label button{display:inline-flex;margin-inline-start:auto;border:none;background:none;padding:3px}#menu label button:disabled{color:#ccc}#menu input[type=radio], #menu input[type=checkbox]{margin:5px 1px 3px}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $menu_active, $$unsubscribe_menu_active;
  let $rtl, $$unsubscribe_rtl;
  let $lang, $$unsubscribe_lang;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { items } = $$props;
  const lang = getContext("lang");
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  const rtl = getContext("rtl");
  $$unsubscribe_rtl = subscribe(rtl, (value) => $rtl = value);
  const menu_active = getContext("menu_active");
  $$unsubscribe_menu_active = subscribe(menu_active, (value) => $menu_active = value);
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  $$unsubscribe_menu_active();
  $$unsubscribe_rtl();
  $$unsubscribe_lang();
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<nav id="menu" class="${["svelte-1hmgqby", $menu_active ? "shadow" : ""].join(" ").trim()}"${add_styles({
    "left": $rtl ? "auto" : $menu_active ? "0" : "-320px",
    "right": !rtl ? "auto" : $menu_active ? "0" : "-320px"
  })}>${slots.default ? slots.default({}) : ``}
	${validate_component(Links, "Links").$$render($$result, {}, {}, {
    default: () => {
      return `${each(Object.values(items), (item) => {
        let href = item?.href?.slice(0, 6) === "https:" ? item.href : item.href ? `${base}/${$lang}/${item.href}` : `${base}/${$lang}`;
        return `
			<a${add_attribute("href", href, 0)} class="${["svelte-1hmgqby", $page.url.pathname === href ? "active" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: item.icon }, {}, {})}<span class="svelte-1hmgqby">${escape($t(item))}</span></a>`;
      })}`;
    }
  })}
</nav>`;
});

export { Links as L, Menu as M, afterNavigate as a };
//# sourceMappingURL=Menu-5fb429fa.js.map
