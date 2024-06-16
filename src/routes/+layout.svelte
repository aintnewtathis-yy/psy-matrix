<script>
	import { Toaster } from 'svelte-french-toast';
	import '../app.scss';

	export let data;
</script>

<header>
	<div class="container">
		<nav>
			<ul>
				<li><a href="/">Бесплатный расчет</a></li>
				<li><a href="/login">Мой аккаунт</a></li>
			</ul>
		</nav>
	</div>
</header>

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
					<a href="https://t.me/mudrostichisel">телеграм</a>
					<a
						href="https://www.instagram.com/ma_rina.mayskaya?igsh=MWNiZjN1Z2VzbWRmYw%3D%3D&utm_source=qr"
						>инстаграм</a
					>
					<a href="https://youtube.com/@marina_mayskaya_?si=-BpbLD4WJfRuqc5y">ютуб</a>
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

<svelte:head>
	<!-- Yandex.Metrika counter -->
	<script type="text/javascript">
	(function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
	m[i].l=1*new Date();
	for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
	k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
	(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
	ym(97586428, "init", {
		 clickmap:true,
		 trackLinks:true,
		 accurateTrackBounce:true,
		 webvisor:true
	});
	</script>
	<noscript
		><div>
			<img
				src="https://mc.yandex.ru/watch/97586428"
				style="position:absolute; left:-9999px;"
				alt=""
			/>
		</div></noscript
	>
	<!-- /Yandex.Metrika counter -->
</svelte:head>

<style lang="scss">
	header {
		ul {
			padding: 20px 0;
			display: flex;
			justify-content: space-between;

			a {
				text-transform: uppercase;
				font-family: Manege;
				@include hover {
					color: var(--accent-color);
				}
			}
		}
	}
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
					@include fluid-text(12, 10);
				}
			}
		}
	}
</style>
