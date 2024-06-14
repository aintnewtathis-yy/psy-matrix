import { validateData, generateUsername } from '$lib/utils';
import { registerSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	fullPrediction: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), registerSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		throw redirect(303, `/desc/${formData.date}`);
	},
	register: async ({ request, locals }) => {
		const { formData, errors } = await validateData(
			await request.formData(),
			registerSchema,
		);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors,
			});
		}

		let username = generateUsername(formData.email.split(' ').join('')).toLowerCase();
		try {
			await locals.pb.collection('users').create({ username, ...formData });
		} catch (err) {
			console.log('Error: ', err);
			return fail(400,{
				formData,
				registerFailed: true,
				errors: err.message,
			});
		}

		throw redirect(303, `/desc/${formData.date}`);
	}
};
