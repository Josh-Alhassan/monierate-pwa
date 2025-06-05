<script>
	import CustomDropdown from './CustomDropdown.svelte';
	import Bitcoin from '../assets/logos_bitcoin.svg';
	import usDollarIcon from '../assets/us-dollar.svg';

	const cryptoOptions = [
		{
			value: 'btc',
			label: 'BTC',
			icon: Bitcoin
		},
		{
			value: 'eth',
			label: 'ETH',
			icon: Bitcoin
		},
		{
			value: 'ltc',
			label: 'LTC',
			icon: Bitcoin
		}
	];

	const currencyOptions = [
		{
			value: 'usd',
			label: 'USD - US Dollar',
			icon: usDollarIcon
		}
	];

	let selectedCurrency = currencyOptions[0];

	let selectedCrypto = cryptoOptions[0];

	let amountToReceive = '';
	let errorMessage = '';

	let amountToSwap = '';

	const handleSelect = (option) => {
		selectedCrypto = option;
		console.log('Selected:', option);
	};

	const handleSelectCurrency = (option) => {
		selectedCurrency = option;
	};

	// 🧠 Reactive minimum input value based on selectedCryp to
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

	function handleSubmit(event) {
		event.preventDefault();

		const minAmount = getMinimumAmount(selectedCrypto);
		if (amountToSwap < minAmount) {
			errorMessage = `Minimum amount for ${selectedCrypto.label} is $${minAmount}.`;
			return;
		}

		errorMessage = '';
		console.log(
			'Swap initiated:',
			amountToSwap,
			selectedCurrency.label,
			'to',
			selectedCrypto.label
		);
		// Proceed with swap logic here
	}
</script>

<div class="tab-section">
	<form on:submit={handleSubmit}>
		<label for="from-asset">Amount to Swap</label>
		<div class="trade-container">
			<CustomDropdown
				options={currencyOptions}
				selected={selectedCurrency}
				onSelect={handleSelectCurrency}
			/>
			<input type="number" class="input-amount" required bind:value={amountToSwap} />
		</div>

		{#if errorMessage}
			<p class="error">{errorMessage}</p>
		{/if}

		<label for="to-asset">Select Asset to Swap</label>
		<div class="trade-container">
			<CustomDropdown options={cryptoOptions} selected={selectedCrypto} onSelect={handleSelect} />

			<input type="number" class="input-amount" required bind:value={amountToReceive} />
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
		padding: 15px;
		background-color: transparent;

		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

		margin-bottom: 20px;
	}

	.input-amount {
		text-align: right;
	}

	.input-amount:focus {
		outline: none;
	}

	.error {
		color: red;
		font-size: 0.9em;
		margin-bottom: 10px;
	}
</style>
