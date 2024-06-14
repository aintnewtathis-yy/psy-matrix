<script>
	import { page } from '$app/stores';
</script>

<div class="container">
	<div>
		<h1>{$page.status}: {$page.error.message}</h1>
	</div>
</div>

<style lang="scss">
	.container {
		div {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 65vh;

            h1{
                font-family: Manege;
                font-size: 35px;
            }
		}
	}
</style>
