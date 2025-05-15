<script>
	import Notification from '../../../components/Notification.svelte';

	// Image Import
	import gtbank from '../../../assets/gtbank.png';

	// Global CSS import
	import '../../../app.css';
	import ToggleButton from '../../../utilities/ToggleButton.svelte';

	let selected = 'Dollar';

	const options = ['Dollar', 'Pounds', 'Euros'];

	function handleToggle(option) {
		selected = option;
	}
</script>

<section class="provider-section">
	<div class="provider-nav__header">
		<a href="/dashboard" class="nav-return"> &lt; Back </a>

		<Notification count={3} />
	</div>

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
				<span class="label">GT Bank Rate today</span>
			</div>

			<h2 class="rate">₦1500</h2>
		</div>

		<!-- Currency Converter -->
		<section class="converter-section">
			<h2 class="converter-title">Currency Converter</h2>

			<div class="convert-amount">
				<label for="currency">Amount to Convert</label>
				<div class="trade-container">
					<select id="currency" class="currency-select" required>
						<option value="usd">USD - US Dollar</option>
						<option value="eur">EUR - Euros</option>
						<option value="gbp">GBP - Pounds</option>
					</select>
					<input
						type="number"
						id="sell-amount"
						class="input-amount"
						placeholder="0.000"
						style="text-align: right"
						required
					/>
				</div>
			</div>
		</section>
	</div>
</section>

<style>
	.provider-section {
		padding: 30px 22px;
	}

	.nav-return {
		font-size: 1.4em;
		color: var(--text-color-alt);
		text-decoration: none;
	}

	.provider-nav__header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 22px;
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

	.label {
		color: var(--green-color);
		background-color: var(--green-color-bg);
		padding: 4px 5px;
		border-radius: 5px;
		margin-top: 5px;

		display: inline-block;
	}

	.rate {
		font-weight: 700;
		font-size: 2.4em;
		line-height: 18px;
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
		background-image: url('data:image/svg+xml;utf8,<svg fill="gray" height="20" viewBox="0 0 20 20" width="5" xmlns="http://www.w3.org/2000/svg"><path d="M5.516 7.548l4.245 4.246 4.245-4.246"/></svg>');
		background-repeat: no-repeat;
		background-position: right 10px center;
		background-size: 12px;
		cursor: pointer;
	}

	.currency-select option {
		padding: 20px 5px;
	}

	.currency-select:focus {
		outline: none;
	}

	.currency-select > option {
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
