<script>
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	export let data;
	export let form;
	let dialog;
	let inputValue;

	onMount(async () => {
		dialog.showModal();
	});

	function inputHandle(event) {
		event.target.classList.remove('error');
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
</script>

<section>
	<dialog bind:this={dialog}>
		<div class="collect-data">
			<div class="collect-data-info">
				<h3>Пройдите регистрацию</h3>
				<p>Заполните форму регистрации и получите полный разбор по введенной дате рождения</p>
				<p class="login">Уже есть аккаунт? <a href="/login">Зайдите в аккаунт здесь</a></p>
			</div>
			<form action="?/register" method="POST" class="collect-data-form" use:enhance>
				<div>
					<label for="email">Email</label>
					<input
						type="text"
						name="email"
						placeholder="example@mail.ru"
						value={form?.data.email ?? ''}
						class:error={form?.errors.email}
					/>
					{#if form?.errors.email}
						<p style="color: #EB1B1B;">{form.errors.email[0]}</p>
					{/if}
				</div>
				<div>
					<label for="password">Пароль</label>
					<input
						type="password"
						name="password"
						placeholder="Пароль"
						value={form?.data.password ?? ''}
						class:error={form?.errors.password}
					/>
					{#if form?.errors.password}
						<p style="color: #EB1B1B;">{form.errors.password[0]}</p>
					{/if}
				</div>
				<div>
					<label for="passwordConfirm">Подтвердите пароль</label>
					<input
						type="password"
						name="passwordConfirm"
						placeholder="Пароль"
						value={form?.data.passwordConfirm ?? ''}
						class:error={form?.errors.passwordConfirm}
					/>
					{#if form?.errors.passwordConfirm}
						<p style="color: #EB1B1B;">{form.errors.passwordConfirm[0]}</p>
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
						class:error={form?.errors.date[0]}
					/>
					{#if form?.errors.date}
						<p style="color: #EB1B1B;">{form.errors.date[0]}</p>
					{/if}
				</div>

				<button type="submit" class="btn-main">Регистрация</button>
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

				.login {
					margin-top: auto;
					a {
						text-decoration: underline;

						@include hover {
							opacity: 0.8;
						}
					}
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
