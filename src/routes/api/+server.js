import db from '$db/mongo';

export async function GET() {
	try {
		const descriptions = await db
			.collection('descriptions')
			.find({}, { projection: { _id: 0 } })
			.toArray();

		return new Response(JSON.stringify(descriptions), {
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
