import importCatImages from '$lib/util/cats.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params: { slug } }) {
	const catImages = await importCatImages(slug);

	if (catImages) {
		return {
			props: {
				catImages,
				slug
			}
		};
	}

	error(404, 'Cat images not found for cat: ' + slug);
}
