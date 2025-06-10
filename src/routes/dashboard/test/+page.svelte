<script>
	import { onMount } from 'svelte';

	let platforms = [];
	let isLoading = true;
	let error = '';

	const API_URL = 'https://api.monierate.com/core/rates/platforms.json';
	const API_TOKEN = '375a3ca5bf7c7c280af2de0c9796a8dfbc8a0437782c13611181eecb07a950cd';

	onMount(async () => {
		try {
			const res = await fetch(API_URL, {
				headers: {
					Authorization: `Token ${API_TOKEN}`
				}
			});

			const data = await res.json();

			if (data.status === 'success') {
				platforms = data.data.platforms;
			} else {
				error = data.message || 'Something went wrong!';
			}
		} catch (err) {
			error = err.message || 'Failed to fetch data';
		} finally {
			isLoading = false;
		}
	});
</script>

<div class="container">
	<h2>💱 Moniepoint Exchange Rates (USD/NGN)</h2>

	{#if isLoading}
		<p class="loading">Loading rates...</p>
	{:else if error}
		<p class="loading">🚫 {error}</p>
	{:else}
		<table class="table">
			<thead>
				<tr>
					<th>Platform</th>
					<th>Buy (₦)</th>
					<th>Sell (₦)</th>
				</tr>
			</thead>
			<tbody>
				{#each platforms as platform}
					<tr>
						<td>{platform.code}</td>
						<td>{platform.buy > 0 ? platform.buy.toFixed(2) : 'N/A'}</td>
						<td>{platform.sell > 0 ? platform.sell.toFixed(2) : 'N/A'}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>

<style>
	.container {
		padding: 1rem;
		font-family: sans-serif;
	}
	.table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 1rem;
	}
	.table th,
	.table td {
		border: 1px solid #ccc;
		padding: 0.5rem;
		text-align: center;
	}
	.loading {
		text-align: center;
		font-size: 1.2rem;
		color: #555;
	}
</style>
