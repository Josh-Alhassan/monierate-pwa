<script>
	import '../../app.css';
	import Notification from '../../components/Notification.svelte';
	import logo from '../../assets/logo_monierate.svg';
	import logoWhite from '../../assets/logo_monierate-light.svg';

	// Tabs Import
	import SellTab from '../../components/SellTab.svelte';
	import TableProvider from '../../components/TableProvider.svelte';
	import BuyTab from '../../components/BuyTab.svelte';
	import SendTab from '../../components/SendTab.svelte';
	import SwapTab from '../../components/SwapTab.svelte';
	import NavigationalRoutes from '../../components/NavigationalRoutes.svelte';
	// import Currency from '../../utilities/Currency.svelte';

	import { currentTheme } from '../../stores/theme.js';
	import { onDestroy } from 'svelte';
	import { get } from 'svelte/store';

	let theme = 'light';
	const unsubscribe = currentTheme.subscribe((value) => (theme = value));

	onDestroy(() => {
		unsubscribe();
	});

	let activeTab = 'Sell';

	const tabs = ['Sell', 'Buy', 'Send', 'Swap'];

	function handleTabClick(tab) {
		activeTab = tab;
	}
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
		<TableProvider />
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
</style>
