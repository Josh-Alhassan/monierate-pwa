<script>
	import bitnob from '../assets/bitnob.svg';
	import cedarMoney from '../assets/cedermoney.svg';
	import beansapp from '../assets/beansapp-svg.svg';
	import Currency from '../utilities/Currency.svelte';
	import LabelTag from '../utilities/LabelTag.svelte';
	import ClockIcon from '../utilities/ClockIcon.svelte';
	import SpreadFigure from '../utilities/SpreadFigure.svelte';
	import rightArrow from '../assets/rightArrow.png';
	import ArrowLink from '../utilities/ArrowLink.svelte';

	let currencies = ['$', '£', '€', '₿'];
	let selected = '$';

	const handleSelect = (val) => {
		selected = val;
	};

	const providerData = {
		$: [
			{ id: 1, name: 'Bitnob', logo: bitnob, price: '₦2,800.28/$1', spread: '-₦5' },
			{ id: 2, name: 'Cedarmoney', logo: cedarMoney, price: '₦2,790.00/$1', spread: '-₦15' },
			{ id: 3, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 4, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 5, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 6, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 7, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 8, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 9, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 10, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 11, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 12, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 13, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 14, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 15, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 16, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 17, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 18, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 19, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 20, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 21, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 22, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 23, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' },
			{ id: 24, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' }
		],
		'£': [
			{ id: 1, name: 'Bitnob', logo: bitnob, price: '₦3,500.00/£1', spread: '-₦10' },
			{ id: 2, name: 'Beansapp', logo: beansapp, price: '₦3,420.00/£1', spread: '-₦90' },
			{ id: 3, name: 'Beansapp', logo: beansapp, price: '₦3,420.00/£1', spread: '-₦90' },
			{ id: 4, name: 'Beansapp', logo: beansapp, price: '₦3,420.00/£1', spread: '-₦90' },
			{ id: 5, name: 'Beansapp', logo: beansapp, price: '₦3,420.00/£1', spread: '-₦90' }
		],
		'€': [
			{ id: 1, name: 'Cedarmoney', logo: cedarMoney, price: '₦3,200.00/€1', spread: '-₦20' },
			{ id: 2, name: 'Beansapp', logo: beansapp, price: '₦3,150.00/€1', spread: '-₦40' }
		],
		'₿': [{ id: 1, name: 'Bitnob', logo: bitnob, price: '₦42,000,000/₿1', spread: '-₦500,000' }]
	};
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
	<div class="provider-grid">
		<!-- Header -->
		<div class="grid-header">Provider</div>
		<div class="grid-header">Sell Price</div>
		<div class="grid-header grid-spread">Spread</div>
		<div class="grid-header grid-arr"></div>

		<!-- Rows -->
		{#each providerData[selected] as provider}
			<div class="grid-cell provider-info">
				<img src={provider.logo} alt={provider.name} class="logo" />
				<span>{provider.name}</span>
			</div>
			<div class="grid-cell">{provider.price}</div>
			<div class="grid-cell grid-spread"><SpreadFigure value={provider.spread} /></div>
			<div class="grid-cell grid-arr">
				<ArrowLink href="/dashboard/provider" icon={rightArrow} alt="Go to provider page" />
			</div>
		{/each}
	</div>
</div>

<style>
	.grid-spread {
		width: 70px;
	}

	.grid-arr {
		margin-left: -20px;
	}
	.select-provider {
		margin-top: 50px;
	}

	.provider-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr auto;
		gap: 8px;
		align-items: center;
		font-size: 1.6em;
		margin-bottom: 100px;
	}

	/* Header styling */
	.grid-header {
		font-weight: 700;
		color: #555;
		padding: 8px 0;
		font-size: 1.2em;
	}

	/* Cell styling */
	.grid-cell {
		padding: 6px 0;
		color: #333;
		font-weight: 500;
		font-size: 1.1em;
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
</style>
