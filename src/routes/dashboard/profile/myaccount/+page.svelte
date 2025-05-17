<script>
	import AppButton from '../../../../components/AppButton.svelte';
	import TextInput from '../../../../components/TextInput.svelte';
	import NavHeader from '../../../../utilities/NavHeader.svelte';
	import TitleLabel from '../../../../utilities/TitleLabel.svelte';

	let email = '';
</script>

<section class="section">
	<NavHeader backHref="/dashboard/profile" notificationCount={5} />
	<TitleLabel text="My Account" level="h2" />

	<div class="input-container">
		<form>
			<TextInput
				id="email"
				label="Email"
				type="email"
				placeholder="seainjon@gmail.com"
				required
				bind:value={email}
			/>

			<AppButton type="submit" textColor="#000">Save Change</AppButton>
			<!-- <AppButton type="submit" inactive={false} bgColor="var(--primary-color)" textColor="#ffffff">
				Save Change
			</AppButton> -->
		</form>
	</div>
</section>

<!-- <style>
	.input-container {
		margin-top: 4.1em;
	}
</style> -->
