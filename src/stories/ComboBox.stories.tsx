import type { Meta, StoryObj } from "@storybook/react";
import { ComboBox } from "../components/ComboBox";
import React from "react";

const meta: Meta<typeof ComboBox> = {
  title: "ComboBox",
  component: ComboBox,
  argTypes: {
    placeholder: {
      control: "text",
    },
    theme: {
      options: ["light", "dark"],
      control: "radio",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

export const Basic: Story = {
  render: (args) => {
    return <ComboBox {...args} />;
  },
};
