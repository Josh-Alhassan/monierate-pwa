<script>
	export let day = '1';
	export let active = false;
	export let textColor = 'var(--text-color-alt)';
	export let activeTextColor = 'var(--text-color-light)'; // active color when selected
</script>

<span class="rate-duration-day" style="color: {active ? activeTextColor : textColor};">
	{day}
</span>

<style>
	.rate-duration-day {
		padding: 14px 22px;
		font-weight: 500;
		font-size: 1.4em;
		display: inline-block;
		background-color: var(--text-color-white);
		border-radius: 5px;
		cursor: pointer;
		transition: 0.2s ease;
	}
</style>
