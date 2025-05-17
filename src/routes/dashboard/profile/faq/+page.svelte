<script>
	import Accordion from '../../../../components/Accordion.svelte';
	import NavHeader from '../../../../utilities/NavHeader.svelte';
	import TitleLabel from '../../../../utilities/TitleLabel.svelte';

	const faqs = [
		{
			question: 'Swapsquare?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem imperdiet pellentesque venenatis et. Mauris in vel integer sed lectus. Sollicitudin egestas felis elementum quis. Porttitor et convallis adipiscing nulla montes.'
		},
		{
			question: 'How do I contact support?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem imperdiet pellentesque venenatis et. Mauris in vel integer sed lectus. Sollicitudin egestas felis elementum quis. Porttitor et convallis adipiscing nulla montes.'
		},
		{
			question: 'What is Ads?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem imperdiet pellentesque venenatis et. Mauris in vel integer sed lectus. Sollicitudin egestas felis elementum quis. Porttitor et convallis adipiscing nulla montes.'
		},
		{
			question: 'What is Ads?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem imperdiet pellentesque venenatis et. Mauris in vel integer sed lectus. Sollicitudin egestas felis elementum quis. Porttitor et convallis adipiscing nulla montes.'
		},
		{
			question: 'What is Ads?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem imperdiet pellentesque venenatis et. Mauris in vel integer sed lectus. Sollicitudin egestas felis elementum quis. Porttitor et convallis adipiscing nulla montes.'
		}
	];
</script>

<section class="section">
	<NavHeader backHref="/dashboard/profile" notificationCount={2} />
	<TitleLabel text="Frequently Asked Question" />

	<div class="faq-wrap">
		{#each faqs as faq}
			<Accordion question={faq.question} answer={faq.answer} />
		{/each}
	</div>
</section>

<style>
	.faq-wrap {
		margin-top: 41px;
	}
</style>
