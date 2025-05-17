<script>
	import Collapse from '../utilities/collapse.svelte';
	import Expand from '../utilities/Expand.svelte';
	import TitleLabel from '../utilities/TitleLabel.svelte';
	export let question = '';
	export let answer = '';

	let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="accordion-item" on:click={toggle}>
	<div class="accordion-header">
		<TitleLabel text={question} />
		{#if isOpen}
			<Collapse />
		{:else}
			<Expand />
		{/if}
	</div>
	<div class="accordion-answer {isOpen ? 'open' : ''}">
		<p class="accordion-info">{answer}</p>
	</div>
</div>

<style>
	.accordion-item {
		margin-bottom: 2.2em;
	}
	.accordion-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.accordion-answer {
		color: var(--text-color-light);
		font-size: 1.2em;
		text-align: justify;

		margin-top: 1em;
		font-size: 1rem;
		color: #333;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease;

		border-bottom: 1px solid #b3b0b0;
	}

	.accordion-answer.open {
		max-height: 200px; /* Adjust if your answers are longer */
	}

	.accordion-info {
		padding: 0.5em;
	}
</style>
