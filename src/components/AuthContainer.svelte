<script>
	import SubmitButton from './SubmitButton.svelte';
	import google from '../assets/devicon_google.png';
	import apple from '../assets/apple.png';

	let activeTab = 'signup';

	let email = '';
	let password = '';
	let confirmPassword = '';
	let passwordsMatch = true;

	$: passwordsMatch = password === confirmPassword || confirmPassword === '';

	function handleSubmit() {
		if (activeTab === 'signup') {
			if (!passwordsMatch) {
				alert('Passwords do not match.');
				return;
			}
			// Submit sign-up logic here
			alert('Signing up...');
		} else {
			// Submit login logic here
			alert('Logging in...');
		}
	}
</script>

<div class="auth-container">
	<div class="auth-navs">
		<button
			class="auth-btn {activeTab === 'signup' ? 'active' : ''}"
			on:click={() => (activeTab = 'signup')}
			type="button"
		>
			Sign Up
		</button>
		<button
			class="auth-btn {activeTab === 'login' ? 'active' : ''}"
			on:click={() => (activeTab = 'login')}
			type="button"
		>
			Log In
		</button>
	</div>

	{#if activeTab === 'signup'}
		<div class="signup-container">
			<h2 class="signup-heading">Sign Up</h2>
			<p class="signup-terms">
				By continuing, you agree to monierate
				<a href="#" class="signup-terms-link">Terms of Service</a> and acknowledge you&apos;ve read
				our
				<a href="#" class="signup-terms-link">Privacy Policy</a>
			</p>

			<form class="signup-form" on:submit|preventDefault={handleSubmit}>
				<label for="email">Email</label>
				<input type="email" id="email" bind:value={email} placeholder="Enter your email" required />

				<label for="password">Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					placeholder="Password"
					required
				/>

				<label for="confirmPassword">Confirm Password</label>
				<input
					type="password"
					id="confirmPassword"
					bind:value={confirmPassword}
					placeholder="Confirm Password"
					required
				/>

				{#if confirmPassword && !passwordsMatch}
					<p style="color: red;">Passwords do not match</p>
				{/if}

				<SubmitButton type="submit" label="Submit" disabled={!passwordsMatch} />
			</form>
		</div>
	{:else}
		<div class="login-container">
			<h2 class="signup-heading">Log In</h2>

			<form class="signup-form" on:submit|preventDefault={handleSubmit}>
				<label for="email">Email</label>
				<input type="email" id="email" bind:value={email} placeholder="Enter your email" required />

				<label for="password">Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					placeholder="Password"
					required
				/>

				<SubmitButton type="submit" label="Log In" />
			</form>
		</div>
	{/if}

	<div class="signup-footer">
		<p class="auth-continue">or continue with</p>

		<div class="auth-accounts">
			<a href="#" class="auth-account">
				<img src={google} alt="Google" />
				Google
			</a>

			<a href="#" class="auth-account">
				<img src={apple} alt="Apple" />
				Apple
			</a>
		</div>
	</div>
</div>

<style>
	.auth-container {
		padding: 50px 22px;
	}

	.auth-navs {
		display: flex;
		gap: 19px;
		margin-bottom: 40px;
	}

	.auth-btn {
		padding: 13px 40px;
		font-size: 1.2em;
		font-family: inherit;
		border-radius: 5px;
		font-weight: 600;
		text-decoration: none;
		background: none;
		border: none;
		cursor: pointer;
	}

	.active {
		background: var(--primary-color);
		color: var(--text-color-white);
	}

	.signup-heading {
		font-size: 2.4em;
		margin-bottom: 14px;
	}

	.signup-terms {
		font-size: 1.4em;
		font-weight: 400;
		line-height: 22px;
		letter-spacing: -1%;
		color: var(--text-color-light);
	}

	.signup-terms-link {
		color: var(--primary-color);
	}

	.signup-form {
		margin-top: 40px;
	}

	.signup-footer {
		margin-top: 40px;
		text-align: center;
	}

	.auth-accounts {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-top: 20px;
	}

	.auth-account {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: var(--text-color-alt);
		font-size: 1.4em;
		gap: 10px;
		font-weight: 600;
		font-size: 1.4em;
		padding: 18px 53px;
		border-radius: 5px;
		border: 1px solid #f2f2f2;
	}

	.auth-account > img {
		width: 20px;
		height: 20px;
	}
</style>
