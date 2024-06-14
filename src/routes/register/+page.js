import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
	if(!url.searchParams.get('OrderId')) {
        throw redirect (303, '/');
    }
}
