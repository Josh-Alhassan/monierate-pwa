<script>
	import Notification from '../../../components/Notification.svelte';

	// Image Import
	import gtbank from '../../../assets/gtbank-svg.svg';
	import conversion from '../../../assets/loader.svg';

	// Global CSS import
	import '../../../app.css';
	import ToggleButton from '../../../utilities/ToggleButton.svelte';
	import RateDurationDay from '../../../utilities/RateDurationDay.svelte';
	import exchangeRateTracker from '../../../assets/exchange-rate-tracker.svg';
	import NavigationalRoutes from '../../../components/NavigationalRoutes.svelte';
	import NavHeader from '../../../utilities/NavHeader.svelte';
	import LabelTag from '../../../utilities/LabelTag.svelte';

	let selected = 'Dollar';

	const options = ['Dollar', 'Pounds', 'Euros'];

	let selectedCurrency = ' ';

	const exchangeRates = {
		Dollar: 1500,
		Pounds: 1800,
		Euros: 1600
	};

	const selectExchangeRates = {
		usd: '₦1500',
		eur: '₦1600',
		gbp: '₦1800'
	};

	// Current Rate based on selected currency
	$: currentRate = exchangeRates[selected];

	// Conversion Rate based on selected currency
	$: conversionRate = selectedCurrency ? selectExchangeRates[selectedCurrency] : null;

	// $: conversionRate = selectExchangeRates[selectedCurrency];

	function handleToggle(option) {
		selected = option;
	}

	// Exchange Rate Tracker functionalities
	let activeDay = '24hrs';
	const durations = ['24hrs', '7days', '2weeks'];

	function setActive(day) {
		activeDay = day;
	}
</script>

<section class="provider-section">
	<NavHeader
		backHref="/dashboard"
		backText="&lt; Back"
		notificationCount={3}
		showNotification={true}
	/>

	<!-- Provider Transaction Section -->
	<div class="transaction-container">
		<div class="bank-section">
			<div class="bank">
				<img src={gtbank} alt="GT Bank Icon" />
				<span> GT Bank </span>
			</div>
			<p class="bank-description">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry
			</p>
		</div>

		<!-- Currency Toggle Buttons -->
		<div class="currency-toggle-btns">
			{#each options as option}
				<ToggleButton
					label={option}
					active={selected === option}
					onClick={() => handleToggle(option)}
				/>
			{/each}
		</div>

		<!-- Currency Conversion -->
		<div class="currency-conversion">
			<div>
				<h2 class="conversion">NGN to USD:</h2>
				<!-- <span class="label">GT Bank Rate today</span> -->
				<LabelTag text="GT Bank Rate today" />
			</div>

			<h2 class="rate">₦{currentRate}</h2>
		</div>

		<!-- Currency Converter -->
		<section class="converter-section">
			<h2 class="converter-title">Currency Converter</h2>

			<div class="convert-amount">
				<div>
					<label for="currency">Amount to Convert</label>
					<div class="trade-container">
						<select id="currency" class="currency-select" bind:value={selectedCurrency} required>
							<option class="select-option" value="" disabled selected hidden
								>Select a currency
							</option>
							<option class="select-option" value="usd"> USD - US Dollar</option>
							<option class="select-option" value="eur">EUR - Euros</option>
							<option class="select-option" value="gbp">GBP - Pounds</option>
						</select>
						<input
							type="number"
							id="sell-amount"
							class="input-amount"
							placeholder="0"
							style="text-align: right"
							required
						/>
					</div>
					<!-- Display current rate -->
					{#if selectedCurrency}
						<p class="rate">{conversionRate}</p>
					{/if}
				</div>
				<img src={conversion} alt="loading" class="conversion-img" />
				<div>
					<label for="currency">Converting to</label>
					<div class="trade-container">
						<select id="currency" class="currency-select" required>
							<option class="select-option" value=""> </option>
							<option class="select-option" value="usd"> 🤑 - US Dollars </option>
							<option class="select-option" value="eur">EUR - Euros</option>
							<option class="select-option" value="gbp">GBP - Pounds</option>
						</select>
						<input
							type="number"
							id="sell-amount"
							class="input-amount"
							placeholder="0"
							style="text-align: right"
							required
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Exchange Rate Tracker -->
		<section class="exchange-rate-tracker">
			<h2 class="converter-title">Exchange Rate Tracker</h2>

			<div class="rate-tracker-timeline">
				<div class="rate-duration">
					{#each durations as day}
						<RateDurationDay {day} active={activeDay === day} on:click={() => setActive(day)} />
					{/each}
				</div>
				<select id="currency" class="currency-select rate-currency" required>
					<option class="select-option" value="usd"> Dollar </option>
					<option class="select-option" value="eur">Euros</option>
					<option class="select-option" value="gbp">Pounds</option>
				</select>
			</div>

			<img src={exchangeRateTracker} alt="Exchange Rate Tracker" />
		</section>
	</div>

	<NavigationalRoutes />
</section>

<style>
	.provider-section {
		padding: 30px 22px;
	}

	.transaction-container {
		/* background-color: orange; */
		width: 100%;
		height: auto;
	}

	.bank-section {
		padding: 19px 25px;
		background-color: var(--secondary-color);
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.bank img {
		width: 23px;
		height: 23px;
	}

	.bank {
		display: flex;
		align-items: center;
		gap: 7px;
		font-size: 1.6em;
		font-weight: 600;
		font-family: inherit;
	}

	.bank-description {
		font-size: 1.2em;
		line-height: 18px;
		color: var(--text-color-light);

		margin-top: 0.5em;
	}

	.currency-toggle-btns {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #1f75fe0d;
		padding: 6px 10px;
		gap: 7px;

		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.currency-conversion {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* background-color: orange; */

		padding: 17px 14px;

		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		border: 1px solid #f2f2f2;
	}

	.conversion {
		font-size: 1.4em;
		color: var(--text-color-light);
		letter-spacing: -1%;
		font-weight: 800;
		line-height: 18px;
	}

	/* .label {
		color: var(--green-color);
		background-color: var(--green-color-bg);
		padding: 4px 5px;
		border-radius: 5px;
		margin-top: 5px;

		display: inline-block;
	} */

	.rate {
		font-weight: 700;
		font-size: 2.4em;
		line-height: 18px;
	}

	.rate-label {
		font-size: 1.4em;
		color: var(--text-color-light);
		margin-top: 5px;
	}

	.converter-section {
		margin-top: 3em;
	}

	.converter-title {
		font-size: 1.4em;
		font-weight: 500;
		line-height: 18px;
	}

	.convert-amount {
		margin-top: 3em;

		display: flex;
		flex-direction: column;

		align-items: center;
		gap: 5px;
	}

	.conversion-img {
		width: 30px;
		height: 30px;
	}

	.exchange-rate-tracker {
		margin-top: 2em;
		margin-bottom: 4.7em;
	}

	.rate-tracker-timeline {
		margin-top: 2.1em;
		display: flex;

		width: 100%;
	}

	.rate-duration {
		width: 300%;
		display: flex;
		gap: 5px;
	}

	/* Explicit */

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
		background-color: #1f75fe0d;
		color: #333;
		width: 100%;
		appearance: none; /* removes default styling (Chrome, Safari) */
		-webkit-appearance: none; /* Safari */
		-moz-appearance: none; /* Firefox */
		background-image: url('data:image/svg+xml;utf8,<svg fill="gray" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.516 7.548l4.245 4.246 4.245-4.246"/></svg>');
		background-repeat: no-repeat;
		background-position: right 10px center;
		background-size: 25px;
		cursor: pointer;
	}

	.currency-select option {
		padding: 20px 5px;
	}

	.currency-select:focus {
		outline: none;
	}

	.select-option:hover {
		padding: 10px 15px;
	}

	.input-amount {
		font-weight: 600;
		font-size: 1.4em;
		line-height: 100%;
	}

	.input-amount:focus {
		outline: none;
	}
</style>
