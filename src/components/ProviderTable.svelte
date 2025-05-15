<script>
	// Coins Images
	import bitnob from '../assets/bitnob.png';
	import cedarMoney from '../assets/cedermoney.png';
	import beansapp from '../assets/beansapp.png';
</script>

<!-- Provider Table -->
<div class="select-provider">
	<label for="provider">Select Provider</label>
	<table class="provider-trade-infos">
		<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Sell Price</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td class="first-data"> <img src={bitnob} alt="Bitnob" /> Bitnobe</td>
				<td>N2,800.28/$1</td>
				<td>
					<a href="/dashboard/provider" class="trade-view"> View </a>
				</td>
			</tr>
			<tr>
				<td>2</td>
				<td class="first-data"><img src={cedarMoney} alt="Cedarmoney" /> Cedarmoney</td>
				<td>N2,800.28/$1</td>
				<td>
					<a href="/dashboard/provider" class="trade-view"> View </a>
				</td>
			</tr>
			<tr>
				<td>3</td>
				<td class="first-data"> <img src={beansapp} alt="Beansapp" /> Beansapp</td>
				<td>N2,800.28/$1</td>
				<td>
					<a href="/dashboard/provider" class="trade-view"> View </a>
				</td>
			</tr>
			<tr>
				<td>4</td>
				<td class="first-data"><img src={bitnob} alt="Bitnob" /> Bitnob</td>
				<td>N2,800.28/$1</td>
				<td>
					<a href="/dashboard/provider" class="trade-view"> View </a>
				</td>
			</tr>
			<tr>
				<td>5</td>
				<td class="first-data"> <img src={bitnob} alt="Bitnob" /> Bitnob</td>
				<td>N2,800.28/$1</td>
				<td>
					<a href="/dashboard/provider" class="trade-view"> View </a>
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
		padding-left: 3em;

		display: flex;
		align-items: center;
		gap: 6px;
	}

	.trade-view {
		font-size: 0.9em;
		border: 1px solid var(--primary-color);
		border-radius: 4px;
		padding: 10px 20px;
		text-decoration: none;
		color: var(--primary-color);
	}
</style>
