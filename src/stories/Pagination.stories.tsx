import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/Pagination";
import React from "react";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  render: (args) => {
    return <Pagination {...args} />;
  },
};
