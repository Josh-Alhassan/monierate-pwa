<script>
	export let type = 'submit'; // default to submit
	export let label = 'Submit'; // default button text
	export let disabled = false; // optional
</script>

<button class="submit-btn" {type} {disabled}>
	{label}
</button>

<style>
	.submit-btn {
		padding: 12px 24px;
		font-size: 1.2em;
		font-family: inherit;
		font-weight: 600;
		background-color: var(--primary-color);
		color: var(--text-color-white);
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s;
		text-transform: uppercase;
		width: 100%;
	}

	.submit-btn:hover {
		background-color: var(--primary-color-dark);
	}

	.submit-btn:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
</style>
