import { error } from '@sveltejs/kit';
import { resolve } from "$app/paths";

export async function load({ parent, fetch, params }) {
  const stuff = await parent();
  
  const page = Object.values(stuff.config.pages).find(p => p.href === params.page);
  
  if (!page) {
		error(404, {
      			message: 'Not found'
      		});
	}

  const url = resolve(`/api/pages/${params.page}`);
  const data = await (await fetch(url)).json();

  return {page: data};
}
