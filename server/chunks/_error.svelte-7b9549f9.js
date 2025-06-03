import { c as create_ssr_component, a as subscribe, e as escape } from './index2-d563acd4.js';
import { p as page } from './stores-d6b71bc6.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1>

<p>${escape($page.error.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-7b9549f9.js.map
