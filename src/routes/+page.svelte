<script>
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import Notification from '$lib/components/Notification.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import DialogPurchase from '../lib/components/DialogPurchase.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let data;
	export let form;
	let inputValue;
	let descValue;

	$: if (form?.calculation) {
		if (form.calculation.ones > 6) {
			descValue = data.descriptions.filter((desc) => desc.quantity === 6);
		} else {
			descValue = data.descriptions.filter((desc) => desc.quantity === form.calculation.ones);
		}
	}

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
		if($page.url.search === '?=failed'){
			toast.error("Оплата не прошла, попробуйте снова!");
		}
	})
	
</script>

<div class="container">
	<div class="hero">
		<div class="hero__info">
			<h1>Квадрат Пифагора</h1>
			{#if form?.calculation}
				<div class="hero__info__response" in:fade>
					{#each descValue as desc}
						<div class="hero__info__response-text">
							<h2>{desc.title}</h2>
							{@html desc.about}
							<div class="hero__info__response-text-desc">
								{@html desc.desc}
							</div>
						</div>
					{/each}
					<div class="mask"></div>
					<div class="hero__info__response-forms">
						<form action="?/resetForm" method="POST" use:enhance>
							<button class="btn-hollow">Рассчитать снова</button>
						</form>
						<DialogPurchase />
					</div>
				</div>
			{:else}
				<div class="hero__info__starter" in:fade>
					<p>
						Узнай, кем ты должен быть по своей дате рождения, какое у тебя предназначение, каким
						даром ты обладаешь, какие скрытые таланты у тебя есть, и как твои слабые стороны сделать
						твоей силой. С помощью психоматрицы ты сможешь найти ответы на все свои вопросы! Ведь
						именно в твоей дате рождения заложена вся сакральная информация, которую ты так давно
						ищешь!
					</p>
					<form method="POST" action="?/getData" use:enhance>
						<div>
							<input
								type="text"
								name="date"
								bind:value={inputValue}
								on:input={inputHandle}
								maxlength="10"
								placeholder="01.01.2001"
								class:error={form?.data?.date}
							/>
						</div>
						<button class="btn-main">Рассчитать</button>
					</form>

					{#if form?.errors}
						<p style="color: #EB1B1B; margin-top:-30px;">{form.errors.date}</p>
					{/if}

					<Notification />
				</div>
			{/if}
		</div>
		<div class="hero__square">
			<div style="border-right: none; text-align: start; gap: 10px;">
				{#if form?.calculation}
					<p in:fade>
						Дата рождения: {form?.date}
					</p>
					<p in:fade>
						Дополнительные числа: {form?.calculation?.firstAdditional},
						{form?.calculation?.secondAdditional},
						{form?.calculation?.thirdAdditional},
						{form?.calculation?.fourthAdditional}
					</p>
				{/if}
			</div>
			<div class="filled" style="border-bottom: 1px solid #E6EFF8;">
				{#if form?.calculation}
					<span in:fade>
						{form?.calculation?.threes + form?.calculation?.fives + form?.calculation?.sevens}
					</span>
				{:else}
					<span in:fade> - </span>
				{/if}
				<p>темперамент</p>
			</div>
			<div>
				{#if form?.calculation?.ones}
					<span in:fade>
						{#each Array.from({ length: form?.calculation?.ones }) as _, i}
							1
						{/each}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>характер,<br />сила воли</p>
			</div>
			<div>
				{#if form?.calculation?.fours}
					<span in:fade>
						{#each Array.from({ length: form?.calculation?.fours }) as _, i}
							4
						{/each}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>здоровье</p>
			</div>
			<div style="border-right: none;">
				{#if form?.calculation?.sevens}
					<span in:fade>
						{#each Array.from({ length: form?.calculation?.sevens }) as _, i}
							7
						{/each}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>удача,<br />везение</p>
			</div>
			<div class="filled" style="border-top: 1px solid #E6EFF8; border-bottom: 1px solid #E6EFF8;">
				{#if form?.calculation}
					<span in:fade>
						{form?.calculation?.ones + form?.calculation?.fours + form?.calculation?.sevens}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>цель</p>
			</div>
			<div>
				{#if form?.calculation?.twos}
					<span in:fade>
						{#each Array.from({ length: form?.calculation?.twos }) as _, i}
							2
						{/each}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>энергетика,<br />харизма</p>
			</div>
			<div>
				{#if form?.calculation?.fives}
					<span in:fade>
						{#each Array.from({ length: form?.calculation?.fives }) as _, i}
							5
						{/each}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>логика,<br />интуиция</p>
			</div>
			<div style="border-right: none;">
				{#if form?.calculation?.eights}
					<span in:fade>
						{#each Array.from({ length: form?.calculation?.eights }) as _, i}
							8
						{/each}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>чуство<br />долга</p>
			</div>
			<div class="filled" style="border-top: 1px solid #E6EFF8; border-bottom: 1px solid #E6EFF8;">
				{#if form?.calculation}
					<span in:fade>
						{form?.calculation?.twos + form?.calculation?.fives + form?.calculation?.eights}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>семья</p>
			</div>
			<div style="border-bottom: none;">
				{#if form?.calculation?.threes}
					<span in:fade>
						{#each Array.from({ length: form?.calculation?.threes }) as _, i}
							3
						{/each}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>интерес,<br />творчество</p>
			</div>
			<div style="border-bottom: none;">
				{#if form?.calculation?.sixes}
					<span in:fade>
						{#each Array.from({ length: form?.calculation?.sixes }) as _, i}
							6
						{/each}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>трудолюбие,<br />мастерство</p>
			</div>
			<div style="border-bottom: none; border-right: none;">
				{#if form?.calculation?.nines}
					<span in:fade>
						{#each Array.from({ length: form?.calculation?.nines }) as _, i}
							9
						{/each}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>память,<br />ум</p>
			</div>
			<div class="filled" style="border-top: 1px solid #E6EFF8; border-bottom: 1px solid #E6EFF8;">
				{#if form?.calculation}
					<span in:fade>
						{form?.calculation?.threes + form?.calculation?.sixes + form?.calculation?.nines}
					</span>
				{:else}
					<span in:fade> - </span>
				{/if}
				<p>привычки</p>
			</div>
			<div class="filled" style="border-right: 1px solid #E6EFF8;">
				{#if form?.calculation}
					<span in:fade>
						{form?.calculation?.ones + form?.calculation?.twos + form?.calculation?.threes}
					</span>
				{:else}
					<span in:fade> -</span>
				{/if}
				<p>самооценка</p>
			</div>
			<div class="filled" style="border-right: 1px solid #E6EFF8; border-left: 1px solid #E6EFF8;">
				{#if form?.calculation}
					<span in:fade>
						{form?.calculation?.fours + form?.calculation?.fives + form?.calculation?.sixes}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>быт</p>
			</div>
			<div class="filled" style="border-right: 1px solid #E6EFF8; border-left: 1px solid #E6EFF8;">
				{#if form?.calculation}
					<span in:fade>
						{form?.calculation?.sevens + form?.calculation?.eights + form?.calculation?.nines}
					</span>
				{:else}
					<span in:fade> - </span>
				{/if}
				<p>талант</p>
			</div>
			<div class="filled" style="border-top: 1px solid #E6EFF8; border-left: 1px solid #E6EFF8;">
				{#if form?.calculation}
					<span in:fade>
						{form?.calculation?.ones + form?.calculation?.fives + form?.calculation?.nines}
					</span>
				{:else}
					<span in:fade>-</span>
				{/if}
				<p>духовность</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.hero {
		padding-top: 100px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;

		@include tablet {
			padding-top: 60px;
			display: flex;
			flex-direction: column;
		}

		&__info {
			display: flex;
			flex-direction: column;
			gap: 30px;

			h1 {
				font-family: Manege;

				@include fluid-text(70, 50);

				@include mobile {
					@include fluid-text(50, 40);
				}
			}

			& > * {
				@include fluid-text(18, 16);
			}

			&__starter {
				display: flex;
				flex-direction: column;
				gap: 60px;
				height: 100%;

				form {
					display: flex;
					gap: 20px;

					@include mobile {
						gap: 10px;
					}

					div {
						flex: 0 0 calc(100% / 2 - 10px);
						max-width: fit-content;

						@include mobile {
							flex: 0 0 calc(100% / 2 - 5px);
						}
						input {
							max-width: fit-content;
						}
					}
					button {
						flex: 0 0 calc(100% / 2 - 10px);

						@include mobile {
							flex: 0 0 calc(100% / 2 - 5px);
						}
					}
				}
			}
			&__response {
				display: flex;
				flex-direction: column;
				gap: 20px;

				&-text {
					display: flex;
					flex-direction: column;
					gap: 10px;

					&-desc {
						display: flex;
						flex-direction: column;
						gap: 10px;
					}

					h2 {
						font-weight: 400;

						@include fluid-text(20, 18);
					}
				}

				&-forms{
					display: flex;
					gap: 20px;

					form{
						width: 100%;
						flex: 0 0 calc((100% - 20px)/2);
					}
				}
			}
		}

		&__square {
			border-radius: var(--border-radius);
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			border: 1px solid var(--accent-color);
			height: min-content;

			div {
				padding: 40px 40px 15px 40px;
				display: flex;
				flex-direction: column;
				gap: 15px;
				text-align: center;
				border: 1px solid var(--accent-color);

				@include desktop {
					padding: 30px 30px 15px 30px;
				}
				@include mobile {
					padding: 10px;
				}

				span {
					@include fluid-text(35, 30);

					@include desktop {
						gap: 10px;
					}

					@include mobile {
						@include fluid-text(30, 20);
					}
				}
				p {
					@include desktop {
						@include fluid-text(16, 12);
					}

					@include tablet {
						@include fluid-text(16, 16);
					}

					@include mobile {
						@include fluid-text(16, 10);
					}
				}

				&:first-child {
					grid-column: span 3;
					border-top-left-radius: var(--border-radius);
				}
				&:nth-child(2) {
					border-top-right-radius: var(--border-radius);
				}
				&:nth-child(15) {
					border-bottom-left-radius: var(--border-radius);
				}
				&:last-child {
					border-bottom-right-radius: var(--border-radius);
				}

				&.filled {
					background-color: var(--accent-color);
					border: none;
					span {
						color: #fff;
					}
					p {
						color: #fff;
					}
				}
			}
		}
	}
	.mask {
		margin-top: -55px;
		height: 40px;
		width: 100%;

		background: #fffaf6;
		background: linear-gradient(0deg, #fffaf6 20%, rgba(0, 0, 0, 0) 100%);
	}
</style>
