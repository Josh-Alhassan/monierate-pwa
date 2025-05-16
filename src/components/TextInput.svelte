<script>
	export let id = '';
	export let type = 'text';
	export let label = '';
	export let placeholder = '';
	export let value = '';
	export let required = false;

	// Emit input event for two-way binding
	const handleInput = (e) => {
		value = e.target.value;
		dispatch('input', value);
	};

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<label class="label-input" for={id}>{label}</label>
<input class="input-input" {id} {type} {placeholder} {required} bind:value on:input={handleInput} />

<style>
	.label-input {
		font-weight: 500;
		font-size: 1.4em;
		color: var(--text-color-light);
		display: block;
		margin-bottom: 6px;
	}

	.input-input {
		border: 1px solid var(--secondary-color);
		border-radius: 5px;
		font-size: 14px;
		font-weight: 500;
		padding: 10px;
		width: 100%;
		box-sizing: border-box;

		color: var(--text-color-light);
	}

	.input-input:focus {
		outline: 1px solid var(--text-color-light);
	}

	.input-input::placeholder {
		font-size: 14px;
		font-weight: 500;
	}
</style>
