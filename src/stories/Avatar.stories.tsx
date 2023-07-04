import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components/Avatar";
import React from "react";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  render: (args) => {
    return <Avatar {...args} />;
  },
};
