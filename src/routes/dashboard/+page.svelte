<script>
	import '../../app.css';
	import Notification from '../../components/Notification.svelte';
</script>

<div class="dashboard-container">
	<Notification count={5} />
	<h1>Dashboard</h1>
	<p>Welcome to the dashboard! Here you can find various statistics and information.</p>
	<p>Use the navigation menu to explore different sections.</p>
	<p>For more details, check the documentation.</p>
</div>

<style>
	.dashboard-container {
		padding: 22px;
	}
</style>
