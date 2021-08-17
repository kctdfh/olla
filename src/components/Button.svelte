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
      iconSize = "22";
      return "p-4";
    } else if (newSize === "small") {
      iconSize = "16";
      return "p-2";
    } else if (newSize === "medium") {
      iconSize = "18";
      return "p-3";
    }
  }

  function updateType(type) {
    var newType = type.toLowerCase();
    var classList =
      "border border-solid transition-colors duration-150 ease-in justify-start focus-visible:ring-opacity-50 focus:outline-none focus-visible:ring";
    if (newType === "primary") {
      classList +=
        " bg-blue-700 text-white" +
        " hover:bg-blue-600 active:bg-blue-800" +
        " dark:bg-blue-600 border-0" +
        " dark:hover:bg-blue-700 dark:active:bg-blue-800" +
        " focus-visible:ring-blue-700" +
        " dark:focus-visible:ring-blue-500";
      return classList;
    } else if (newType === "secondary") {
      classList +=
        " text-blue-700 bg-white" +
        " dark:text-gray-300 dark:bg-gray-900" +
        " border-gray-300" +
        " dark:border-gray-700" +
        " hover:bg-blue-50 hover:border-blue-200 active:bg-blue-100 active:border-blue-300" +
        " dark:hover:bg-blue-700 dark:hover:border-blue-800 dark:active:bg-blue-800 dark:active:border-blue-800" +
        " focus-visible:ring-blue-700" +
        " focus-visible:ring-blue-500 ";
      return classList;
    } else if (newType === "warning") {
      classList +=
        " text-red-700 bg-red-50" +
        " dark:text-red-500 dark:bg-gray-900" +
        " border-red-500" +
        " dark:border-red-700" +
        " hover:bg-red-100 hover:border-red-800 active:bg-red-200 active:border-red-900" +
        " dark:hover:text-white dark:hover:bg-red-500 dark:hover:border-red-700 dark:active:bg-red-600 dark:active:border-red-800" +
        " focus-visible:ring-red-700" +
        " focus-visible:ring-red-500";
      return classList;
    }
  }

  function updateIcons(icon) {
    var newIcon = icon.toLowerCase();
    var newType = type.toLowerCase();
    var classList = "stroke-current flex-none ";

    function setType() {
      if (newType === "primary") {
        classList += "text-white hover:text-blue-50 active:text-blue-100";
      } else if (newType === "secondary") {
        classList +=
          "text-blue-700 dark:text-gray-300 hover:text-blue-400 active:text-blue-600 dark:active:text-blue-700 dark:hover:text-gray-200";
      } else if (newType === "danger") {
        classList +=
          "text-red-700 dark:text-red-600 hover:text-red-400 active:text-red-600 dark:active:text-red-900 dark:hover:text-red-500";
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

  function updateCenterIcon(icon) {
    var newType = type.toLowerCase();
    var classList = "";
    function setType() {
      if (newType === "primary") {
        classList += "text-white";
      } else if (newType === "secondary") {
        classList += "text-blue-700 dark:text-gray-300";
      } else if (newType === "danger") {
        classList += "text-red-700 dark:text-red-600";
      }
    }
  }

  function updateIconButtons(icon) {
    var newType = type.toLowerCase();
    var classList =
      "rounded-full focus-visible:ring-opacity-50 focus:outline-none focus-visible:ring flex flex-col items-center first:mr-2 last:ml-2 ";
    function setType() {
      classList +=
        "transition-colors duration-75 ease-in focus-visible:ring-opacity-50 focus:outline-none focus-visible:ring";
      if (newType === "primary") {
        classList +=
          "focus-visible:ring-blue-700 dark:focus-visible:ring-blue-500";
      } else if (newType === "secondary") {
        classList += "focus-visible:ring-blue-700 focus-visible:ring-blue-500";
      } else if (newType === "danger") {
        classList += "focus-visible:ring-red-700 focus-visible:ring-red-500 ";
      }
    }
    setType();
    return classList;
  }

  function updateLabel(label) {
    var newSize = size.toLowerCase();
    var classList = "";
    if (newSize === "large") {
      classList +=
        "m-0 leading-[20px] h-[22px] text-base align-middle flex-grow flex-shrink-0";
    } else if (newSize === "medium") {
      classList +=
        "m-0 leading-[16px] h-[18px] text-sm align-middle flex-grow flex-shrink-0";
    } else if (newSize === "small") {
      classList +=
        "m-0 leading-[17px] h-[16px] text-xs align-middle flex-grow flex-shrink-0";
    } /* 
    if (
      ((iconLeft && iconRight) || iconAll) &&
      (newSize === "large" || newSize === "medium")
    ) {
      classList += " mx-2";
    } */
    return classList;
  }

  let commonClasses =
    "p-2 inline-flex items-center rounded-md text-center font-semibold";

  $: typeClasses = updateType(type);
  $: sizeClasses = updateSize(size);
  $: iconColorClasses = updateIcons(icon);
  $: centerIconColor = updateCenterIcon(icon);
  $: labelClasses = updateLabel(label);
  $: iconButtonClasses = updateIconButtons(icon);
  $: baseClasses = group ? "" : "";
</script>

<button
  type="button"
  class="{commonClasses} {baseClasses} {typeClasses} {sizeClasses}"
  on:click={buttonClick}
>
  {#if iconLeft || iconAll}
    <button type="button" class={iconButtonClasses} on:click={iconLeftClick}>
      <ChevronLeftIcon class={iconColorClasses} size={iconSize} />
    </button>
  {/if}

  {#if iconCenter || iconAll}
    <HomeIcon class="{centerIconColor} {centerIconClasses}" size={iconSize} />
  {:else if iconNone || iconRight || iconLeft}
    <p class={labelClasses}>{label}</p>
  {/if}

  {#if iconRight || iconAll}
    <button type="button" class={iconButtonClasses} on:click={iconRightClick}>
      <ChevronRightIcon class={iconColorClasses} size={iconSize} />
    </button>
  {/if}
</button>
