<script>
    export let data
</script>

<div class="hero__square">
    <div style="border-right: none; text-align: start; gap: 10px;">
        {#if data?.calculation}
            <p in:fade>
                Дата рождения: {data?.date}
            </p>
            <p in:fade>
                Дополнительные числа: {data?.calculation?.firstAdditional},
                {data?.calculation?.secondAdditional},
                {data?.calculation?.thirdAdditional},
                {data?.calculation?.fourthAdditional}
            </p>
        {/if}
    </div>
    <div class="filled" style="border-bottom: 1px solid #E6EFF8;">
        {#if data?.calculation}
            <span in:fade>
                {data?.calculation?.threes + data?.calculation?.fives + data?.calculation?.sevens}
            </span>
        {:else}
            <span in:fade> - </span>
        {/if}
        <p>темперамент</p>
    </div>
    <div>
        {#if data?.calculation?.ones}
            <span in:fade>
                {#each Array.from({ length: data?.calculation?.ones }) as _, i}
                    1
                {/each}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>характер,<br />сила воли</p>
    </div>
    <div>
        {#if data?.calculation?.fours}
            <span in:fade>
                {#each Array.from({ length: data?.calculation?.fours }) as _, i}
                    4
                {/each}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>здоровье</p>
    </div>
    <div style="border-right: none;">
        {#if data?.calculation?.sevens}
            <span in:fade>
                {#each Array.from({ length: data?.calculation?.sevens }) as _, i}
                    7
                {/each}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>удача,<br />везение</p>
    </div>
    <div class="filled" style="border-top: 1px solid #E6EFF8; border-bottom: 1px solid #E6EFF8;">
        {#if data?.calculation}
            <span in:fade>
                {data?.calculation?.ones + data?.calculation?.fours + data?.calculation?.sevens}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>цель</p>
    </div>
    <div>
        {#if data?.calculation?.twos}
            <span in:fade>
                {#each Array.from({ length: data?.calculation?.twos }) as _, i}
                    2
                {/each}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>энергетика,<br />харизма</p>
    </div>
    <div>
        {#if data?.calculation?.fives}
            <span in:fade>
                {#each Array.from({ length: data?.calculation?.fives }) as _, i}
                    5
                {/each}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>логика,<br />интуиция</p>
    </div>
    <div style="border-right: none;">
        {#if data?.calculation?.eights}
            <span in:fade>
                {#each Array.from({ length: data?.calculation?.eights }) as _, i}
                    8
                {/each}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>чуство<br />долга</p>
    </div>
    <div class="filled" style="border-top: 1px solid #E6EFF8; border-bottom: 1px solid #E6EFF8;">
        {#if data?.calculation}
            <span in:fade>
                {data?.calculation?.twos + data?.calculation?.fives + data?.calculation?.eights}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>семья</p>
    </div>
    <div style="border-bottom: none;">
        {#if data?.calculation?.threes}
            <span in:fade>
                {#each Array.from({ length: data?.calculation?.threes }) as _, i}
                    3
                {/each}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>интерес,<br />творчество</p>
    </div>
    <div style="border-bottom: none;">
        {#if data?.calculation?.sixes}
            <span in:fade>
                {#each Array.from({ length: data?.calculation?.sixes }) as _, i}
                    6
                {/each}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>трудолюбие,<br />мастерство</p>
    </div>
    <div style="border-bottom: none; border-right: none;">
        {#if data?.calculation?.nines}
            <span in:fade>
                {#each Array.from({ length: data?.calculation?.nines }) as _, i}
                    9
                {/each}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>память,<br />ум</p>
    </div>
    <div class="filled" style="border-top: 1px solid #E6EFF8; border-bottom: 1px solid #E6EFF8;">
        {#if data?.calculation}
            <span in:fade>
                {data?.calculation?.threes + data?.calculation?.sixes + data?.calculation?.nines}
            </span>
        {:else}
            <span in:fade> - </span>
        {/if}
        <p>привычки</p>
    </div>
    <div class="filled" style="border-right: 1px solid #E6EFF8;">
        {#if data?.calculation}
            <span in:fade>
                {data?.calculation?.ones + data?.calculation?.twos + data?.calculation?.threes}
            </span>
        {:else}
            <span in:fade> -</span>
        {/if}
        <p>самооценка</p>
    </div>
    <div class="filled" style="border-right: 1px solid #E6EFF8; border-left: 1px solid #E6EFF8;">
        {#if data?.calculation}
            <span in:fade>
                {data?.calculation?.fours + data?.calculation?.fives + data?.calculation?.sixes}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>быт</p>
    </div>
    <div class="filled" style="border-right: 1px solid #E6EFF8; border-left: 1px solid #E6EFF8;">
        {#if data?.calculation}
            <span in:fade>
                {data?.calculation?.sevens + data?.calculation?.eights + data?.calculation?.nines}
            </span>
        {:else}
            <span in:fade> - </span>
        {/if}
        <p>талант</p>
    </div>
    <div class="filled" style="border-top: 1px solid #E6EFF8; border-left: 1px solid #E6EFF8;">
        {#if data?.calculation}
            <span in:fade>
                {data?.calculation?.ones + data?.calculation?.fives + data?.calculation?.nines}
            </span>
        {:else}
            <span in:fade>-</span>
        {/if}
        <p>духовность</p>
    </div>
</div>


<style lang="scss">
    .hero{

        &__square {
            width: 50%;
            margin: 0 auto;
			border-radius: var(--border-radius);
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			border: 1px solid var(--accent-color);
			height: min-content;

            @include mobile {
                width: 100%;
            }

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
</style>