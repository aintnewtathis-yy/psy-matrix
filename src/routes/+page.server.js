import db from '$db/mongo';
import { validateData, getSquareNumbers } from '$lib/utils';
import { dateSchema } from '$lib/schemas';
import { fail } from '@sveltejs/kit';

export const actions = {
	getData: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), dateSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		const calculation = getSquareNumbers(formData);

		return {
			calculation,
			date: formData.date
		}
	},
	inputDesc: async ({ request }) => {
		try {
			const descriptions = await db
				.collection('descriptions')
				.find({}, { projection: { _id: 0 } })
				.toArray();

			return {
				descriptions
			};
		} catch (e) {
			console.log(e);
			return {
				error: 'An error occurred while fetching data.'
			};
		}
	},
	resetForm: async () => {
		return {
			reset: true
		};
	}
};
