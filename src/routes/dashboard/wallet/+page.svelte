<script>
	import NavigationalRoutes from '../../../components/NavigationalRoutes.svelte';
	import RateProvider from '../../../components/RateProvider.svelte';
	import NavHeader from '../../../utilities/NavHeader.svelte';
</script>

<section class="section">
	<NavHeader backHref="/dashboard" notificationCount={2} />
</section>
<RateProvider />
<NavigationalRoutes />

<style>
	.section {
		margin-bottom: 0px !important;
		padding-bottom: 0px !important;
	}
</style>
