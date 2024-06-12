<script type="text/javascript">
	import { onMount } from 'svelte';

	let TPF;

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

<form class="payform-tinkoff" name="payform-tinkoff" bind:this={TPF}>
	<input class="payform-tinkoff-row" type="hidden" name="terminalkey" value="1717138578425DEMO" />
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
	<input class="payform-tinkoff-row payform-tinkoff-btn btn-main" type="submit" value="Оплатить" />
</form>
