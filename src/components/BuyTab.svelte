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

	const handleSelect = (option) => {
		selectedCrypto = option;
		console.log('Selected:', option);
	};

	const handleSelectCurrency = (option) => {
		selectedCurrency = option;
	};

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
			<CustomDropdown
				options={currencyOptions}
				selected={selectedCurrency}
				onSelect={handleSelectCurrency}
			/>
			<input type="number" id="buy-amount" class="input-amount" required />
		</div>

		<label for="fiat-currency">Select Asset to Buy</label>
		<div class="trade-container">
			<CustomDropdown options={cryptoOptions} selected={selectedCrypto} onSelect={handleSelect} />
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
		padding: 15px;
		background-color: transparent;

		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

		margin-bottom: 20px;
	}

	.input-amount:focus {
		outline: none;
	}

	/* 

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
