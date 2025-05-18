<script>
	import CustomDropdown from '../../../../components/CustomDropdown.svelte';
	import NavHeader from '../../../../utilities/NavHeader.svelte';
	import TitleLabel from '../../../../utilities/TitleLabel.svelte';

	import usIcon from '../../../../assets/us-dollar.svg';
	import AppButton from '../../../../components/AppButton.svelte';

	const languageOptions = [
		{
			value: 'uk',
			label: 'English (United Kingdom)',
			icon: usIcon
		},
		{
			value: 'usa',
			label: 'English (United States)',
			icon: usIcon
		},
		{
			value: 'french',
			label: 'French',
			icon: usIcon
		}
	];

	let selectedLanguage = languageOptions[0];

	const handleSelectLanguage = (option) => {
		selectedLanguage = option;
		console.log('Selected:', option);
	};
</script>

<section class="section">
	<NavHeader backHref="/dashboard/profile" notificationCount={3} />

	<div style="margin-bottom: 22px;">
		<TitleLabel text="Language" level="h2" />
	</div>

	<form class="language-form">
		<CustomDropdown
			options={languageOptions}
			selected={selectedLanguage}
			onSelect={handleSelectLanguage}
		/>

		<AppButton type="submit" textColor="#000">Save Changes</AppButton>
	</form>
</section>

<style>
	.language-form {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
