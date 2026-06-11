import { text } from '@sveltejs/kit';
import cache from '../../cache.js';

export async function GET() {
    cache.flushAll();
    return text("Cache cleared");
}