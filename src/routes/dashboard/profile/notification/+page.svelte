<script>
	import Notify from '../../../../components/Notify.svelte';
	import NavHeader from '../../../../utilities/NavHeader.svelte';
	import TitleLabel from '../../../../utilities/TitleLabel.svelte';

	const notifications = [
		{
			id: 1,
			type: 'price_alert',
			message: 'Bitcoin just crossed $70,000!',
			timestamp: '2025-07-14T09:00:00Z'
		},
		{
			id: 2,
			type: 'transaction',
			message: 'You received 0.25 ETH from wallet 0xA3B2...F3C1.',
			timestamp: '2025-07-14T10:30:00Z'
		},
		{
			id: 3,
			type: 'security',
			message: 'New login detected from a different device. Was this you?',
			timestamp: '2025-07-14T11:10:00Z'
		},
		{
			id: 4,
			type: 'promotion',
			message: 'Refer a friend and earn $10 in BTC!',
			timestamp: '2025-07-14T13:45:00Z'
		},
		{
			id: 5,
			type: 'news',
			message: 'Ethereum network upgrade scheduled for July 20, 2025.',
			timestamp: '2025-07-14T14:20:00Z'
		},
		{
			id: 6,
			type: 'wallet',
			message: 'Your BTC wallet balance is now 1.75 BTC.',
			timestamp: '2025-07-14T15:05:00Z'
		},
		{
			id: 7,
			type: 'order',
			message: 'Your order to sell 0.5 LTC at $85 has been filled.',
			timestamp: '2025-07-14T16:40:00Z'
		}
	];
</script>

<section class="section">
	<NavHeader backHref="/dashboard/profile" notificationCount={3} />
	<TitleLabel text="Notification" level="h2" />

	<div class="notify-container">
		{#each notifications as note (note.id)}
			<Notify message={note.message} timestamp={note.timestamp} type={note.type} />
		{/each}
	</div>
</section>

<style>
	.notify-container {
		margin-top: 2em;
	}
</style>
