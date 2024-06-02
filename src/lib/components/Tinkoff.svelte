
<form class="payform-tinkoff" name="payform-tinkoff" onsubmit="pay(this); return false;">
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
	<input class="payform-tinkoff-row" type="hidden" placeholder="E-mail" name="email" />
	<input class="payform-tinkoff-row" type="hidden" placeholder="Контактный телефон" name="phone" />
	<input class="payform-tinkoff-row payform-tinkoff-btn btn-main" type="submit" value="Оплатить" />
</form>
