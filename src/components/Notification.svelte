<script>
	import NotificationIcon from '../utilities/NotificationIcon.svelte';

	// props or internal state
	export let count = 0;
	export let showCount = true;

	// you can also emit an event when clicked, if needed
	const handleClick = () => {
		console.log('Notification icon clicked!');
		// Optionally dispatch an event
		// dispatch('click')
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<a
	href="/dashboard/profile/notification"
	class="notification-container"
	on:click={handleClick}
	type="button"
	aria-label="Notifications"
>
	<div class="notification">
		{#if showCount && count > 0}
			<div class="notification-count">
				<p>{count > 9 ? '9+' : count}</p>
			</div>
		{/if}
		<NotificationIcon />
	</div>
</a>

<style>
	.notification-container {
		display: flex;
		justify-content: flex-end;
		cursor: pointer;
		width: 15%;
		height: 50px;
	}

	.notification {
		width: 100%;
		height: 100%;
		background-color: var(--grey-base);
		border-radius: 50%;

		display: flex;
		align-items: center;
		justify-content: center;

		position: relative;
	}

	.notification-count {
		width: 15px;
		height: 15px;
		background-color: var(--warning);
		border-radius: 50%;

		display: flex;
		align-items: center;
		justify-content: center;

		color: var(--text-color-white);

		position: absolute;
		top: -5px;
		right: -3px;
		font-size: 0.7em;
		font-weight: bold;
	}
</style>
