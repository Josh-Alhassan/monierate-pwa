<div class="tab-section">
	<form>
		<label for="from-asset">Amount to Swap</label>
		<div class="trade-container">
			<select class="currency-select" required>
				<option value="btc">BTC</option>
				<option value="eth">ETH</option>
			</select>
			<input type="number" class="input-amount" placeholder="Amount" required />
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

<style>
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

	.input-amount:focus {
		outline: none;
	}
</style>
