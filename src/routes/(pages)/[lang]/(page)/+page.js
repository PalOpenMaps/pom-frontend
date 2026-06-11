import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { languages } from '$lib/config.js';

export async function load({params}) {
    if (!languages.includes(params.lang)) redirect(301, `${base}/en/`);
    return {};
}