<script>
	let walletAddress = '0xYourWalletAddressHere'; // Replace with your test wallet address
	let network = 'ethereum'; // Can be "polygon", "bsc", etc.

	// Construct the sandbox widget URL with App ID
	const widgetUrl = `https://sandbox.cashwyre.com/buy?appId=C4B20250529000032&walletAddress=${walletAddress}&network=${network}`;

	let isOpen = false;

	function toggleWidget() {
		isOpen = !isOpen;
	}
</script>

<main>
	<h1>Buy Crypto with Cashwyre (Sandbox Mode)</h1>
	<button on:click={toggleWidget}>
		{isOpen ? 'Close Widget' : 'Open Cashwyre Widget'}
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
		font-size: 1.1rem;
		padding: 1rem 2rem;
		cursor: pointer;
	}
</style>
