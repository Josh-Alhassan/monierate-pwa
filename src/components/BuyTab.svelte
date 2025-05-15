<script>
    let activeTab = 'Sell';

	const tabs = ['Sell', 'Buy', 'Send', 'Swap'];

	function handleTabClick(tab) {
		activeTab = tab;
	}
</script>

<div class="sell-section">
	<form>
		<label for="buy-amount">Amount to buy (crypto)</label>
		<div class="trade-container">
			<select id="crypto" class="currency-select" required>
				<option value="btc">BTC</option>
				<option value="eth">ETH</option>
				<option value="ltc">LTC</option>
			</select>
			<input
				type="number"
				id="buy-amount"
				class="input-amount"
				placeholder="Enter amount"
				required
			/>
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

<style>
	.trade-btns {
		display: flex;
		gap: 20px;
		margin-top: 14px;
		margin-bottom: 20px;
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

	/* .select-provider {
		margin-top: 50px;
	}

	.provider-trade-infos {
		width: 100%;
		border-collapse: collapse;
	} */

	.input-amount:focus {
		outline: none;
	}

	/* .first-data {
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
	} */
</style>
