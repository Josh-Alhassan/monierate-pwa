<script>
	import bitnob from '../assets/bitnob.svg';
	import cedarMoney from '../assets/cedermoney.svg';
	import beansapp from '../assets/beansapp-svg.svg';
	import yellowCard from '../assets/YellowCardLogo.svg';
	import onramp from '../assets/onramp.png';
	import Currency from '../utilities/Currency.svelte';
	import LabelTag from '../utilities/LabelTag.svelte';
	import ClockIcon from '../utilities/ClockIcon.svelte';
	import SpreadFigure from '../utilities/SpreadFigure.svelte';
	import rightArrow from '../assets/rightArrow.png';
	import ArrowLink from '../utilities/ArrowLink.svelte';
	import quidax from '../assets/quidax-svg.svg';
	import cambridge from '../assets/cambridge-currencies.svg';
	import neon from '../assets/neon.png';

	let currencies = ['$', '£', '€', '₿'];
	let selected = '$';

	const handleSelect = (val) => {
		selected = val;
	};

	const providerData = {
		$: [
			{
				id: 0,
				name: 'YellowCard',
				logo: yellowCard,
				price: '₦1,612.45/$1',
				spread: '-₦27',
				url: 'dashboard/widgets/yellowcard'
			},
			{
				id: 1,
				name: 'onramp',
				logo: onramp,
				price: '₦2,743.82/$1',
				spread: '-₦38',
				url: 'dashboard/widgets/onramp'
			},
			{
				id: 2,
				name: 'Cedarmoney',
				logo: cedarMoney,
				price: '₦2,780.10/$1',
				spread: '-₦59',
				url: 'dashboard/widgets/cedarmoney'
			},
			{
				id: 3,
				name: 'Bitnob',
				logo: bitnob,
				price: '₦2,718.65/$1',
				spread: '-₦42',
				url: 'dasdboard/widgets/bitnob'
			},
			{
				id: 4,
				name: 'Quidax',
				logo: quidax,
				price: '₦2,764.33/$1',
				spread: '-₦51',
				url: 'dashboard/widgets/quidax'
			},
			{
				id: 5,
				name: 'Cambridge',
				logo: cambridge,
				price: '₦2,795.47/$1',
				spread: '-₦36',
				url: 'dashboard/widgets/cambridge'
			},
			{
				id: 6,
				name: 'Neon',
				logo: neon,
				price: '₦2,769.25/$1',
				spread: '-₦44',
				url: 'dashboard/widgets/neon'
			}
		],
		'£': [
			{
				id: 1,
				name: 'YellowCard',
				logo: yellowCard,
				price: '₦3,541.75/£1',
				spread: '-₦35',
				url: 'dashboard/widgets/yellowcard'
			},
			{
				id: 2,
				name: 'onramp',
				logo: onramp,
				price: '₦3,478.60/£1',
				spread: '-₦55',
				url: 'dashboard/widgets/onramp'
			},
			{
				id: 3,
				name: 'Beansapp',
				logo: beansapp,
				price: '₦3,493.80/£1',
				spread: '-₦48',
				url: 'dashboard/widgets/beansapp'
			},
			{
				id: 4,
				name: 'Bitnob',
				logo: bitnob,
				price: '₦3,467.25/£1',
				spread: '-₦60',
				url: 'dashboard/widgets/bitnob'
			},
			{
				id: 5,
				name: 'Quidax',
				logo: quidax,
				price: '₦3,522.90/£1',
				spread: '-₦42',
				url: 'dashboard/widgets/quidax'
			},
			{
				id: 6,
				name: 'Cambridge',
				logo: cambridge,
				price: '₦3,501.15/£1',
				spread: '-₦39',
				url: 'dashboard/widgets/cambridge'
			},
			{
				id: 7,
				name: 'Neon',
				logo: neon,
				price: '₦3,486.80/£1',
				spread: '-₦46',
				url: 'dashboard/widgets/neon'
			}
		],
		'€': [
			{
				id: 1,
				name: 'Cedarmoney',
				logo: cedarMoney,
				price: '₦3,236.45/€1',
				spread: '-₦33',
				url: 'dashboard/widgets/cedarmoney'
			},
			{
				id: 2,
				name: 'Beansapp',
				logo: beansapp,
				price: '₦3,198.10/€1',
				spread: '-₦42',
				url: 'dashboard/widgets/beansapp'
			},
			{
				id: 3,
				name: 'YellowCard',
				logo: yellowCard,
				price: '₦3,244.80/€1',
				spread: '-₦36',
				url: 'dashboard/widgets/yellowcard'
			},
			{
				id: 4,
				name: 'onramp',
				logo: onramp,
				price: '₦3,212.65/€1',
				spread: '-₦45',
				url: 'dashboard/widgets/onramp'
			},
			{
				id: 5,
				name: 'Bitnob',
				logo: bitnob,
				price: '₦3,186.90/€1',
				spread: '-₦38',
				url: 'dashboard/widgets/bitnob'
			},
			{
				id: 6,
				name: 'Quidax',
				logo: quidax,
				price: '₦3,260.55/€1',
				spread: '-₦41',
				url: 'dashboard/widgets/quidax'
			},
			{
				id: 7,
				name: 'Cambridge',
				logo: cambridge,
				price: '₦3,230.25/€1',
				spread: '-₦30',
				url: 'dashboard/widgets/cambridge'
			},
			{
				id: 8,
				name: 'Neon',
				logo: neon,
				price: '₦3,218.70/€1',
				spread: '-₦44',
				url: 'dashboard/widgets/neon'
			}
		],

		'₿': [
			{
				id: 1,
				name: 'Bitnob',
				logo: bitnob,
				price: '₦42,102,350/₿1',
				spread: '-₦475,000',
				url: 'dashboard/widgets/bitnob'
			},
			{
				id: 2,
				name: 'YellowCard',
				logo: yellowCard,
				price: '₦41,890,780/₿1',
				spread: '-₦510,000',
				url: 'dashboard/widgets/yellowcard'
			},
			{
				id: 3,
				name: 'onramp',
				logo: onramp,
				price: '₦42,560,420/₿1',
				spread: '-₦495,000',
				url: 'dashboard/widgets/onramp'
			},
			{
				id: 4,
				name: 'Cedarmoney',
				logo: cedarMoney,
				price: '₦41,730,000/₿1',
				spread: '-₦520,000',
				url: 'dashboard/widgets/cedarmoney'
			},
			{
				id: 5,
				name: 'Quidax',
				logo: quidax,
				price: '₦42,305,110/₿1',
				spread: '-₦485,000',
				url: 'dashboard/widgets/quidax'
			},
			{
				id: 6,
				name: 'Cambridge',
				logo: cambridge,
				price: '₦42,180,700/₿1',
				spread: '-₦498,000',
				url: 'dashboard/widgets/cambridge'
			},
			{
				id: 7,
				name: 'Neon',
				logo: neon,
				price: '₦42,015,650/₿1',
				spread: '-₦505,000',
				url: 'dashboard/widgets/neon'
			},
			{
				id: 8,
				name: 'Beansapp',
				logo: beansapp,
				price: '₦41,990,450/₿1',
				spread: '-₦515,000',
				url: 'dashboard/widgets/beansapp'
			}
		]
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
				{#each providerData[selected] as provider}
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
