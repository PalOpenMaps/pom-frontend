import { error } from '@sveltejs/kit';
import { cdnBase } from '$lib/config';

export async function load({ parent, fetch, params }) {
  const stuff = await parent();
  
  const page = Object.values(stuff.config.pages).find(p => p.href === params.page);
  if (!page) {
		throw error(404, {
			message: 'Not found'
		});
	}

  const lang = params.lang;
  const url = `${cdnBase}/data/pages/${params.page}_${lang}.json`;
  const data = await (await fetch(url)).json();
  data.content = data.content.replaceAll("%7Bassets%7D", `${cdnBase}/assets`);

  return data;
}
