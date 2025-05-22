<script>
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
	import NavigationalRoutes from '../../../components/NavigationalRoutes.svelte';
	// import darkmode from '../../../assets/free/svg/basic/bx-moon.svg';
	// import lightmode from '../../../assets/free/svg/basic/bx-sun-bright.svg';

	// import { theme } from '../../../stores/theme.js';
	import { currentTheme } from '../../../stores/theme.js';

	let themeValue;
	currentTheme.subscribe((value) => (themeValue = value));

	function toggleTheme() {
		currentTheme.set(themeValue === 'dark' ? 'light' : 'dark');
	}
</script>

<section class="profile-section section">
	<div class="navheader-wrap">
		<NavHeader backHref="/dashboard" notificationCount={3} showNotification={true} />
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<i
			class="bx mode-toggle"
			class:bx-moon={currentTheme !== 'dark'}
			class:bx-sun={currentTheme === 'dark'}
			on:click={toggleTheme}
		/>
	</div>

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
					urlPath="/dashboard/profile/notification"
				/>

				<ProfileLabel
					leftIcon={helpCenter}
					label="Language"
					rightIcon={arrRight}
					urlPath="/dashboard/profile/language"
				/>
			</div>
		</div>
	</div>
	<NavigationalRoutes />
</section>

<style>
	.mode-toggle {
		position: relative;
		top: -50px;
		right: -205px;
		display: inline-block;
		font-size: 1.8em;
		cursor: pointer;
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
