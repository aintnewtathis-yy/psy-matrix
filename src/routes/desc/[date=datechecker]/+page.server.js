import { getSquareNumbers, getDataPDF } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

export async function load({ params, locals }) {

    if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

    if(locals.user.date !== params.date){
        console.log(locals.user.date, params.date)
        throw redirect(303, `/desc/${locals.user.date}`);
    }

    const date = params.date
    const calculation = getSquareNumbers(params)
    const pdfData = await getDataPDF(locals, calculation);

	return {
        calculation,
		pdfData,
        date
	};
}
