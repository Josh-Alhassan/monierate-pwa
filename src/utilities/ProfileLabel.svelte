<script>
	export let leftIcon = '';
	export let label = 'My Account';
	export let rightIcon = '';
	export let altLeft = 'Left Icon';
	export let altRight = 'Right Icon';
	export let urlPath = '';
</script>

<a href={urlPath} class="account-label">
	<div class="account-label__sub">
		{#if leftIcon}
			<img src={leftIcon} alt={altLeft} />
		{/if}
		<span class="profile-label">{label}</span>
	</div>

	{#if rightIcon}
		<img src={rightIcon} alt={altRight} />
	{/if}
</a>

<style>
	.account-label {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		padding: 12px 15px;
		border: 0.5px solid #f2f2f2;
		border-radius: 5px;

		color: var(--text-color-dark);
		text-decoration: none;
	}

	.account-label:hover {
		background-color: var(--primary-color-bg-opacity);
	}

	.account-label__sub {
		display: flex;
		align-items: center;
		gap: 1.25em;
	}

	.profile-label {
		font-weight: 500;
		font-size: 1.4em;
	}
</style>
