<script>
	// Coins Images
	import bitnob from '../assets/bitnob.png';
	import cedarMoney from '../assets/cedermoney.png';
	import beansapp from '../assets/beansapp.png';
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

	<table class="provider-trade-infos">
		<thead>
			<tr>
				<th>#</th>
				<th>Provider</th>
				<th>Sell Price</th>
				<th>Spread</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td class="first-data">
					<a href="/dashboard/provider"> <img src={bitnob} alt="Bitnob" /> Bitnobe</a></td
				>
				<td>N2,800.28/$1</td>
				<td>
					<SpreadFigure value="-₦5" />
				</td>
				<td>
					<ArrowLink href="/dashboard/provider" icon={rightArrow} alt="Go to provider page" />
				</td>
			</tr>
			<tr>
				<td>2</td>
				<td class="first-data"
					><a href="/dashboard/provider"
						><img src={cedarMoney} alt="Cedarmoney" /> Cedarmoney
					</a></td
				>
				<td>N2,800.28/$1</td>
				<td>
					<SpreadFigure value="-₦15" />
				</td>
				<td>
					<ArrowLink href="/dashboard/provider" icon={rightArrow} alt="Go to provider page" />
				</td>
			</tr>
			<tr>
				<td>3</td>
				<td class="first-data">
					<a href="/dashboard/profile"> <img src={beansapp} alt="Beansapp" /> Beansapp </a>
				</td>
				<td>N2,800.28/$1</td>
				<td>
					<SpreadFigure value="-₦45" />
				</td>
				<td>
					<ArrowLink href="/dashboard/provider" icon={rightArrow} alt="Go to provider page" />
				</td>
			</tr>
			<tr>
				<td>4</td>
				<td class="first-data">
					<a href="/dashboard/profile"> <img src={bitnob} alt="Bitnob" /> Bitnob </a>
				</td>
				<td>N2,800.28/$1</td>
				<td>
					<SpreadFigure value="-₦65" />
				</td>
				<td>
					<ArrowLink href="/dashboard/provider" icon={rightArrow} alt="Go to provider page" />
				</td>
			</tr>
			<tr>
				<td>5</td>
				<td class="first-data">
					<a href="/dashboard/profile"> <img src={bitnob} alt="Bitnob" /> Bitnob </a></td
				>
				<td>N2,800.28/$1</td>
				<td>
					<SpreadFigure value="-₦200" />
				</td>
				<td>
					<ArrowLink href="/dashboard/provider" icon={rightArrow} alt="Go to provider page" />
				</td>
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
</style>
