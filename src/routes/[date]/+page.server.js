import { validateData, getSquareNumbers, formPDF, getDataPDF } from '$lib/utils';

export async function load({ params, locals }) {
    const date = params.date
    const calculation = getSquareNumbers(params)
    const pdfData = await getDataPDF(locals, calculation);

	return {
        calculation,
		pdfData,
        date
	};
}
