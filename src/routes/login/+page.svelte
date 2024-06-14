<script>
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import Tinkoff from '../../lib/components/Tinkoff.svelte';

	export let data;
	export let form;
	let dialog;

	onMount(async () => {
		dialog.showModal();
	});
</script>

<section>
	<dialog bind:this={dialog}>
		<div class="collect-data">
			<div class="collect-data-info">
				<h3>Вход в аккаунт</h3>
				<p>Войдите в аккаунт по данным которые вы заполняли после покупки</p>
				<div class="login">
					Уже еще нет аккаунта? 
					<Tinkoff login={true} />
				</div>
			</div>
			<form action="?/login" method="POST" class="collect-data-form" use:enhance>
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

				<button type="submit" class="btn-main">Отправить</button>
			</form>
		</div>
	</dialog>
</section>

<style lang="scss">
	.login{
		display: flex;
		gap: 10px;
	}
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
