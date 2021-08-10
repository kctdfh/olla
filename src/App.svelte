<script>
  export let name;
  import Button from "./stories/Button.svelte";
</script>

<main class="dark">
  <h1>Hello {name}!</h1>
  <p class="font-bold underline">
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <Button label="My button here" large="true" primary="true" />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    @apply p-10 mx-auto bg-blue-100 text-center;
  }

  h1 {
    @apply text-red-600 uppercase text-2xl;
  }
</style>
