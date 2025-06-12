<script>
	import NavigationalRoutes from '../../../../components/NavigationalRoutes.svelte';
	import NavHeader from '../../../../utilities/NavHeader.svelte';

	// Construct URL — adjust based on Quidax widget docs if format changes
	const widgetUrl = `https://www.eurochange.co.uk/travel-money`;
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
