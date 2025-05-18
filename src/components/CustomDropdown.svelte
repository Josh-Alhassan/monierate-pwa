<script>
	export let options = [];
	export let selected = null;
	export let onSelect = () => {};

	let showOptions = false;

	const toggleDropdown = () => {
		showOptions = !showOptions;
	};

	const selectOption = (option) => {
		selected = option;
		onSelect(option);
		showOptions = false;
	};
</script>

<div class="custom-dropdown">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="selected" on:click={toggleDropdown}>
		{#if selected}
			<div class="selected-group">
				<img src={selected.icon} alt={selected.label} />
				<span>{selected.label}</span>
			</div>
		{:else}
			<span>Select asset</span>
		{/if}
		<svg width="10" height="6" viewBox="0 0 10 6" fill="none">
			<path
				d="M1 1L5 5L9 1"
				stroke="#999"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>

	{#if showOptions}
		<div class="options">
			{#each options as option}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="option" on:click={() => selectOption(option)}>
					<img src={option.icon} alt={option.label} />
					<span>{option.label}</span>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.custom-dropdown {
		position: relative;
		font-family: sans-serif;
		font-size: 1.2em;
		font-weight: 600;
		font-family: 'Onest', sans-serif;
		outline: none;
		border: none;
		background-color: #1f75fe0d;
		color: #333;
		width: 100%;
		appearance: none;
	}

	.selected {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid #ccc;
		padding: 15px;
		background-color: white;
		border-radius: 5px;
		cursor: pointer;
		gap: 8px;

		background-color: transparent;
		outline: none;
		border: none;
	}

	.selected-group {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.selected img {
		width: 18px;
		height: 18px;
	}

	.options {
		position: absolute;
		top: 110%;
		left: 0;
		right: 0;
		background-color: white;
		border: 1px solid #ddd;
		border-radius: 5px;
		max-height: 200px;
		overflow-y: auto;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		z-index: 10;
	}

	.option {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px;
		cursor: pointer;
	}

	.option:hover {
		background-color: #1f75fe0d;
	}

	.option img {
		width: 18px;
		height: 18px;
	}
</style>
