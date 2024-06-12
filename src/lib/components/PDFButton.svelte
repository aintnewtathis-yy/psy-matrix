<script>
	import { jsPDF } from 'jspdf';
	import { base64font, base64font2 } from '$lib/base64.js';
	import { onMount } from 'svelte';

	let html;

	function savePDF() {
		const contentWidth = html.offsetWidth;
		const estimatedHeight = html.scrollHeight;
        console.log(contentWidth,estimatedHeight)
        html.style.fontFamily = "Inter"

		const doc = new jsPDF({
			orientation: 'v', // Landscape
			unit: 'mm',
			format: [contentWidth, estimatedHeight] // Custom width, assuming a fixed height for simplicity
		});

		doc.addFileToVFS('Inter-Regular.ttf', base64font);
		doc.addFileToVFS('ManegeDemo-Light.ttf', base64font2);
		doc.addFont('Inter-Regular.ttf', 'Inter', 'normal');
		doc.addFont('ManegeDemo-Light.ttf', 'Manege', 'normal');
		doc.setFont('Inter');
		doc.setFont('Manege');

		doc.html(html, {
			windowWidth: contentWidth,
			callback: function (doc) {
				doc.save('Полный разбор.pdf');
			},
			x: 10,
			y: 10,
		});
	}

	onMount(() => {
		html = document.querySelector('#html-pdf');
	});
</script>

<div>
	<button class="btn-main" on:click={savePDF}> Скачать PDF </button>
</div>

<style>
	div {
		position: fixed;
		padding: 10px 20px 15px 20px;
		border-radius: var(--border-radius);
		background-color: var(--light-accent-color);
		z-index: 10;
		left: 50%;
		transform: translateX(-50%);
		bottom: -5px;
		min-width: 360px;
	}
	button {
		width: 100%;
	}
</style>
