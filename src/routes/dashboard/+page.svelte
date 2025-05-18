<script>
	import '../../app.css';
	import Notification from '../../components/Notification.svelte';

	// Tabs Import
	import SellTab from '../../components/SellTab.svelte';
	import SellTableProvider from '../../components/SellTableProvider.svelte';
	import BuyTab from '../../components/BuyTab.svelte';
	import ProviderTable from '../../components/ProviderTable.svelte';
	import SendTab from '../../components/SendTab.svelte';
	import SwapTab from '../../components/SwapTab.svelte';
	import NavigationalRoutes from '../../components/NavigationalRoutes.svelte';
	import Currency from '../../utilities/Currency.svelte';

	let activeTab = 'Sell';

	const tabs = ['Sell', 'Buy', 'Send', 'Swap'];

	function handleTabClick(tab) {
		activeTab = tab;
	}
</script>

<div class="dashboard-container">
	<Notification count={5} />

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
		<SellTableProvider />
	{:else if activeTab === 'Buy'}
		<!-- Buy Form -->
		<BuyTab />
		<!-- Provider Table -->
		<ProviderTable />
	{:else if activeTab === 'Send'}
		<!-- Send Form -->
		<SendTab />
		<!-- Provider Table -->
		<ProviderTable />
	{:else if activeTab === 'Swap'}
		<!-- Swap Form -->
		<SwapTab />
		<!-- Provider Table -->
		<ProviderTable />
	{/if}

	<!-- Navigation Routes -->
	<NavigationalRoutes />
</div>

<style>
	.dashboard-container {
		padding: 22px;
	}

	.trade-btns {
		display: flex;
		gap: 20px;
		margin-top: 14px;
		margin-bottom: 20px;
	}

	.trade-btn {
		padding: 12px 24px;
		font-size: 1.2em;
		font-family: inherit;
		font-weight: 600;
		color: var(--text-color-light);
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s;
		text-transform: uppercase;
		width: 100%;
	}

	.trade-btn.active {
		background-color: var(--primary-color);
		color: var(--text-color-white);
		border-bottom: 2px solid #000;
		font-weight: bold;
	}
</style>
