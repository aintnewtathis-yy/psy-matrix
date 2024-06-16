<script>
	import PdfButton from '$lib/components/PDFButton.svelte';
	import Square from '$lib/components/Square.svelte';

	export let data;

	const arr = Object.values(data.pdfData);
</script>

<div class="container" id="html-pdf">
	<section>
		<h1>Дата рождения: <span>{data.date}</span></h1>
		
		<Square {data} />

		{#each arr as el}
			<div class="desc">
				<div>
					<h2>{el.name}</h2>
					<h3>{el.about}</h3>
				</div>
				{@html el.desc}
			</div>
		{/each}

		
	</section>
</div>


<PdfButton />

<style lang="scss">
	section {
		padding: 40px 0;
		display: flex;
		flex-direction: column;
		gap: 50px;

		h1{
			font-family: Manege;

			@include fluid-text(35, 30);

			span{
				font-family: Inter;
				font-weight: 300;

				@include fluid-text(30, 25);
			}
		}
	}
	.desc {
		display: flex;
		flex-direction: column;
		gap: 10px;

		@include fluid-text(18, 16);

		div {
			display: flex;
			flex-direction: column;
			gap: 20px;
			padding-bottom: 10px;
		}

		h2 {
			font-family: Manege;

			@include fluid-text(35, 30);
		}
		h3 {
			@include fluid-text(18, 16);
			font-weight: 300;
			opacity: 0.6;
		}
	}
</style>

<svelte:head>
	<title>Полный разбор психоматрицы</title>
	<meta name="description" content="Полный разбор психоматрицы"/>
</svelte:head>