<script>
  import { createEventDispatcher } from "svelte";
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
  } from "svelte-feather-icons";

  export let type = "secondary";
  export let size = "small";
  export let icon = "none";
  export let label = "Button";
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

  var iconRight,
    iconLeft,
    iconCenter,
    iconAll,
    iconNone,
    iconSize,
    centerIconClasses;

  function updateSize(size) {
    var newSize = size.toLowerCase();
    if (newSize === "large") {
      iconSize = "1.5x";
      return "p-3";
    } else if (newSize === "small") {
      iconSize = "16";
      return "p-2";
    }
  }

  function updateType(type) {
    var newType = type.toLowerCase();
    if (newType === "primary") {
      return "justify-between dark:bg-blue-600 dark:border-blue-600 bg-blue-700 border-blue-700 text-white hover:bg-blue-600 active:bg-blue-800";
    } else if (newType === "secondary") {
      return "justify-start border-gray-300 border-solid dark:border-gray-700 dark:text-gray-300 text-blue-700 dark:bg-gray-900 bg-white hover:bg-blue-50 active:bg-blue-100 hover:border-blue-50 active:border-blue-100 focus-visible:ring focus-visible:ring-blue-700 focus-visible:ring-opacity-50 focus:outline-none";
    }
  }

  function updateIcons(icon) {
    var newIcon = icon.toLowerCase();
    var newType = type.toLowerCase();
    var classList;

    function setType() {
      if (newType === "primary") {
        classList = "text-white";
      } else if (newType === "secondary") {
        classList = "dark:text-gray-300 text-blue-700";
      }
    }

    if (newIcon === "all") {
      iconAll = true;
      centerIconClasses = "mx-2";
    } else if (newIcon === "none") {
      iconNone = true;
    } else if (newIcon === "sides") {
      iconRight = true;
      iconLeft = true;
    } else if (newIcon === "left") {
      iconLeft = true;
    } else if (newIcon === "right") {
      iconRight = true;
    } else if (newIcon === "center") {
      iconCenter = true;
    }

    setType();
    return classList;
  }

  function updateLabel(label) {
    var newSize = size.toLowerCase();
    if (newSize === "large") {
      return "m-0 text-base py-2 px-3 flex-grow flex-shrink-0";
    } else if (newSize === "small") {
      return "m-0 text-xs tracking-wide flex-grow flex-shrink-0";
    }
  }

  let commonClasses =
    "p-2 inline-flex items-center border rounded-md text-center font-semibold";

  $: typeClasses = updateType(type);
  $: sizeClasses = updateSize(size);
  $: iconColorClasses = updateIcons(icon);
  $: labelClasses = updateLabel(label);
  $: baseClasses = group ? "" : "";
</script>

<button
  type="button"
  class="{commonClasses} {baseClasses} {typeClasses} {sizeClasses}"
  on:click={buttonClick}
>
  {#if iconLeft || iconAll}
    <button
      type="button"
      class="flex flex-col items-center first:pr-2 last:pl-2"
      on:click={iconLeftClick}
    >
      <ChevronLeftIcon
        class="stroke-current {iconColorClasses}"
        size={iconSize}
      />
    </button>
  {/if}

  {#if iconCenter || iconAll}
    <HomeIcon
      class="stroke-current flex-none {iconColorClasses} {centerIconClasses}"
      size={iconSize}
    />
  {:else if iconNone || iconRight || iconLeft}
    <p class={labelClasses}>{label}</p>
  {/if}

  {#if iconRight || iconAll}
    <button
      type="button"
      class="flex flex-col items-center first:pr-2 last:pl-2"
      on:click={iconRightClick}
    >
      <ChevronRightIcon
        class="stroke-current {iconColorClasses}"
        size={iconSize}
      />
    </button>
  {/if}
</button>
