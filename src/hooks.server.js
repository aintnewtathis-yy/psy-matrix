import PocketBase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase('http://127.0.0.1:8090');
	try {
		const authData = await event.locals.pb.admins.authWithPassword('1loso@mail.ru', 'AZ2245688q');
	} catch (e) {
		console.error('Error during PocketBase operations:', e);
	}

	const response = await resolve(event);

	return response;
};
