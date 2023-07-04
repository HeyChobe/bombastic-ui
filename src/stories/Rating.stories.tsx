import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Rating } from "../components/Rating"

const meta: Meta<typeof Rating> = {
  title: "Rating",
  component: Rating,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Basic: Story = {
  render: (args) => {
    return <Rating {...args} />;
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
    return <Rating {...args} />;
  },
};
