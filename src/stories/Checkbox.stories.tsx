import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Checkbox from "../components/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  render: (args) => {
    return <Checkbox {...args} />;
  },
  argTypes: {
    color: {
      options: ["primary", "secondary", "ok", "cancel", "warning"],
      control: "radio",
    },
  },
};

export const Custom: Story = {
  render: (args) => {
    return <Checkbox {...args} />;
  },
};
