<script>
	export let text = 'Title';
	export let level = 'h2'; // defaults to h2
	export let color = '#000000';
</script>

<svelte:element this={level} class="converter-title" style="color: {color}">
	{text}
</svelte:element>

<style>
	.converter-title {
		font-size: 1.6em;
		font-weight: 500;
		line-height: 18px;
	}
</style>
