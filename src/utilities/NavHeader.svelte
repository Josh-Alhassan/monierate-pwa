<script>
	export let backHref = '/dashboard';
	export let backText = '< Back';
	export let notificationCount = 0;
	export let showNotification = true;
	import NotificationIcon from './NotificationIcon.svelte';
</script>

<div class="provider-nav__header">
	<a href={backHref} class="nav-return">{backText}</a>

	{#if showNotification}
		<NotificationIcon count={notificationCount} />
	{/if}
</div>

<style>
	.nav-return {
		font-size: 1.4em;
		color: var(--text-color-alt);
		text-decoration: none;
	}

	.provider-nav__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 22px;
	}
</style>
