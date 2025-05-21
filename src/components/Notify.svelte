<script>
	export let message = '';
	export let timestamp = '';
	export let type = 'default';

	// A simple map to set background colors based on type
	const typeStyles = {
		price_alert: '#fff3cd',
		transaction: '#d1e7dd',
		security: '#f8d7da',
		promotion: '#cff4fc',
		news: '#e2e3e5',
		wallet: '#e0f7fa',
		order: '#fefefe',
		default: '#f4f4f4'
	};

	const bgColor = typeStyles[type] || typeStyles['default'];
</script>

<article class="notify" style="background-color: {bgColor};">
	<p class="notify-detail">{message}</p>
	{#if timestamp}
		<small class="timestamp">{new Date(timestamp).toLocaleString()}</small>
	{/if}
</article>

<style>
	.notify {
		padding: 1em 1.5em;
		border-radius: 6px;
		margin-bottom: 1rem;
		font-size: 1em;
		font-family: inherit;

		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	.notify-detail {
		color: var(--notify-label);
	}

	.notify:not(:last-child) {
		margin-bottom: 1em;
	}

	.timestamp {
		display: block;
		margin-top: 0.5em;
		font-size: 0.85em;
		color: #666;
	}
</style>
