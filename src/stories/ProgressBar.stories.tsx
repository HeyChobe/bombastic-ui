import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "../components/ProgressBar";
import React from "react";

const meta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    width: {
      control: "text",
    },
    bgColor: {
      control: "color",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Basic: Story = {
  render: (args) => {
    return <ProgressBar {...args} />;
  },
};
