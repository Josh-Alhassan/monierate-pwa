<script>
	import AppButton from '../../../../components/AppButton.svelte';
	import TextInput from '../../../../components/TextInput.svelte';
	import AppLink from '../../../../utilities/AppLink.svelte';
	import NavHeader from '../../../../utilities/NavHeader.svelte';
	import TitleLabel from '../../../../utilities/TitleLabel.svelte';

	let password = '';
</script>

<section class="section">
	<NavHeader backHref="/dashboard/profile" notificationCount={2} />
	<TitleLabel text="Password" />

	<div class="input-container">
		<form>
			<TextInput
				id="password"
				label="Current Password"
				type="password"
				placeholder="Enter your password"
				required
				bind:value={password}
			/>

			<AppLink href="/dashboard/profile/password/changepassword" fullWidth={true}
				>Change Password</AppLink
			>
		</form>
	</div>
</section>
