import importCatImages from '$lib/util/cats.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const catImages = await importCatImages(params.slug);

    if (catImages) {
        return {
            props: {
                catImages,
                slug: params.slug
            },
        };
    }

	error(404, 'Cat Images Not found');
}
