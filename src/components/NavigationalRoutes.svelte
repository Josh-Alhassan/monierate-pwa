<script>
	// Array of navigation items
	const navItems = [
		{ href: '/dashboard', icon: 'bx-home-circle', label: 'Dashboard' },
		{ href: '/dashboard/wallet', icon: 'bx-wallet-cards', label: 'Wallet' },
		{ href: '/dashboard/profile', icon: 'bx-user-square', label: 'Profile' }
	];

	// This will hold the currently active route
	let activeRoute = '/dashboard';

	// Function to handle icon click
	function setActive(href) {
		activeRoute = href;
	}
</script>

<div class="nav-routes">
	{#each navItems as { href, icon, label }}
		<a {href} class="nav-route" aria-label={label} on:click={() => setActive(href)}>
			<i class={`bx ${icon} ${href === activeRoute ? 'active' : ''}`}></i>
		</a>
	{/each}
</div>

<style>
	@import '../assets/free/fonts/basic/boxicons.css';

	.nav-routes {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
		padding: 0.5rem 0;
		z-index: 100; /* ensure it's above other elements */
	}

	.nav-route {
		width: 100%;
		padding: 32px 0 0;
		display: block;
		background-color: #fff;
		margin-bottom: 5px;
		text-align: center;
		cursor: pointer;
	}

	.bx {
		font-size: 3em;
		color: #b8b9b9;
		font-weight: 100;
		transition: color 0.2s ease;
	}

	.bx.active,
	.bx:hover {
		color: var(--primary-color);
	}
</style>
