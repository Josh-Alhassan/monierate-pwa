<script>
	// SVGs Imports
	import customs from '../assets/customs.svg';
	import cbnIcon from '../assets/cbnIcon.svg';
	import paypal from '../assets/paypal.svg';
	import cambridge from '../assets/cambridge-currencies.svg';
	import digioats from '../assets/digioats-svg.svg';
	import bybit from '../assets/bybit-svg.svg';
	import quidax from '../assets/quidax-svg.svg';
	import cedarMoney from '../assets/cedermoney.svg';
	import beansApp from '../assets/beansapp-svg.svg';
	import gtbank from '../assets/gtbank-svg.svg';
	import Currency from '../utilities/Currency.svelte';
	import LabelTag from '../utilities/LabelTag.svelte';
	import ClockIcon from '../utilities/ClockIcon.svelte';

	// const providers = [
	// 	{ name: 'Nigeria Customs', logo: customs, buy: '₦1599', sell: '₦1599' },
	// 	{ name: 'CBN', logo: cbnIcon, buy: '₦1600', sell: '₦1599' },
	// 	{ name: 'Paypal', logo: paypal, buy: '₦1602', sell: '-' },
	// 	{ name: 'Cambridge Currencies', logo: cambridge, buy: '₦1606', sell: '₦1598' },
	// 	{ name: 'Cedar.money', logo: cedarMoney, buy: '₦1606', sell: '-' },
	// 	{ name: 'Beans App', logo: beansApp, buy: '₦1614', sell: '₦1599' },
	// 	{ name: 'DigiOats', logo: digioats, buy: '₦1614', sell: '₦1634' },
	// 	{ name: 'Bybit', logo: bybit, buy: '₦1614', sell: '₦1615' },
	// 	{ name: 'Quidax', logo: quidax, buy: '₦1615', sell: '₦1614' },
	// 	{ name: 'GT Bank', logo: gtbank, buy: '₦1618', sell: '₦1550' }
	// ];

	const providers = [
		{
			name: 'Nigeria Customs',
			logo: customs,
			rates: {
				$: { buy: 1599, sell: 1599 },
				'£': { buy: 2045, sell: 2045 },
				'€': { buy: 1895, sell: 1895 },
				'₿': { buy: 61500000, sell: 61500000 }
			}
		},
		{
			name: 'CBN',
			logo: cbnIcon,
			rates: {
				$: { buy: 1600, sell: 1599 },
				'£': { buy: 2047, sell: 2040 },
				'€': { buy: 1900, sell: 1890 },
				'₿': { buy: 61700000, sell: 61400000 }
			}
		},
		{
			name: 'Paypal',
			logo: paypal,
			rates: {
				$: { buy: 1602, sell: '-' },
				'£': { buy: 2050, sell: '-' },
				'€': { buy: 1903, sell: '-' },
				'₿': { buy: 61800000, sell: '-' }
			}
		},
		{
			name: 'Cambridge Currencies',
			logo: cambridge,
			rates: {
				$: { buy: 1606, sell: 1598 },
				'£': { buy: 2053, sell: 2042 },
				'€': { buy: 1910, sell: 1895 },
				'₿': { buy: 62000000, sell: 61300000 }
			}
		},
		{
			name: 'Cedar.money',
			logo: cedarMoney,
			rates: {
				$: { buy: 1606, sell: '-' },
				'£': { buy: 2054, sell: '-' },
				'€': { buy: 1912, sell: '-' },
				'₿': { buy: 62200000, sell: '-' }
			}
		},
		{
			name: 'Beans App',
			logo: beansApp,
			rates: {
				$: { buy: 1614, sell: 1599 },
				'£': { buy: 2060, sell: 2040 },
				'€': { buy: 1920, sell: 1895 },
				'₿': { buy: 62300000, sell: 61350000 }
			}
		},
		{
			name: 'DigiOats',
			logo: digioats,
			rates: {
				$: { buy: 1614, sell: 1634 },
				'£': { buy: 2062, sell: 2080 },
				'€': { buy: 1925, sell: 1940 },
				'₿': { buy: 62400000, sell: 63000000 }
			}
		},
		{
			name: 'Bybit',
			logo: bybit,
			rates: {
				$: { buy: 1614, sell: 1615 },
				'£': { buy: 2061, sell: 2063 },
				'€': { buy: 1923, sell: 1925 },
				'₿': { buy: 62350000, sell: 62400000 }
			}
		},
		{
			name: 'Quidax',
			logo: quidax,
			rates: {
				$: { buy: 1615, sell: 1614 },
				'£': { buy: 2065, sell: 2060 },
				'€': { buy: 1930, sell: 1923 },
				'₿': { buy: 62500000, sell: 62300000 }
			}
		},
		{
			name: 'GT Bank',
			logo: gtbank,
			rates: {
				$: { buy: 1618, sell: 1550 },
				'£': { buy: 2070, sell: 1985 },
				'€': { buy: 1935, sell: 1850 },
				'₿': { buy: 62700000, sell: 60000000 }
			}
		}
	];

	let currencies = ['$', '£', '€', '₿'];
	let selected = '$';

	const handleSelect = (val) => {
		selected = val;
	};
</script>

<div class="rate-table-container">
	<!-- Currency Switcher -->
	<div class="currencies-wrap">
		<div class="currencies">
			{#each currencies as currency}
				<Currency value={currency} active={selected === currency} onSelect={handleSelect} />
			{/each}
		</div>
		<LabelTag text="12mins ago" icon={ClockIcon} />
	</div>

	<table class="rate-table">
		<thead class="rate-table-heading">
			<tr>
				<th class="provide-head">Provider</th>
				<th>Buy</th>
				<th>Sell</th>
			</tr>
		</thead>
		<tbody class="rate-providers">
			{#each providers as provider}
				<tr class="provider-data">
					<td class="provider-name">
						{#if provider.logo}
							<img src={provider.logo} alt={provider.name} />
						{/if}
						{provider.name}
					</td>
					<!-- <td class="provider-buy">{provider.buy} <span class="per">per $1</span></td>
					<td class="provider-sell">{provider.sell} <span class="per">per $1</span></td> -->

					<!-- <td class="provider-buy">
						₦{provider.rates[selected].buy} <span class="per">per {selected}1</span>
					</td>
					<td class="provider-sell">
						₦{provider.rates[selected].sell} <span class="per">per {selected}1</span>
					</td> -->

					<td class="provider-buy">
						{#if provider.rates[selected].buy !== '-'}
							₦{provider.rates[selected].buy} <span class="per">per {selected}1</span>
						{:else}
							-
						{/if}
					</td>
					<td class="provider-sell">
						{#if provider.rates[selected].sell !== '-'}
							₦{provider.rates[selected].sell} <span class="per">per {selected}1</span>
						{:else}
							-
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.rate-table-container {
		font-family: inherit;
		border-radius: 8px;
		max-width: 700px;
		margin: 0 auto;

		font-size: 1.2em;
	}

	.rate-table {
		width: 100%;
		border-collapse: collapse;
		color: #000000;
	}

	.rate-table-heading {
		color: var(--text-color-light);
	}

	.rate-providers {
		height: 100vh;
	}

	.provide-head {
		width: 163px;
		padding-right: 0;
	}

	.provider-data {
		color: var(--text-color-dark);
	}

	.provider-name {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 500;
	}

	.provider-name img {
		width: 20px;
		height: 20px;
		object-fit: contain;
	}

	.per {
		font-size: 0.7em;
		color: var(--text-color-light);
		display: block;
	}
</style>
