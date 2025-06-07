import { error } from '@sveltejs/kit';

export async function load({ parent, fetch, params }) {
  const stuff = await parent();
  
  const page = Object.values(stuff.config.pages).find(p => p.href === params.page);
  if (!page) {
		throw error(404, {
			message: 'Not found'
		});
	}

  const lang = params.lang;
  const url = `${stuff.data_url}/data/pages/${params.page}_${lang}.json`;
  const data = await (await fetch(url)).json();
  data.content = data.content.replaceAll("%7Bassets%7D", `${stuff.data_url}/assets`);

  return data;
}
