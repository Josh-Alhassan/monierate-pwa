<script>
	import Currency from '../utilities/Currency.svelte';
	import LabelTag from '../utilities/LabelTag.svelte';
	import ClockIcon from '../utilities/ClockIcon.svelte';
	import SpreadFigure from '../utilities/SpreadFigure.svelte';
	import rightArrow from '../assets/rightArrow.png';
	import ArrowLink from '../utilities/ArrowLink.svelte';

	import { sellAmount } from '../stores/sellAmount.js';
	import { providerData } from '../constant.js';

	let currencies = ['$', '£', '€', '₿'];
	let selected = '$';

	const handleSelect = (val) => {
		selected = val;
	};

	$: filteredProviders =
		$sellAmount > 10000
			? providerData[selected].filter((p) => p.minAmount <= $sellAmount)
			: providerData[selected];
</script>

<div class="select-provider">
	<!-- Currency Switcher -->
	<div class="currencies-wrap">
		<div class="currencies">
			{#each currencies as currency}
				<Currency value={currency} active={selected === currency} onSelect={handleSelect} />
			{/each}
		</div>
		<LabelTag text="12mins ago" icon={ClockIcon} />
	</div>

	<!-- Table -->
	<div class="sticky-wrap">
		<div class="provider-header currencies-wrap">
			<!-- Header -->
			<div class="grid-header grid-provider">Provider</div>
			<div class="grid-header grid-sell">Sell Price</div>
			<div class="grid-header grid-spread">Spread</div>
			<div class="grid-header grid-arr"></div>
		</div>

		<!-- Rows -->
		<div class="scrollable-container">
			<div class="provider-grid">
				{#each filteredProviders as provider}
					<div class="grid-cell provider-info">
						<img src={provider.logo} alt={provider.name} class="logo" />
						<span>{provider.name}</span>
					</div>
					<div class="grid-cell grid-sell">{provider.price}</div>
					<div class="grid-cell grid-spread"><SpreadFigure value={provider.spread} /></div>
					<div class="grid-cell grid-arr">
						<ArrowLink href={provider.url} icon={rightArrow} alt="Go to provider page" />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.grid-sell,
	.grid-spread {
		text-align: right;
	}

	.grid-spread {
		width: 70px;
	}

	.grid-arr {
		margin-left: -20px;
	}

	.select-provider {
		margin-top: 50px;
		height: 95vh;
		overflow-y: auto;
		scroll-behavior: smooth;
	}

	.scrollable-container {
		height: 600px;
		overflow-y: auto;
	}

	.provider-header {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr auto;
		gap: 8px;
		align-items: center;
		font-size: 1.4em;
		padding-bottom: 0.1em;
	}

	.provider-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr auto;
		gap: 8px;
		align-items: center;
		font-size: 1.6em;
		margin-bottom: 50px;
		width: 100%;
	}

	/* Header styling */
	.grid-header {
		font-weight: 700;
		color: #555;
		padding: 8px 0;
		font-size: 1.1em;

		position: sticky;
		top: 60px;
		background: white;
		z-index: 5;
	}

	/* Cell styling */
	.grid-cell {
		padding: 6px 0;
		color: #333;
		font-weight: 600;
		font-size: 0.7em;
	}

	.provider-info {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.logo {
		width: 18px;
		height: 18px;
	}

	.currencies-wrap {
		position: sticky;
		top: 0;
		z-index: 10;
		background: white;
		padding: 5px 0;
		border-bottom: 1px solid #eee;
	}
</style>
