import { writable } from 'svelte/store';

const defaultTheme = localStorage.getItem('theme') || 'light';
export const theme = writable(defaultTheme);

// Sync with localStorage and HTML class
theme.subscribe((value) => {
	localStorage.setItem('theme', value);
	document.documentElement.classList.toggle('dark', value === 'dark');
});
