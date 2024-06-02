<script>
	import { Toaster } from 'svelte-french-toast';
	import '../app.scss';

	export let data;
</script>

<slot />

<Toaster />


<footer>
	<div class="container">
		<div class="footer">
			<div class="footer__top">
				<div>
					<p>ИП Кравченко Марина Александровна</p>
					<p>ИНН 324104943706</p>
					<p>ОГРН 324774600001120</p>
				</div>
				<div>
					<a href="#">телеграм</a>
					<a href="#">инстаграм</a>
				</div>
			</div>
			<div class="footer__bottom">
				<p>2023</p>
				<a href="/privacy">Политика конфиденциальности</a>
				<a href="/public-offer">Договор офферты</a>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		margin-top: 100px;
        background-color: #fffaf6;
		border-top: 1px solid var(--light-accent-color);
		display: flex;
		flex-direction: column;
		gap: 50px;
		padding-top: 20px;
		padding-bottom: 20px;

		@include mobile {
			margin-top: 60px;
		}

		&__top {
			display: flex;
			justify-content: space-between;

			div {
				display: flex;
				flex-direction: column;
				gap: 5px;

				&:has(a) {
					text-align: end;
					text-transform: uppercase;
					font-family: Manege;
				}

				p {
					opacity: 0.8;
				}
				a {
					@include hover {
						color: var(--accent-color);
					}
				}
			}
		}

		&__bottom {
			display: flex;
			justify-content: space-between;
			p,
			a {
				opacity: 0.8;

				@include mobile {
					@include fluid-text(12,10);
				}
			}
		}
	}
</style>
