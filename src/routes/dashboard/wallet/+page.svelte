<script>
	import NavigationalRoutes from '../../../components/NavigationalRoutes.svelte';
	import RateProvider from '../../../components/RateProvider.svelte';
	import NavHeader from '../../../utilities/NavHeader.svelte';
</script>

<section class="section">
	<NavHeader backHref="/dashboard" notificationCount={2} />
	<RateProvider />
	<NavigationalRoutes />
</section>
