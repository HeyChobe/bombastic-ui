import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "SearchBar",
  component: SearchBar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Basic: Story = {
  render: (args) => {
    return <SearchBar {...args} />;
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
    return <SearchBar {...args} />;
  },
};
