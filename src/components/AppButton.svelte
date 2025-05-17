<script>
	export let type = 'button';
	export let fullWidth = true;
	export let inactive = true;
	export let bgColor = 'var(--secondary-color)';
	export let textColor = 'var(--inactive-btn)';
</script>

<button
	{type}
	class="input-button"
	style="
		width: {fullWidth ? '100%' : 'auto'};
		background-color: {bgColor};
		color: {textColor};
	"
	disabled={inactive}
>
	<slot>Button</slot>
</button>

<style>
	.input-button {
		outline: none;
		border: none;
		padding: 10px;
		border-radius: 5px;
		font-size: 1.2em;
		font-weight: 500;
		cursor: pointer;
		transition: opacity 0.3s ease;
	}

	.input-button:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
</style>
