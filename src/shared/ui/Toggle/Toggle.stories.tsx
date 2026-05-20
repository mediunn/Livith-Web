import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Off: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
};

export const On: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
};
