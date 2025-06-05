<script>
	import CustomDropdown from './CustomDropdown.svelte';
	import usDollarIcon from '../assets/us-dollar.svg';
	import NigerianIcon from '../assets/nigerian-flag.svg';

	const currencyOptions = [
		{
			value: 'usd',
			label: 'USD - US Dollar',
			icon: usDollarIcon
		}
	];

	let selectedCurrency = currencyOptions[0];

	const handleSelectCurrency = (option) => {
		selectedCurrency = option;
	};

	const destinationOptions = [
		{
			value: 'nigeria',
			label: "You're sending to Nigeria",
			icon: NigerianIcon
		}
	];

	let selectedDestination = destinationOptions[0];

	const handleSelectDestination = (option) => {
		selectedDestination = option;
	};

	// 🧠 Reactive minimum input value based on selectedCurrency
	let sendAmount = '';
	let errorMessage = '';

	function handleSubmit(event) {
		event.preventDefault();

		if (selectedCurrency.value === 'usd' && sendAmount < 100) {
			errorMessage = 'Minimum amount to send is $100.';
			return;
		}

		errorMessage = '';
		// Proceed with actual form submission logic
		console.log('Sending:', sendAmount, selectedCurrency.label, 'to', selectedDestination.label);
	}
</script>

<div class="tab-section">
	<form on:submit|preventDefault={handleSubmit}>
		<label for="send-amount">Amount to send</label>
		<div class="trade-container">
			<CustomDropdown
				options={currencyOptions}
				selected={selectedCurrency}
				onSelect={handleSelectCurrency}
			/>
			<input type="number" class="input-amount" required min="10" />
		</div>

		{#if errorMessage}
			<p class="error">{errorMessage}</p>
		{/if}

		<label for="recipient-address">Destination Country</label>
		<CustomDropdown
			options={destinationOptions}
			selected={selectedDestination}
			onSelect={handleSelectDestination}
		/>

		<button type="submit" class="trade-select">Send</button>
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
