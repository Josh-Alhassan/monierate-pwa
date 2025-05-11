// import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess";

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: vitePreprocess(),
// }

// import sveltePreprocess from "svelte-preprocess";

const config = {
  preprocess: sveltePreprocess({
    typescript: true,
  }),
};

export default config;
