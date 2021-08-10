<script>
  import { createEventDispatcher } from "svelte";
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * How large should the button be?
   */
  export let large = true;

  /**
   * Button contents
   */
  export let label = "";

  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  function onClick(event) {
    dispatch("click", event);
  }

  $: sizeClasses = large ? "p-5 text-base font-semibold" : "px-2 py-1 text-sm";
  $: typeClasses = primary
    ? "dark:bg-yellow-600 bg-blue-500 text-white"
    : "dark:bg-red-600 dark:text-white bg-white text-blue-500 border border-blue-500 border-solid";
</script>

<button
  type="button"
  class="underline {sizeClasses} {typeClasses}"
  on:click={onClick}
>
  {label}
</button>

<style>
</style>
