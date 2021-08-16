<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "../components/Button.svelte";
</script>

<Meta
  title="Inputs/Button"
  component={Button}
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
      options: ["None", "Center", "All", "Right", "Left", "Sides"],
      control: {
        type: "select",
      },
    },
  }}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<Story
  name="Singleton"
  args={{
    label: "Button",
    type: "Secondary",
    size: "Small",
    icon: "None",
    group: false,
  }}
/>
