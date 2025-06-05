<script>
	import axios from 'axios';
	import CustomDropdown from './CustomDropdown.svelte';
	import Bitcoin from '../assets/logos_bitcoin.svg';
	import usDollarIcon from '../assets/us-dollar.svg';

	let sellAmount = '';
	let errorMessage = '';
	let isLoading = false;
	let exchangeRate = null;

	const MONIERATE_API_URL = 'https://api.monierate.com/core/rates/currencies.json?code=USD';
	const API_TOKEN = '375a3ca5bf7c7c280af2de0c9796a8dfbc8a0437782c13611181eecb07a950cd';

	const cryptoOptions = [
		{ value: 'btc', label: 'BTC', icon: Bitcoin },
		{ value: 'eth', label: 'ETH', icon: Bitcoin },
		{ value: 'ltc', label: 'LTC', icon: Bitcoin }
	];

	const currencyOptions = [{ value: 'usd', label: 'USD - US Dollar', icon: usDollarIcon }];

	let selectedCurrency = currencyOptions[0];
	let selectedCrypto = cryptoOptions[0];

	const handleSelect = (option) => {
		selectedCrypto = option;
	};

	const handleSelectCurrency = (option) => {
		selectedCurrency = option;
	};

	function getMinimumAmount(asset) {
		switch (asset.value) {
			case 'btc':
				return 20;
			case 'eth':
				return 10;
			case 'ltc':
				return 5;
			default:
				return 0;
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const minAmount = getMinimumAmount(selectedCrypto);

		if (sellAmount < minAmount) {
			errorMessage = `Minimum amount for ${selectedCrypto.label} is $${minAmount}.`;
			return;
		}

		errorMessage = '';
		isLoading = true;

		try {
			const response = await axios.get(MONIERATE_API_URL, {
				headers: {
					Authorization: `Token ${API_TOKEN}`
				}
			});

			// Simulated exchange rate logic (since actual endpoint doesn't return rates)
			const rates = {
				btc: 65000,
				eth: 3500,
				ltc: 100
			};

			const rate = rates[selectedCrypto.value];

			if (rate) {
				exchangeRate = rate;
				alert(`Exchange rate for ${selectedCrypto.label} is $${exchangeRate}`);
			} else {
				errorMessage = 'Exchange rate not found.';
				exchangeRate = null;
			}
		} catch (err) {
			console.error('API error:', err);
			errorMessage = 'Failed to fetch rates. Please try again later.';
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="tab-section">
	<form on:submit={handleSubmit}>
		<label for="sell-amount">Amount to sell (fiat)</label>
		<div class="trade-container">
			<CustomDropdown
				options={currencyOptions}
				selected={selectedCurrency}
				onSelect={handleSelectCurrency}
			/>
			<input type="number" id="sell-amount" class="input-amount" required bind:value={sellAmount} />
		</div>

		<label for="buy-asset">Asset to buy</label>
		<div class="trade-container">
			<CustomDropdown options={cryptoOptions} selected={selectedCrypto} onSelect={handleSelect} />
		</div>

		{#if errorMessage}
			<p class="error">{errorMessage}</p>
		{/if}

		<button type="submit" class="trade-select" disabled={isLoading}>
			{#if isLoading}
				Fetching rate...
			{:else}
				Get Rate
			{/if}
		</button>

		{#if exchangeRate}
			<p class="success">
				Exchange rate for {selectedCrypto.label}: <strong>${exchangeRate}</strong>
			</p>
		{/if}
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
		background-color: transparent;

		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

		margin-bottom: 20px;
	}

	.input-amount:focus {
		outline: none;
		text-align: right;
	}

	.error {
		color: red;
		margin-top: 8px;
	}
	.success {
		color: green;
		margin-top: 10px;
	}
</style>
