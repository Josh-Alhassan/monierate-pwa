<script>
	import { page } from '$app/stores';
	import HomeIcon from '../utilities/HomeIcon.svelte';
	import WalletIcon from '../utilities/WalletIcon.svelte';
	import ProfileIcon from '../utilities/ProfileIcon.svelte';

	const navItems = [
		{
			href: '/dashboard',
			label: 'Home',
			icon: HomeIcon,
			iconProps: { width: 20, height: 20 },
			activePaths: ['/dashboard']
		},
		{
			href: '/dashboard/wallet',
			label: 'Wallet',
			icon: WalletIcon,
			iconProps: { width: 20, height: 20, stroke: '#B8B9B9' },
			activePaths: ['/dashboard/wallet', '/dashboard/transactions']
		},
		{
			href: '/dashboard/profile',
			label: 'Profile',
			icon: ProfileIcon,
			iconProps: { width: 20, height: 20, stroke: '#B8B9B9' },
			activePaths: ['/dashboard/profile', '/dashboard/settings']
		}
	];

	$: currentPath = $page.url.pathname;

	function isActive(item) {
		return item.activePaths?.some((path) => currentPath === path) || false;
	}
</script>

<nav class="nav-routes" aria-label="Main navigation">
	{#each navItems as item}
		<a
			href={item.href}
			class="nav-routes-btn"
			class:active={isActive(item)}
			aria-current={isActive(item) ? 'page' : undefined}
		>
			<svelte:component
				this={item.icon}
				{...item.iconProps}
				fill={isActive(item) ? '#FFFFFF' : '#B8B9B9'}
			/>
			<span class="nav-label">{item.label}</span>
		</a>
	{/each}
</nav>

<style>
	.nav-routes {
		margin-top: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 12px;
	}

	.nav-routes-btn {
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
		text-decoration: none;
		color: var(--text-color-light);
		font-size: 1.4em;
		transition: all 0.2s ease;
		padding: 0.5em;
		border-radius: 10px;
	}

	.nav-routes-btn:hover {
		opacity: 0.9;
	}

	.nav-routes-btn:focus-visible {
		outline: 2px solid var(--primary-color);
		outline-offset: 2px;
	}

	.nav-routes-btn.active {
		background: var(--primary-color);
		color: var(--text-color-white);
		padding: 15px 25px;
	}
</style>
