import { browser } from '$app/environment';


export async function load({ fetch }) {
	let descriptions = [];

	if (browser) {
		const res = await fetch('/api');
		if (res.ok) {
			descriptions = await res.json();
		} else {
			console.log('Failed to fetch descriptions:', res.status, res.statusText);
		}
	}

	return {
		descriptions
	};
}