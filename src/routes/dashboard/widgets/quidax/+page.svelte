<script>
	import NavigationalRoutes from '../../../../components/NavigationalRoutes.svelte';
	import NavHeader from '../../../../utilities/NavHeader.svelte';

	let walletAddress = '0xYourWalletAddressHere'; // Replace with your wallet
	let currency = 'USDT'; // Or BTC, ETH, etc.
	let fiat = 'NGN'; // Or USD, GHS, etc.

	const publicKey = 'pub_ehJay4SZwYL2DfyLqbvjnkguTJsbCjyj';

	// Construct URL — adjust based on Quidax widget docs if format changes
	const widgetUrl = `https://ramp-merchant.quidax.io/?publicKey=${publicKey}&walletAddress=${walletAddress}&currency=${currency}&fiat=${fiat}`;
</script>

<main>
	<div class="section">
		<NavHeader backHref="/dashboard" notificationCount={2} title="Buy Crypto with Quidax" />
	</div>
	<iframe
		class="quidax"
		src={widgetUrl}
		style="border: none; margin-top: 1rem;"
		title="Quidax Crypto Purchase Widget"
	></iframe>

	<NavigationalRoutes />
</main>

<style>
	.section {
		margin-bottom: -10px !important;
		padding-bottom: 0px !important;
	}
	.quidax {
		width: 100%;
		height: 90vh;
		border: none;
		margin-bottom: 1rem;
	}
</style>
