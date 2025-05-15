<script>
	export let label = 'Toggle';
	export let active = false;
	export let onClick = () => {};
</script>

<button class="toggle-btn {active ? 'toggle-active' : ''}" on:click={onClick}>
	{label}
</button>

<style>
	.toggle-btn {
		font-weight: 700;
		color: var(--text-color-alt);
		padding: 10px 30px;
		border-radius: 5px;
		border: none;
		text-transform: uppercase;
		font-family: inherit;
		font-size: 0.8em;
		line-height: 100%;
		background-color: transparent;
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.toggle-btn:hover {
		opacity: 0.9;
	}

	.toggle-active {
		background-color: var(--primary-color);
		color: var(--text-color-white);
	}
</style>
