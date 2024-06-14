import { validateData } from '$lib/utils';
import { loginSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if(locals.user?.date){
		throw redirect(303, `/desc/${locals.user.date}`);
	}
}
 
export const actions = {
	login: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), loginSchema);

		let dateValue;

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			const user = await locals.pb
				.collection('users')
				.authWithPassword(formData.email, formData.password);

			dateValue = user.record.date;
		} catch (err) {
			console.log('Error: ', err.message);
			return fail(400, {
				data: formData,
				loginFailed: true
			});
		}

		throw redirect(303, `/desc/${dateValue}`);
	}
};
