<script lang="ts">
  import Header from "./components/Header.svelte";
  // import { currentTab } from "./stores/navigation";
  import { onMount } from "svelte";

  let isLoaded = false;

  onMount(() => {
    // Simulate initial loading
    setTimeout(() => {
      isLoaded = true;
    }, 500);
  });
</script>

<main class="app-container {isLoaded ? 'loaded' : ''}">
  <Header />
  <!-- <Dashboard />
  <Navigation /> -->
</main>

<style>
</style>
