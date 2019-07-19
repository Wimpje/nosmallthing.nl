import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		whatis: 'also this page is no small thing'
	}
});

export default app;