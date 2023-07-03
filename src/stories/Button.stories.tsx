import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      control: "text",
    },
    ghost: {
      control: "boolean",
    },
    small: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
  argTypes: {
    bg: {
      options: ["primary", "secondary", "ok", "cancel", "warning"],
      control: "radio",
    },
  },
  args: {
    bg: "primary",
    label: "Basic Button",
    onClick: () => {
      console.log("click");
    },
  },
};

export const Custom: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
  argTypes: {
    bg: {
      control: "color",
    },
  },
  args: {
    bg: "primary",
    label: "Custom Button",
  },
};
