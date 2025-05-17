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
			<!-- <label class="label-input" for="email">Email</label>
			<input class="input-input" id="email" type="email" placeholder="seainjon@gmail.com" /> -->

			<TextInput
				id="email"
				label="Email"
				type="email"
				placeholder="seainjon@gmail.com"
				required
				bind:value={email}
			/>

			<AppButton type="submit" textColor="#000">Save Change</AppButton>
		</form>
	</div>
</section>

<style>
	.input-container {
		margin-top: 4.1em;
	}

	/* .label-input {
		font-weight: 500;
		font-size: 1.4em;
		color: var(--text-color-light);
	}

	.input-input {
		border: 1px solid var(--secondary-color);
		border-radius: 5px;

		font-size: 14px;
		font-weight: 500;
	}

	.input-input:focus {
		outline: 1px solid var(--text-color-light);
	}

	.input-input::placeholder {
		font-size: 14px;
		font-weight: 500;
	} */

	/* .input-button {
		width: 100%;
		background-color: var(--secondary-color);
		outline: none;
		border: none;

		padding: 10px;
		border-radius: 5px;

		font-size: 1.2em;
		font-weight: 500;
		color: var(--inactive-btn);
	} */
</style>
