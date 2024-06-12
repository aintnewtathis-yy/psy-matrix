import db from '$db/mongo';

export async function GET({event, resolve}) {
	try {/* 
		const descriptions = await event.locals.pb.collection('character').getFullList({
			sort: '-created',
		}); */
		

		return new Response(JSON.stringify(event), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({ error: 'An error occurred while fetching data.' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
