import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(302, '/cat/cukurins');
}
