import { json } from '@sveltejs/kit';
import cache from '../cache.js';

export async function GET() {
    return json(cache.getStats());
}