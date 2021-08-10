<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<Meta title="Button" component={Button} />

<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<Story
  name="Secondary Small"
  args={{
    label: "Secondary Small",
    primary: false,
    large: false,
  }}
/>
