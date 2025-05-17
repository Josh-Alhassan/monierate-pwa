<script>
	export let type = 'button';
	export let fullWidth = true;
	export let inactive = true;
	export let textColor = 'var(--inactive-btn)';

	const borderColor = 'var(--primary-color)';
</script>

<button
	{type}
	class="input-button"
	disabled={inactive}
	style="
		width: {fullWidth ? '100%' : 'auto'};
		background-color: {inactive ? '#F7F7F7' : 'transparent'};
		color: {inactive ? 'var(--inactive-btn)' : textColor};
		border: {inactive ? 'none' : `1px solid ${borderColor}`};
	"
>
	<slot>Button</slot>
</button>

<style>
	.input-button {
		outline: none;
		padding: 10px;
		border-radius: 5px;
		font-size: 1.2em;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.input-button:disabled {
		cursor: not-allowed;
	}
</style>
