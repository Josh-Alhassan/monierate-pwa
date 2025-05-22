import { writable } from 'svelte/store';

// Check if code is running in the browser
const isBrowser = typeof window !== 'undefined';

// Default to 'light' if not in browser
const defaultTheme = isBrowser ? localStorage.getItem('theme') || 'light' : 'light';

export const currentTheme = writable(defaultTheme);

// Sync with localStorage and HTML class, only in browser
if (isBrowser) {
	currentTheme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	});
}
