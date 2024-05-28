<script>
	import { fade } from 'svelte/transition';
</script>

<div class="notification active" in:fade>
	<img src="/notify.png" alt="avatar" />
	<div class="notification__info">
		<h3>Марина Майская</h3>
		<p>
			Нумеролог, помогу увеличить доход, найти <br /> предназначение и построить счастливые отношения
		</p>
		<div>
			<a href="#">инстаграм</a>
			<a href="#">телеграм</a>
			<a href="#">вконтакте</a>
		</div>
	</div>
</div>

<style lang="scss">
	.notification {
		margin-top: auto;
		display: flex;
		gap: 20px;
		padding: 20px;
		border-radius: var(--border-radius);
		background-color: #a5c3df;
		max-width: fit-content;

		@include tablet {
			padding: 15px;
			gap: 15px;
		}

		img {
			max-width: 100px;
			aspect-ratio: 1;
			object-fit: contain;

			@include desktop {
				max-width: 80px;
			}

			@include tablet {
				max-width: 70px;
			}
		}

		&__info {
			display: flex;
			flex-direction: column;
			gap: 10px;

			h3 {
				font-family: Manege;
				color: #fff;

				@include fluid-text(25, 20);
			}
			p {
				color: #fff;

				@include fluid-text(14, 12);

				@include mobile {
					@include fluid-text(12, 11);
				}
			}
			div {
				display: flex;
				gap: 20px;
				padding-top: 10px;

				@include mobile {
					gap: 10px;
				}

				a {
					font-family: Manege;
					text-transform: uppercase;
					color: #fff;

					@include fluid-text(15, 13);

					@include mobile {
						@include fluid-text(13, 12);
					}
				}
			}
		}
	}
</style>
