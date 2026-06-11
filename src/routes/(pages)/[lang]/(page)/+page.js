import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export async function load({params}) {
    if (!["en", "ar"].includes(params.lang)) redirect(301, `${base}/en/`);
    return {};
}