<script>
	// Navigation SVG Icons
	import HomeIcon from '../utilities/HomeIcon.svelte';
	import WalletIcon from '../utilities/WalletIcon.svelte';
	import ProfileIcon from '../utilities/ProfileIcon.svelte';
</script>

<div class="nav-routes">
	<a href="/dashboard/transactions" class="nav-routes-btn active">
		<HomeIcon width="24" height="24" fill="#B8B9B9" />
		<span>Home</span>
	</a>
	<a href="/dashboard/portfolio" class="nav-routes-btn">
		<WalletIcon width="24" height="24" stroke="#B8B9B9" />
		<span>Wallet</span>
	</a>
	<a href="/dashboard/settings" class="nav-routes-btn">
		<ProfileIcon width="24" height="24" stroke="#B8B9B9" />
		<span>Profile</span>
	</a>
</div>

<style>
	.nav-routes {
		margin-top: 5rem;

		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 20px;
	}

	.nav-routes-btn {
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
		text-decoration: none;
		color: var(--text-color-alt);
		font-size: 1.4em;
	}

	.active {
		background: var(--primary-color);
		color: var(--text-color-white);
		padding: 15px 25px;
		border-radius: 10px;
	}
</style>
