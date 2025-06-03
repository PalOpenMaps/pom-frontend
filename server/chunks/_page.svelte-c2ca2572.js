import { c as create_ssr_component, g as getContext, a as subscribe, e as escape } from './index2-d563acd4.js';
import { a as cdnBase } from './config-4128fe2f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let { data } = $$props;
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-188oqe2_START -->${$$result.title = `<title>${escape(data.title)} - ${escape($t("Palestine Open Maps"))}</title>`, ""}<meta property="og:title" content="${escape(data.title, true) + " - " + escape($t("Palestine Open Maps"), true)}"><meta property="og:image" content="${escape(cdnBase, true) + "/assets/img/haifa-crop.jpg"}"><!-- HEAD_svelte-188oqe2_END -->`, ""}

<h1>${escape(data.title)}</h1>
${data.content ? `<!-- HTML_TAG_START -->${data.content}<!-- HTML_TAG_END -->` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c2ca2572.js.map
