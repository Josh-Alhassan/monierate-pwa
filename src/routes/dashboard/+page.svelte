<script>
	import '../../app.css';
	import Notification from '../../components/Notification.svelte';

	import usflag from '../../assets/usdollar.png';
	import HomeIcon from '../../utilities/HomeIcon.svelte';
	import WalletIcon from '../../utilities/WalletIcon.svelte';
	import ProfileIcon from '../../utilities/ProfileIcon.svelte';

	// Coins Images
	import bitnob from '../../assets/bitnob.png';
	import cedarMoney from '../../assets/cedermoney.png';
	import beansapp from '../../assets/beansapp.png';

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
				class="trade-btn {activeTab === tab ? 'active' : ''}"
				on:click={() => handleTabClick(tab)}
			>
				{tab}
			</button>
		{/each}
	</div>

	<!-- Conditional Forms Based on Tab -->
	{#if activeTab === 'Sell'}
		<!-- Sell Form -->
		<div class="sell-section">
			<form>
				<label for="sell-amount">Amount to sell (fiat)</label>
				<div class="trade-container">
					<select id="currency" class="currency-select" required>
						<option value="usd">USD - US Dollar</option>
						<option value="eur">EUR</option>
						<option value="gbp">GBP</option>
					</select>
					<input type="number" id="sell-amount" placeholder="Enter amount to sell" required />
				</div>

				<label for="buy-asset">Asset to buy</label>
				<div class="trade-container">
					<select id="buy-asset" class="currency-select" required>
						<option value="btc">BTC - Bitcoin</option>
						<option value="eth">ETH</option>
						<option value="ltc">LTC</option>
					</select>
				</div>

				<button type="submit" class="trade-select">Select</button>
			</form>
		</div>

		<!-- Provider Table -->
		<div class="select-provider">
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
	{:else if activeTab === 'Buy'}
		<!-- Buy Form -->
		<div class="sell-section">
			<form>
				<label for="buy-amount">Amount to buy (crypto)</label>
				<div class="trade-container">
					<select id="crypto" class="currency-select" required>
						<option value="btc">BTC</option>
						<option value="eth">ETH</option>
						<option value="ltc">LTC</option>
					</select>
					<input type="number" id="buy-amount" placeholder="Enter amount" required />
				</div>

				<label for="fiat-currency">Select Asset to Buy</label>
				<div class="trade-container">
					<select id="fiat-currency" class="currency-select" required>
						<option value="usd">USD</option>
						<option value="eur">EUR</option>
					</select>
				</div>

				<button type="submit" class="trade-select">Buy</button>
			</form>
		</div>

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
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td class="first-data"><img src={cedarMoney} alt="Cedarmoney" /> Cedarmoney</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td class="first-data"> <img src={beansapp} alt="Beansapp" /> Beansapp</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td class="first-data"><img src={bitnob} alt="Bitnob" /> Bitnob</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td class="first-data"> <img src={bitnob} alt="Bitnob" /> Bitnob</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else if activeTab === 'Send'}
		<!-- Send Form -->
		<div class="sell-section">
			<form>
				<label for="send-amount">Amount to send</label>
				<div class="trade-container">
					<select class="currency-select" required>
						<option value="btc">BTC</option>
						<option value="eth">ETH</option>
					</select>
					<input type="number" placeholder="Enter amount" required />
				</div>

				<label for="recipient-address">Destination Country</label>
				<input type="text" placeholder="Enter wallet address" required class="trade-container" />

				<button type="submit" class="trade-select">Send</button>
			</form>
		</div>

		<!-- Provider Table -->
		<div class="select-provider">
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
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td class="first-data"><img src={cedarMoney} alt="Cedarmoney" /> Cedarmoney</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td class="first-data"> <img src={beansapp} alt="Beansapp" /> Beansapp</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td class="first-data"><img src={bitnob} alt="Bitnob" /> Bitnob</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td class="first-data"> <img src={bitnob} alt="Bitnob" /> Bitnob</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else if activeTab === 'Swap'}
		<!-- Swap Form -->
		<div class="sell-section">
			<form>
				<label for="from-asset">Amount to Swap</label>
				<div class="trade-container">
					<select class="currency-select" required>
						<option value="btc">BTC</option>
						<option value="eth">ETH</option>
					</select>
					<input type="number" placeholder="Amount" required />
				</div>

				<label for="to-asset">Select Asset to Swap</label>
				<div class="trade-container">
					<select class="currency-select" required>
						<option value="eth">ETH</option>
						<option value="btc">BTC</option>
					</select>
				</div>

				<button type="submit" class="trade-select">Swap</button>
			</form>
		</div>

		<!-- Provider Table -->
		<div class="select-provider">
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
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td class="first-data"><img src={cedarMoney} alt="Cedarmoney" /> Cedarmoney</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td class="first-data"> <img src={beansapp} alt="Beansapp" /> Beansapp</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td class="first-data"><img src={bitnob} alt="Bitnob" /> Bitnob</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td class="first-data"> <img src={bitnob} alt="Bitnob" /> Bitnob</td>
						<td>N2,800.28/$1</td>
						<td>
							<a href="/dashboard/transactions" class="trade-view"> View </a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	{/if}

	<!-- Navigation Routes -->
	<div class="nav-routes">
		<a href="/dashboard/transactions" class="nav-routes-btn active">
			<HomeIcon width="24" height="24" fill="#B8B9B9" />
			<span>Home</span>
		</a>
		<a href="/dashboard/portfolio" class="nav-routes-btn">
			<WalletIcon width="24" height="24" stroke="#B8B9B9" />
			<span>Wallet</span>
		</a>
		<a href="/dashboard/settings" class="nav-routes-btn">
			<ProfileIcon width="24" height="24" stroke="#B8B9B9" />
			<span>Profile</span>
		</a>
	</div>
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

	.trade-select {
		padding: 12px 24px;
		font-size: 1.2em;
		font-family: inherit;
		font-weight: 600;
		color: var(--text-color-white);
		background-color: var(--primary-color);
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s;
		text-transform: uppercase;
		width: 100%;
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

	.trade-container {
		display: flex;

		border: 1px solid var(--grey-base);
		border-radius: 10px;
		padding: 10px 15px;
		background-color: transparent;

		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

		margin-bottom: 20px;
	}

	.currency-select {
		padding: 10px 14px;
		font-size: 1.2em;
		font-weight: 600;
		font-family: inherit;
		outline: none;
		border: none;
		/* border-radius: 5px; */
		background-color: #fff;
		color: #333;
		width: 100%;
		appearance: none; /* removes default styling (Chrome, Safari) */
		-webkit-appearance: none; /* Safari */
		-moz-appearance: none; /* Firefox */
		background-image: url('data:image/svg+xml;utf8,<svg fill="gray" height="20" viewBox="0 0 20 20" width="5" xmlns="http://www.w3.org/2000/svg"><path d="M5.516 7.548l4.245 4.246 4.245-4.246"/></svg>');
		background-repeat: no-repeat;
		background-position: right 10px center;
		background-size: 12px;
		cursor: pointer;
	}

	.currency-select:focus {
		border-color: var(--primary-color);
		outline: none;
	}

	.currency-select > option {
		padding: 10px 15px;
	}

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
	}

	.nav-routes {
		margin-top: 5rem;

		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 20px;
	}

	.nav-routes-btn {
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
		text-decoration: none;
		color: var(--text-color-alt);
		font-size: 1.4em;
	}

	.active {
		background: var(--primary-color);
		color: var(--text-color-white);
		padding: 15px 25px;
		border-radius: 10px;
	}
</style>
