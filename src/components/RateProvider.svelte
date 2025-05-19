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

	const providers = [
		{ name: 'Nigeria Customs', logo: customs, buy: '₦1599', sell: '₦1599' },
		{ name: 'CBN', logo: cbnIcon, buy: '₦1600', sell: '₦1599' },
		{ name: 'Paypal', logo: paypal, buy: '₦1602', sell: '-' },
		{ name: 'Cambridge Currencies', logo: cambridge, buy: '₦1606', sell: '₦1598' },
		{ name: 'Cedar.money', logo: cedarMoney, buy: '₦1606', sell: '-' },
		{ name: 'Beans App', logo: beansApp, buy: '₦1614', sell: '₦1599' },
		{ name: 'DigiOats', logo: digioats, buy: '₦1614', sell: '₦1634' },
		{ name: 'Bybit', logo: bybit, buy: '₦1614', sell: '₦1615' },
		{ name: 'Quidax', logo: quidax, buy: '₦1615', sell: '₦1614' },
		{ name: 'GT Bank', logo: gtbank, buy: '₦1618', sell: '₦1550' }
	];
</script>

<div class="rate-table-container">
	<table class="rate-table">
		<thead class="rate-table-heading">
			<tr>
				<th>Provider</th>
				<th>Buy</th>
				<th>Sell</th>
			</tr>
		</thead>
		<tbody>
			{#each providers as provider}
				<tr class="provider-data">
					<td class="provider-name">
						{#if provider.logo}
							<img src={provider.logo} alt={provider.name} />
						{/if}
						{provider.name}
					</td>
					<td class="provider-buy">{provider.buy} <span class="per">per $1</span></td>
					<td class="provider-sell">{provider.sell} <span class="per">per $1</span></td>
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
