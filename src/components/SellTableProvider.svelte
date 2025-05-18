<script>
	// Coins Images
	import bitnob from '../assets/bitnob.png';
	import cedarMoney from '../assets/cedermoney.png';
	import beansapp from '../assets/beansapp.png';
	import Currency from '../utilities/Currency.svelte';
	import LabelTag from '../utilities/LabelTag.svelte';
	import ClockIcon from '../utilities/ClockIcon.svelte';

	let currencies = ['$', '£', '€', '₿'];
	let selected = '$';

	const handleSelect = (val) => {
		selected = val;
	};
</script>

<div class="select-provider">
	<!-- Currencies -->
	<div class="currencies-wrap">
		<div class="currencies">
			{#each currencies as currency}
				<Currency value={currency} active={selected === currency} onSelect={handleSelect} />
			{/each}
		</div>
		<LabelTag text="12mins ago" icon={ClockIcon} />
	</div>
	<label for="provider">Select Provider</label>
	<table class="provider-trade-infos">
		<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Sell Price</th>
				<th>Spread</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td class="first-data"> <img src={bitnob} alt="Bitnob" /> Bitnobe</td>
				<td>N2,800.28/$1</td>
				<td>N200</td></tr
			>
			<tr>
				<td>2</td>
				<td class="first-data"><img src={cedarMoney} alt="Cedarmoney" /> Cedarmoney</td>
				<td>N2,800.28/$1</td>
				<td>N45</td>
			</tr>
			<tr>
				<td>3</td>
				<td class="first-data"> <img src={beansapp} alt="Beansapp" /> Beansapp</td>
				<td>N2,800.28/$1</td>
				<td>N45</td>
			</tr>
			<tr>
				<td>4</td>
				<td class="first-data"><img src={bitnob} alt="Bitnob" /> Bitnob</td>
				<td>N2,800.28/$1</td>
				<td>N45</td>
			</tr>
			<tr>
				<td>5</td>
				<td class="first-data"> <img src={bitnob} alt="Bitnob" /> Bitnob</td>
				<td>N2,800.28/$1</td>
				<td>N45</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	.select-provider {
		margin-top: 50px;
	}

	.provider-trade-infos {
		width: 100%;
		border-collapse: collapse;
	}

	.first-data {
		text-align: left;
		padding-left: 3em;

		display: flex;
		align-items: center;
		gap: 6px;
	}

	.currencies-wrap {
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
	}
</style>
