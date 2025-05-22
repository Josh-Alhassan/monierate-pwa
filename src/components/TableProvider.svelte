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
			{ id: 11, name: 'Beansapp', logo: beansapp, price: '₦2,755.10/$1', spread: '-₦45' }
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
	<div class="table-wrapper">
		<table class="provider-trade-infos">
			<thead>
				<tr>
					<th>#</th>
					<th class="provider">Provider</th>
					<th class="sell">Sell Price</th>
					<th class="spread">Spread</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each providerData[selected] as provider}
					<tr>
						<td>{provider.id}</td>
						<td class="first-data">
							<a href="/dashboard/provider">
								<img src={provider.logo} alt={provider.name} />
								{provider.name}
							</a>
						</td>
						<td>{provider.price}</td>
						<td><SpreadFigure value={provider.spread} /></td>
						<td class="arr-link">
							<ArrowLink href="/dashboard/provider" icon={rightArrow} alt="Go to provider page" />
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.select-provider {
		margin-top: 50px;
	}

	.provider-trade-infos {
		width: 100%;
		border-collapse: collapse;
	}

	.provider {
		width: 94.5px;
		padding-right: 0;
	}

	.first-data {
		text-align: left;
	}

	.first-data a {
		color: var(--text-color-dark);
		text-decoration: none;
	}

	.first-data img {
		width: 15px;
		display: inline-block;
		margin-bottom: -4px;
		margin-right: 6px;
	}

	.currencies-wrap {
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
	}

	.arr-link {
		margin-left: 40px;
		width: 59px;
		display: inline-block;
	}

	.table-wrapper {
		max-height: 100%;
		overflow-y: auto;
	}
</style>
