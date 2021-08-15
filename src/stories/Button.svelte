<script>
  import { createEventDispatcher } from "svelte";
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
  } from "svelte-feather-icons";
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * How large should the button be?
   */
  export let large = true;

  /**
   * Is there an icon?
   */

  export let hasIcon = false;

  /**
   * Is there a right icon?
   */

  export let iconRight = true;

  /**
   * Is there a left icon?
   */

  export let iconLeft = true;

  /**
   * Button contents
   */
  export let label = "";

  export let group = false;

  const dispatch = createEventDispatcher();

  /**
   * Click handler
   */
  function buttonClick(event) {
    dispatch("button-click", event);
  }
  function iconRightClick(event) {
    dispatch("icon-right-click", event);
  }
  function iconLeftClick(event) {
    dispatch("icon-left-click", event);
  }

  let commonClasses =
    "p-2 inline-flex items-center border rounded-md text-center font-semibold";

  $: sizeClasses = large ? "p-3" : "p-2";

  $: iconColorClasses =
    (hasIcon || iconRight || iconLeft) && primary
      ? "text-white"
      : (hasIcon || iconRight || iconLeft) && !primary
      ? "dark:text-gray-300 text-blue-700"
      : "";

  $: middleIconClasses =
    hasIcon && (iconRight || iconLeft) ? "mx-2 flex-none" : "";

  $: sideIconsClasses =
    iconRight || iconLeft
      ? "first:pr-2 last:pl-2 flex flex-col items-center"
      : "";

  $: iconSize = large ? "1.5x" : "1x";

  $: typeClasses = primary
    ? "justify-between dark:bg-blue-600 dark:border-blue-600 bg-blue-700 border-blue-700 text-white hover:bg-blue-600 active:bg-blue-800"
    : "justify-start border-gray-200 border-solid dark:border-gray-700 dark:text-gray-300 text-blue-700 dark:bg-gray-900 bg-white hover:bg-blue-200 active:bg-blue-300 hover:border-blue-200 active:border-blue-300";

  $: baseClasses = group ? "" : "";

  $: labelClasses = large
    ? "m-0 text-base py-2 px-3 flex-grow flex-shrink-0"
    : "m-0 text-xs tracking-wide flex-grow flex-shrink-0";
</script>

<button
  type="button"
  class="{commonClasses} {baseClasses} {typeClasses} {sizeClasses}"
  on:click={buttonClick}
>
  {#if iconLeft}
    <button type="button" class={sideIconsClasses} on:click={iconLeftClick}>
      <ChevronLeftIcon
        class="stroke-current {iconColorClasses}"
        size={iconSize}
      />
    </button>
  {/if}

  {#if hasIcon}
    <HomeIcon
      class="stroke-current {iconColorClasses} {middleIconClasses}"
      size={iconSize}
    />
  {:else}
    <p class={labelClasses}>{label}</p>
  {/if}

  {#if iconRight}
    <button type="button" class={sideIconsClasses} on:click={iconRightClick}>
      <ChevronRightIcon
        class="stroke-current {iconColorClasses}"
        size={iconSize}
      />
    </button>
  {/if}
</button>
