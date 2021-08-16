<script>
  import { ChevronDownIcon, HomeIcon, SlidersIcon } from "svelte-feather-icons";
  import Dropdown from "sv-bootstrap-dropdown";
  export let type = "secondary";
  export let size = "small";
  export let icon = "none";
  export let label = "Dropdown";
  export let placement = "bottom-end";
  export let menuItemsList = [];

  var iconLeft, iconCenter, iconSize, dropdownTrigger;
  var dropdownOpen = false;

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
      "overflow-hidden w-full border-box p-0 dark:bg-gray-900 bg-white flex flex-col border border-gray-300";
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
      "h-full w-full bg-transparent hover:bg-blue-100 active:bg-blue-100 dark:hover:bg-blue-200 dark:active:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-700 focus-visible:ring-opacity-50 group";
    if (newSize === "large") {
      classList += " text-base p-3";
    } else if (newSize === "small") {
      classList += " text-sm p-2";
    }
    return classList;
  }

  function updateMenuItemClassesDanger(size) {
    var newSize = size.toLowerCase();
    var classList =
      "h-full w-full first:rounded-t-md last:rounded-b-md bg-transparent hover:bg-red-100 active:bg-red-100 dark:hover:bg-red-200 dark:active:bg-red-300 focus:outline-none focus-visible:ring focus-visible:ring-red-700 focus-visible:ring-opacity-50 group";
    if (newSize === "large") {
      classList += " text-base p-3";
    } else if (newSize === "small") {
      classList += " text-sm p-2";
    }
    return classList;
  }

  function updateListClasses(size) {
    var newSize = size.toLowerCase();
    var classList = "p-0 m-0 w-full rounded-md";
    if (newSize === "large") {
      classList += " space-y-3";
    } else if (newSize === "small") {
      classList += " space-y-2";
    }
    return classList;
  }

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
    "p-2 inline-flex items-center border text-center font-semibold";

  $: radiusClasses = updateButtonRadius(dropdownOpen);
  $: typeClasses = updateType(type);
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
  onOpened={dropdownOpened}
  onClosed={dropdownClosed}
>
  <button
    type="button"
    bind:this={dropdownTrigger}
    class="{commonClasses} {typeClasses} {sizeClasses} {radiusClasses}"
  >
    {#if iconLeft && !iconCenter}
      <SlidersIcon
        class="stroke-current mr-2 {iconColorClasses}"
        size={iconSize}
      />
    {/if}

    {#if iconCenter}
      <HomeIcon
        class="stroke-current flex-none {iconColorClasses}"
        size={iconSize}
      />
    {:else}
      <p class={labelClasses}>{label}</p>
    {/if}

    <ChevronDownIcon
      class="stroke-current ml-2 {iconColorClasses}"
      size={iconSize}
    />
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
