<script>
	export let text = '';
	export let icon = null; // SVG component (optional)
</script>

<span class="label">
	{#if icon}
		<svelte:component this={icon} class="icon" />
	{/if}
	{text}
</span>

<style>
	.label {
		color: var(--green-color);
		background-color: var(--green-color-bg);
		padding: 4px 5px;
		border-radius: 5px;
		margin-top: 5px;
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-size: 1em;
	}

	.icon {
		width: 16px;
		height: 16px;
	}
</style>
