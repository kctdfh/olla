<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { null_to_empty } from "svelte/internal";
  import Button from "./Button.svelte";
</script>

<Meta title="Inputs/Button" component={Button} />

<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<Story
  name="Singleton"
  args={{
    label: "Button",
    primary: false,
    large: false,
    hasIcon: false,
    iconRight: false,
    iconLeft: false,
    group: false,
  }}
/>
