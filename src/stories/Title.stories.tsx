import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "../components/Title";
import React from "react";

const meta: Meta<typeof Title> = {
  title: "Title",
  component: Title,
  argTypes: {
    h: {
      control: "number",
    },
    label: {
      control: "text",
    },
    italic: {
      control: "boolean",
    },
    underlined: {
      control: "boolean",
    },
    strong: {
      control: "boolean",
    },
    mode: {
      options: ["left", "right", "center", "justify"],
      control: "radio",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Basic: Story = {
  render: (args) => {
    return <Title {...args} />;
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
    return <Title {...args} />;
  },
  argTypes: {
    color: {
      control: "color",
    },
  },
};
