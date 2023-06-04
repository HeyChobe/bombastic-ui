import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <Button bg="primary" label="Primary" onClick={() => console.log("hola")} />
  ),
};

export const Secondary: Story = {
  render: () => (
    <Button
      bg="secondary"
      label="Secondary"
      onClick={() => console.log("hola")}
    />
  ),
};

export const Ok: Story = {
  render: () => (
    <Button bg="ok" label="Success" onClick={() => console.log("hola")} />
  ),
};

export const Cancel: Story = {
  render: () => (
    <Button bg="cancel" label="Cancel" onClick={() => console.log("hola")} />
  ),
};

export const Warning: Story = {
  render: () => (
    <Button bg="warning" label="Warning" onClick={() => console.log("hola")} />
  ),
};

export const CustomColor: Story = {
  render: () => (
    <Button bg="#111111" label="Warning" onClick={() => console.log("hola")} />
  ),
};
