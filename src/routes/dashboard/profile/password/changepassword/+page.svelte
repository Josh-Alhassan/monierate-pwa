<script>
	import AppButton from '../../../../../components/AppButton.svelte';
	import TextInput from '../../../../../components/TextInput.svelte';
	import NavHeader from '../../../../../utilities/NavHeader.svelte';
	import TitleLabel from '../../../../../utilities/TitleLabel.svelte';

	let currentPassword = '';
	let newPasword = '';
	let confirmNewPassword = '';
</script>

<section class="section">
	<NavHeader backHref="/dashboard/profile/password" notificationCount={3} />
	<TitleLabel text="Change Password" />

	<div class="input-container">
		<form>
			<TextInput
				id="currentPassword"
				label="Current Password"
				type="password"
				placeholder="Enter your password"
				required
				bind:value={currentPassword}
			/>

			<TextInput
				id="newPassword"
				label="New Password"
				type="password"
				placeholder="Enter New password"
				required
				bind:value={newPasword}
			/>

			<TextInput
				id="confirmPassword"
				label="Confirm Password"
				type="password"
				placeholder="Confirm password"
				required
				bind:value={confirmNewPassword}
			/>

			<AppButton type="submit" inactive={false} bgColor="var(--primary-color)" textColor="#ffffff">
				Save Change
			</AppButton>
		</form>
	</div>
</section>
