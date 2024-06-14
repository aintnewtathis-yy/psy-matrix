import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase('http://pb.marina-mayskaya.ru');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		await event.locals.pb.collection('users').authRefresh();
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} catch (_) {
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
