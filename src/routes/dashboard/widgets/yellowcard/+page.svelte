<script>
	import NavigationalRoutes from '../../../../components/NavigationalRoutes.svelte';
	import NavHeader from '../../../../utilities/NavHeader.svelte';

	let yourApiKey = '8f83caf3429be41f5b1da4c8ca5c52da';
</script>

<section class="section">
	<NavHeader backHref="/dashboard" notificationCount={2} title="Buy Crypto" />
	<iframe
		class="yc-widget-iframe"
		id="ycWidgetIframe"
		src="https://sandbox--payments-widget.netlify.app/landing/{yourApiKey}"
		title="Buy crypto with Yellow Card"
		allow="camera https://sandbox--payments-widget.netlify.app;"
	></iframe>

	<NavigationalRoutes />
</section>

<style>
	.yc-widget-iframe {
		width: 100%;
		height: 90vh;
		border: none;
	}
</style>
