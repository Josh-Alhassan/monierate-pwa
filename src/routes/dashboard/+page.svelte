<script>
	import '../../app.css';
	import Notification from '../../components/Notification.svelte';
	import logo from '../../assets/logo_monierate.svg';
	import logoWhite from '../../assets/logo_monierate-light.svg';

	import SellTab from '../../components/SellTab.svelte';
	import TableProvider from '../../components/TableProvider.svelte';
	import BuyTab from '../../components/BuyTab.svelte';
	import SendTab from '../../components/SendTab.svelte';
	import SwapTab from '../../components/SwapTab.svelte';
	import NavigationalRoutes from '../../components/NavigationalRoutes.svelte';

	import { currentTheme } from '../../stores/theme.js';
	import { onMount, onDestroy } from 'svelte';

	let theme = 'light';
	let isStickyTable = false;
	let activeTab = 'Sell';
	const tabs = ['Sell', 'Buy', 'Send', 'Swap'];

	const unsubscribe = currentTheme.subscribe((value) => (theme = value));
	onDestroy(() => unsubscribe());

	function handleTabClick(tab) {
		activeTab = tab;
	}

	// Only use `window` inside onMount
	onMount(() => {
		const handleScroll = () => {
			const tableEl = document.querySelector('.table-section');
			if (!tableEl) return;

			const rect = tableEl.getBoundingClientRect();
			const threshold = 100;

			if (rect.top <= threshold && !isStickyTable) {
				isStickyTable = true;
			} else if (rect.top > threshold && isStickyTable) {
				isStickyTable = false;
			}
		};

		window.addEventListener('scroll', handleScroll);

		onDestroy(() => {
			window.removeEventListener('scroll', handleScroll);
		});
	});
</script>

<div class="dashboard-container">
	<div class="nav-wrapper">
		<img src={theme === 'dark' ? logoWhite : logo} alt="Monierate" class="monierate-logo" />

		<Notification count={5} />
	</div>

	<!-- Tabs -->
	<div class="trade-btns">
		{#each tabs as tab}
			<button
				class="trade-btn"
				class:active={activeTab === tab}
				on:click={() => handleTabClick(tab)}
			>
				{tab}
			</button>
		{/each}
	</div>

	<!-- Conditional Forms Based on Tab -->
	{#if activeTab === 'Sell'}
		<!-- Sell Form -->
		<SellTab />
		<!-- Provider Table -->
		<!-- Table wrapper that will stretch full screen height on scroll -->
		<div class="table-section" class:is-sticky-table={isStickyTable}>
			<TableProvider />
		</div>
	{:else if activeTab === 'Buy'}
		<!-- Buy Form -->
		<BuyTab />
		<!-- Provider Table -->
		<TableProvider />
	{:else if activeTab === 'Send'}
		<!-- Send Form -->
		<SendTab />
		<!-- Provider Table -->
		<TableProvider />
	{:else if activeTab === 'Swap'}
		<!-- Swap Form -->
		<SwapTab />
		<!-- Provider Table -->
		<TableProvider />
	{/if}

	<!-- Navigation Routes -->
	<NavigationalRoutes />
</div>

<style>
	.dashboard-container {
		padding: 22px;
		transition: opacity 0.3s ease;
	}

	.is-sticky-table + .dashboard-container {
		opacity: 0;
		pointer-events: none;
	}

	.nav-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.monierate-logo {
		width: 54px;
		height: auto;
	}

	.trade-btns {
		display: flex;
		gap: 20px;
		margin-top: 14px;
		margin-bottom: 20px;
	}

	.trade-btn {
		padding: 12px;
		font-size: 1.1em;
		font-family: 'Onest', sans-serif;
		font-weight: 600;
		color: var(--text-color-light);
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.2s;
		text-transform: uppercase;
		width: 100%;
	}

	.trade-btn.active {
		background-color: var(--primary-color);
		color: var(--text-color-white);
		font-weight: 700;
	}

	/* Table scroll style logic */
	.table-section {
		transition: all 0.3s ease;
	}

	.is-sticky-table {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 100vh;
		background-color: var(--bg-color);
		z-index: 10;
		overflow-y: auto;
		padding: 20px;
	}
</style>
