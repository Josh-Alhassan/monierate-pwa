<script>
	export let href = '#';
	export let fullWidth = false;
	export let borderColor = 'var(--primary-color)';
	export let textColor = 'var(--primary-color)';
</script>

<a
	{href}
	class="app-link"
	style="
		width: {fullWidth ? '100%' : 'auto'};
		color: {textColor};
		border: 1px solid {borderColor};
	"
>
	<slot>Link</slot>
</a>

<style>
	.app-link {
		display: inline-block;
		text-align: center;
		text-decoration: none;
		padding: 10px;
		border-radius: 5px;
		font-size: 1.2em;
		font-weight: 500;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}
</style>
