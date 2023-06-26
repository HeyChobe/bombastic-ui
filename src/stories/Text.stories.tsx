import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/Text";
import React from "react";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  argTypes: {
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
    size: {
      options: [1, 2, 3],
      control: "radio",
    },
    mode: {
      options: ["left", "right", "center", "justify"],
      control: "radio",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  render: (args) => {
    return <Text {...args} />;
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
    return <Text {...args} />;
  },
  argTypes: {
    color: {
      control: "color",
    },
  },
};
