import type { Meta, StoryObj } from "@storybook/react";
import { ImageCard } from "../components/ImageCard";
import React from "react";

const meta: Meta<typeof ImageCard> = {
  title: "ImageCard",
  component: ImageCard,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ImageCard>;

export const Basic: Story = {
  render: (args) => {
    return <ImageCard {...args} />;
  },
};
