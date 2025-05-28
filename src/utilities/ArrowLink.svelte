<!-- ArrowLink.svelte -->
<script>
	import RightChevronIcon from './RightChevronIcon.svelte';

	export let href = '/dashboard';
	export let icon = RightChevronIcon;
	export let alt = 'arrow icon';
</script>

<a {href} class="arrow-link">
	<img src={icon} {alt} />
</a>

<style>
	.arrow-link img {
		width: 15px;
		height: 15px;
		object-fit: contain;
	}
</style>
