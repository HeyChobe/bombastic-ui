import type { Meta, StoryObj } from "@storybook/react";
import { InputText } from "../components/InputText";
import React from "react";

const meta: Meta<typeof InputText> = {
  title: "InputText",
  component: InputText,
  argTypes: {
    placeholder: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Basic: Story = {
  render: (args) => {
    return <InputText {...args} />;
  },
  argTypes: {
    color: {
      options: ["primary", "secondary", "ok", "cancel", "warning"],
      control: "radio",
    },
    labelColor: {
      options: ["dark", "light"],
      control: "radio",
    },
  },
};

export const Custom: Story = {
  render: (args) => {
    return <InputText {...args} />;
  },
};
