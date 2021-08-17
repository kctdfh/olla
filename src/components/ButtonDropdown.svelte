<script>
  import { ChevronDownIcon, HomeIcon, SlidersIcon } from "svelte-feather-icons";
  import Dropdown from "sv-bootstrap-dropdown";
  export let size = "small";
  export let icon = "none";
  export let label = "Dropdown";
  export let placement = "bottom-end";
  export let menuItemsList = [];

  var iconLeft, iconCenter, iconSize, dropdownTrigger;
  var dropdownOpen = false;
  var iconOnly = false;
  var offset = [0, 4];

  var listLinkClasses =
    "text-black dark:text-white group-hover:text-blue-700 dark:group-hover:text-gray-300";

  var listLinkClassesDanger =
    "text-red-600 dark:text-red-300 group-hover:text-red-700 dark:group-hover:text-red-200";

  function updateButtonRadius() {
    var classList = "";
    if (!dropdownOpen) {
      classList = "rounded-md";
    } else {
      switch (placement.toLowerCase()) {
        case "bottom-end":
          classList +=
            " rounded-bl-md rounded-tr-md rounded-tl-md rounded-br-0";
          break;
        case "bottom-start":
          classList +=
            " rounded-tr-md rounded-tl-md rounded-br-md rounded-bl-0";
          break;
        case "top-end":
          classList +=
            " rounded-bl-md rounded-tl-md rounded-tr-0 rounded-br-md";
          break;
        case "top-start":
          classList +=
            " rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-0";
          break;
        default:
          break;
      }
    }
    return classList;
  }

  function updateMenuClasses() {
    var newPlacement = placement.toLowerCase();
    var classList =
      "overflow-hidden w-full border-box p-0 dark:bg-gray-900 bg-white flex flex-col border border-blue-700 dark:border-blue-500";
    if (newPlacement === "bottom-end") {
      classList += " rounded-tr-0 rounded-bl-md rounded-tl-md rounded-br-md";
    } else if (newPlacement === "bottom-start") {
      classList += " rounded-tl-0 rounded-tr-md rounded-bl-md rounded-br-md";
    } else if (newPlacement === "top-end") {
      classList += " rounded-br-0 rounded-tr-md rounded-bl-md rounded-tl-md";
    } else if (newPlacement === "top-start") {
      classList += " rounded-bl-0 rounded-tr-md rounded-tl-md rounded-br-md";
    }
    return classList;
  }

  function updateMenuItemClasses(size) {
    var newSize = size.toLowerCase();
    var classList =
      "m-0 h-full w-full bg-transparent" +
      " hover:bg-blue-100" +
      " dark:hover:bg-blue-800" +
      " focus:outline-none focus-visible:ring focus-visible:ring-blue-700 focus-visible:ring-opacity-50" +
      " group";
    if (newSize === "large") {
      classList += " text-base p-3";
    } else if (newSize === "small" || newSize === "medium") {
      classList += " text-sm p-2";
    }
    return classList;
  }

  function updateMenuItemClassesDanger(size) {
    var newSize = size.toLowerCase();
    var classList =
      "m-0 h-full w-full bg-transparent" +
      " hover:bg-red-100" +
      " dark:hover:bg-red-800" +
      " focus:outline-none focus-visible:ring focus-visible:ring-red-700 focus-visible:ring-opacity-50" +
      " group";
    if (newSize === "large") {
      classList += " text-base p-3";
    } else if (newSize === "small" || newSize === "medium") {
      classList += " text-sm p-2";
    }
    return classList;
  }

  function updateListClasses(size) {
    var newSize = size.toLowerCase();
    var classList = "p-0 m-0 w-full";
    return classList;
  }

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

  function updateButton(dropdownOpen) {
    var classList =
      "border border-solid transition-colors ease duration-50 justify-start focus-visible:ring-opacity-50 focus:outline-none focus-visible:ring";
    if (!dropdownOpen) {
      classList +=
        " text-blue-700 bg-white" +
        " dark:text-gray-300 dark:bg-gray-900" +
        " border-gray-300" +
        " dark:border-gray-700" +
        " hover:bg-blue-50 hover:border-blue-200 active:bg-blue-100 active:border-blue-300" +
        " dark:hover:bg-blue-700 dark:hover:border-blue-800 dark:active:bg-blue-800 dark:active:border-blue-800" +
        " focus-visible:ring-blue-700" +
        " focus-visible:ring-blue-500 ";
    } else {
      classList +=
        " text-blue-700 bg-blue-100" +
        " dark:text-gray-300 dark:bg-gray-900" +
        " border-blue-700" +
        " dark:border-blue-500" +
        " focus-visible:ring-blue-700" +
        " focus-visible:ring-blue-500 ";
    }
    return classList;
  }

  function updateIcons(icon) {
    var newIcon = icon.toLowerCase();
    var classList = "dark:text-gray-300 text-blue-700";

    if (newIcon === "left") {
      iconCenter = false;
      iconLeft = true;
    } else if (newIcon === "none") {
      iconCenter = false;
      iconLeft = false;
    } else if (newIcon === "center") {
      iconCenter = true;
      iconLeft = false;
    } else if (newIcon === "all") {
      iconCenter = true;
      iconLeft = true;
    } else if (newIcon === "only") {
      iconCenter = false;
      iconLeft = false;
      iconOnly = true;
    }

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
    "p-2 inline-flex items-center border text-center font-semibold";

  $: radiusClasses = updateButtonRadius(dropdownOpen);
  $: buttonClasses = updateButton(dropdownOpen);
  $: sizeClasses = updateSize(size);
  $: iconColorClasses = updateIcons(icon);
  $: labelClasses = updateLabel(label);
  $: myMenuClasses = updateMenuClasses();
  $: myMenuItemClasses = updateMenuItemClasses(size);
  $: myMenuItemClassesDanger = updateMenuItemClassesDanger(size);
  $: myMenuItemList = updateListClasses(size);

  function dropdownOpened() {
    dropdownOpen = true;
  }

  function dropdownClosed() {
    dropdownOpen = false;
  }
</script>

<Dropdown
  triggerElement={dropdownTrigger}
  {placement}
  {offset}
  onOpened={dropdownOpened}
  onClosed={dropdownClosed}
>
  <button
    type="button"
    bind:this={dropdownTrigger}
    class="{commonClasses} {buttonClasses} {sizeClasses} {radiusClasses}"
  >
    {#if iconLeft && !iconCenter}
      <SlidersIcon
        class="stroke-current mr-2 {iconColorClasses}"
        size={iconSize}
      />
    {/if}

    {#if iconCenter || iconOnly}
      <HomeIcon
        class="stroke-current flex-none {iconColorClasses}"
        size={iconSize}
      />
    {:else}
      <p class={labelClasses}>{label}</p>
    {/if}

    {#if !iconOnly}
      <ChevronDownIcon
        class="stroke-current ml-2 {iconColorClasses}"
        size={iconSize}
      />
    {/if}
  </button>
  <div slot="DropdownMenu" class={myMenuClasses}>
    <ul class={myMenuItemList}>
      {#each menuItemsList as item}
        {#if item.type === "danger"}
          <li class={myMenuItemClassesDanger}>
            <a href={item.href} class={listLinkClassesDanger}>{item.name}</a>
          </li>
        {:else}
          <li class={myMenuItemClasses}>
            <a href={item.href} class={listLinkClasses}>{item.name}</a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</Dropdown>
