import importCatImages from '$lib/util/cats.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async({ params: { slug } }) => {
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
