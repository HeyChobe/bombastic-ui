import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../components/Accordion";
import React from "react";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    description: {
      control: "text",
    },
    title: {
      control: "text",
    },
    bg: {
      options: ["dark", "light"],
      control: "radio",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: (args) => {
    return <Accordion {...args} />;
  },
};
