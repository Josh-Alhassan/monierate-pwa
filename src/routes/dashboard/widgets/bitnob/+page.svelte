<script>
	let walletAddress = '0xYourWalletAddressHere'; // Replace with actual wallet address
	let network = 'bitcoin'; // or "lightning", "ethereum", etc.
	let appId = 'fa06c533f5024a341272'; // replace if you have one from Bitnob

	// Construct widget URL
	const widgetUrl = `https://sandbox.bitnob.co/onramp?walletAddress=${walletAddress}&network=${network}`;

	let isOpen = false;

	function toggleWidget() {
		isOpen = !isOpen;
	}
</script>

<main>
	<h1>Buy Bitcoin via Bitnob (Sandbox)</h1>
	<button on:click={toggleWidget}>
		{isOpen ? 'Close Widget' : 'Open Bitnob Widget'}
	</button>

	{#if isOpen}
		<iframe src={widgetUrl} width="100%" height="600px" style="border: none; margin-top: 1rem;"
		></iframe>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 2rem;
	}

	button {
		font-size: 1.2rem;
		padding: 1rem 2rem;
		cursor: pointer;
	}
</style>
