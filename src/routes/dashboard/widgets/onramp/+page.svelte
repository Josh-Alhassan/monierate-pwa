<script>
	import NavigationalRoutes from '../../../../components/NavigationalRoutes.svelte';
	import NavHeader from '../../../../utilities/NavHeader.svelte';

	let walletAddress = '0xYourWalletAddressHere';

	// widget URL with appId and wallet address
	const widgetUrl = `https://onramp.money/main/buy?appId=1218500&walletAddress=${walletAddress}`;
</script>

<section class="section">
	<div class="onramp-section-header">
		<NavHeader backHref="/dashboard" notificationCount={2} title="Buy Crypto" />
	</div>
	<iframe
		class="onramp-widget-iframe"
		id="onrampWidgetIframe"
		src={widgetUrl}
		title="Buy crypto with Yellow Card"
	></iframe>

	<NavigationalRoutes />
</section>

<style>
	.section {
		padding-left: 0px !important;
		padding-right: 0px !important;
		padding-bottom: 0px !important;
	}

	.onramp-section-header {
		margin-top: 20px;
		padding: 0px 20px;
	}
	.onramp-widget-iframe {
		width: 100%;
		height: 100vh;
		border: none;
	}
</style>
