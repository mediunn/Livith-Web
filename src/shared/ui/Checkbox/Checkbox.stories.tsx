import { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox/checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["line", "fill"],
    },
    isPressed: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const LineUnpressed: Story = {
  args: {
    variant: "line",
    isPressed: false,
  },
};

export const LinePressed: Story = {
  args: {
    variant: "line",
    isPressed: true,
  },
};

export const FillUnpressed: Story = {
  args: {
    variant: "fill",
    isPressed: false,
  },
};

export const FillPressed: Story = {
  args: {
    variant: "fill",
    isPressed: true,
  },
};
