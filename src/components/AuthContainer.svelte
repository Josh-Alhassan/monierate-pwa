<script>
	import SubmitButton from './SubmitButton.svelte';

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
				<a href="#">Terms of Service</a> and acknowledge you&apos;ve read our
				<a href="#">Privacy Policy</a>
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
		padding: 13px 60px;
		font-size: 1.4em;
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
	}

	.signup-form {
		margin-top: 40px;
	}

	.submit-btn {
		padding: 13px 60px;
		font-size: 1.4em;
		border-radius: 5px;
		font-weight: 600;
		text-decoration: none;
		background: var(--primary-color);
		color: var(--text-color-white);
		border: none;
		cursor: pointer;
		width: 100%;
	}
</style>
