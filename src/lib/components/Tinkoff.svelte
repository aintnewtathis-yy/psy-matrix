<script type="text/javascript">
	import { onMount } from 'svelte';

	let TPF;
	export let login;

	onMount(() => {
		if (TPF) {
			TPF.addEventListener('submit', function (e) {
				e.preventDefault();
				const { description, amount, email, phone, receipt } = TPF;

				if (receipt) {
					if (!email.value && !phone.value) {
						return alert('Поле E-mail или Phone не должно быть пустым');
					}

					TPF.receipt.value = JSON.stringify({
						EmailCompany: '1loso@mail.ru',
						Taxation: 'patent',
						FfdVersion: '1.2',
						Items: [
							{
								Name: description.value || 'Оплата',
								Price: amount.value + '00',
								Quantity: 1.0,
								Amount: amount.value + '00',
								PaymentMethod: 'full_prepayment',
								PaymentObject: 'service',
								Tax: 'none',
								MeasurementUnit: 'pc'
							}
						]
					});
				}
				pay(TPF);
			});
		}
	});
</script>

<form class="payform-tinkoff" class:login name="payform-tinkoff" bind:this={TPF}>
	<input class="payform-tinkoff-row" type="hidden" name="terminalkey" value="1717138578443" />
	<input class="payform-tinkoff-row" type="hidden" name="frame" value="false" />
	<input class="payform-tinkoff-row" type="hidden" name="language" value="ru" />
	<input class="payform-tinkoff-row" type="hidden" name="receipt" value="" />
	<input
		class="payform-tinkoff-row"
		type="hidden"
		placeholder="Сумма заказа"
		name="amount"
		value="700"
		required
	/>
	<input class="payform-tinkoff-row" type="hidden" placeholder="Номер заказа" name="order" />
	<input
		class="payform-tinkoff-row"
		type="hidden"
		placeholder="Описание заказа"
		name="description"
	/>
	<input class="payform-tinkoff-row" type="hidden" placeholder="ФИО плательщика" name="name" />
	<input
		class="payform-tinkoff-row"
		type="hidden"
		placeholder="E-mail"
		name="email"
		value="example@mail.ru"
	/>
	<input class="payform-tinkoff-row" type="hidden" placeholder="Контактный телефон" name="phone" />
	<input
		class="payform-tinkoff-row payform-tinkoff-btn"
		class:btn-main={!login}
		type="submit"
		value={login ? 'Купить полный доступ' : 'Оплатить'}
	/>
</form>

<style lang="scss">
	.login {
		input {
			padding: 0;
			margin: 0;
			border: none;
			font-family: Inter;
			width: fit-content;
			outline: none;
			text-decoration: underline;

			&:focus{
				outline: none;
			}

			cursor: pointer;

			

			@include fluid-text(16, 16);

			@include mobile {
				@include fluid-text(16, 12);
				line-height: 140%;
			}
		}
	}
</style>
