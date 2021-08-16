<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ButtonDropdown from "../components/ButtonDropdown.svelte";
</script>

<Meta
  title="Inputs/Dropdown"
  component={ButtonDropdown}
  argTypes={{
    type: {
      options: ["Primary", "Secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["Large", "Small"],
      control: {
        type: "select",
      },
    },
    icon: {
      options: ["None", "Left", "Center"],
      control: {
        type: "select",
      },
    },
    placement: {
      options: ["bottom-end", "bottom-start", "top-end", "top-start"],
      control: {
        type: "select",
      },
    },
  }}
/>

<Template let:args>
  <ButtonDropdown {...args} on:click={args.onClick} />
</Template>

<Story
  name="Button"
  args={{
    label: "Dropdown",
    type: "Secondary",
    size: "Small",
    icon: "None",
    placement: "bottom-start",
    menuItemsList: [
      {
        name: "First option",
        href: "javascript:void(0)",
      },
      {
        name: "Second option",
        href: "javascript:void(0)",
        type: "danger",
      },
      {
        name: "Third option",
        href: "javascript:void(0)",
      },
    ],
  }}
/>
