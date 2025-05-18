<!-- CurrencyItem.svelte -->
<script>
	export let value = '$';
	export let active = false;
	export let onSelect = () => {};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="currency {active ? 'active' : ''}" on:click={() => onSelect(value)}>
	{value}
</div>

<style>
	.currency {
		width: 27.5px;
		height: 27.5px;
		border-radius: 50%;
		background-color: #f8f8f8;
		font-size: 14px;
		font-weight: 500;
		color: #b3b0b0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: border 0.2s ease;
		cursor: pointer;
	}

	.currency:hover {
		border: 1px solid var(--primary-color);
	}

	.currency.active {
		border: 2px solid var(--primary-color);
		color: var(--primary-color);
	}
</style>
