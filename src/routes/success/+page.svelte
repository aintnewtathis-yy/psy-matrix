<script>
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	export let data;
	export let form;
	let dialog;
	let inputValue;

	function inputHandle() {
		this.classList.remove('error');
		let arr = inputValue.split('');

		for (let i = 0; i++; i < arr.length) {
			spanArr[i].style.opacity = '0';
		}

		if (arr[2] && arr[2] !== '.') {
			arr.splice(2, 0, '.');
		}

		if (arr[5] && arr[5] !== '.') {
			arr.splice(5, 0, '.');
		}

		inputValue = arr.join('');
	}

	onMount(() => {
		dialog.showModal();
	});

</script>

<section>
	<dialog bind:this={dialog}>
		<div class="collect-data">
			<div class="collect-data-info">
				<h3>Получите полный разбор</h3>
				<p>Заполните форму и в течении дня мы отправим полный разбор в удобный вам мессенджер!</p>
			</div>
			<form action="?/fullPrediction" method="POST" class="collect-data-form" use:enhance>
				<div>
					<label for="name">Имя</label>
					<input type="text" name="name" placeholder="Имя" value={form?.data.name ?? ''} />
					{#if form?.errors.name}
						<p style="color: #EB1B1B;">{form.errors.name[0]}</p>
					{/if}
				</div>
				<div>
					<label for="date">Дата рождения</label>
					<input
						type="text"
						name="date"
						bind:value={inputValue}
						on:input={inputHandle}
						maxlength="10"
						placeholder="01.01.2001"
						class:error={form?.errors.date}
					/>
					{#if form?.errors.date}
						<p style="color: #EB1B1B;">{form.errors.date[0]}</p>
					{/if}
				</div>
				<div>
					<label for="messanger">Мессенджер/телефон/email</label>
					<input
						type="text"
						name="messanger"
						placeholder="Telegram/Whatsapp"
						value={form?.data.messanger ?? ''}
						class:error={form?.errors.messanger}
					/>
					{#if form?.errors.messanger}
						<p style="color: #EB1B1B;">{form.errors.messanger[0]}</p>
					{/if}
				</div>

				<button type="submit" class="btn-main">Отправить</button>
			</form>
		</div>
	</dialog>
</section>

<style lang="scss">
	section {
		height: 63vh;

		@include mobile {
			height: 73vh;
		}
	}
	dialog {
		margin: auto;
		padding: 30px;
		background-color: #fff;
		border-radius: var(--border-radius);

		@include mobile {
			padding: 20px;
		}

		.collect-data {
			display: flex;
			gap: 40px;

			@include mobile {
				flex-direction: column;
			}

			&-info {
				flex: 0 0 calc((100% - 40px) / 2);
				display: flex;
				flex-direction: column;
				gap: 20px;

				h3 {
					font-family: Manege;

					@include fluid-text(35, 30);
				}
				p {
					text-wrap: balance;
					@include fluid-text(16, 14);
				}
			}
			&-form {
				flex: 0 0 calc((100% - 40px) / 2);
				display: flex;
				flex-direction: column;
				gap: 10px;

				div {
					display: flex;
					flex-direction: column;
					gap: 5px;

					label {
						@include fluid-text(16, 12);
					}
				}

				input {
					padding: 12px;

					@include fluid-text(25, 22);
				}
				button {
					margin-top: 20px;
					max-width: 1000px;
				}
			}
		}
	}
</style>
