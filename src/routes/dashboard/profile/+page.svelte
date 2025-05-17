<script>
	import NavigationalRoutes from '../../../components/NavigationalRoutes.svelte';
	import NavHeader from '../../../utilities/NavHeader.svelte';
	import TitleLabel from '../../../utilities/TitleLabel.svelte';

	// Import Icons
	import profileIcon from '../../../assets/profile-icon.svg';
	import arrRight from '../../../assets/arr-right.svg';
	import ProfileLabel from '../../../utilities/ProfileLabel.svelte';
	import keyIcon from '../../../assets/key-icon.svg';
	import helpCenter from '../../../assets/help-center-icon.svg';
	import faq from '../../../assets/faq-icon.svg';
	import bell from '../../../assets/bell-icon.svg';
	import file from '../../../assets/contract-icon.svg';
</script>

<section class="profile-section">
	<NavHeader backHref="/dashboard" notificationCount={3} showNotification={true} />

	<div class="account-section">
		<TitleLabel text="Account" level="h2" />

		<div class="account-container">
			<ProfileLabel
				leftIcon={profileIcon}
				label="My Account"
				rightIcon={arrRight}
				urlPath="/dashboard/profile/myaccount"
			/>

			<ProfileLabel
				leftIcon={keyIcon}
				label="Password"
				rightIcon={arrRight}
				urlPath="/dashboard/profile/password"
			/>

			<ProfileLabel
				leftIcon={helpCenter}
				label="Help Center"
				rightIcon={arrRight}
				urlPath="/dashboard/profile/xyz"
			/>

			<ProfileLabel
				leftIcon={faq}
				label="FAQ"
				rightIcon={arrRight}
				urlPath="/dashboard/profile/faq"
			/>

			<ProfileLabel
				leftIcon={file}
				label="Terms and Privacy Policy"
				rightIcon={arrRight}
				urlPath="/dashboard/profile/terms"
			/>
		</div>

		<div class="preference-section">
			<TitleLabel text="Preference" level="h2" />
			<div class="preference-container">
				<ProfileLabel
					leftIcon={bell}
					label="Notifications"
					rightIcon={arrRight}
					urlPath="/dashboard/profile/xyz"
				/>

				<ProfileLabel
					leftIcon={keyIcon}
					label="Language"
					rightIcon={arrRight}
					urlPath="/dashboard/profile/xyz"
				/>
			</div>
		</div>
	</div>
	<NavigationalRoutes />
</section>

<style>
	.profile-section {
		padding: 30px 22px;
	}

	.account-section {
		margin-top: 3.1em;
	}

	.account-container {
		margin-top: 14px;
		display: flex;
		flex-direction: column;
		gap: 0.7em;
	}

	.preference-section {
		margin-top: 38px;
	}

	.preference-container {
		margin-top: 14px;
	}
</style>
