import { validateData } from '$lib/utils';
import { successSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	fullPrediction: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), successSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		throw redirect(303, `/${formData.date}`);
	}
};
