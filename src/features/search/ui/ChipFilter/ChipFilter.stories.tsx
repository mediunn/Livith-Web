import { Meta, StoryObj } from "@storybook/react-vite";
import ChipFilter from "./ChipFilter";

const meta: Meta<typeof ChipFilter> = {
  title: "Chip & dropdown & filter/chip_filter",
  component: ChipFilter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["on", "off"],
    },
    label: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChipFilter>;

export const On: Story = {
  args: {
    variant: "on",
    label: "전체",
  },
};

export const Off: Story = {
  args: {
    variant: "off",
    label: "전체",
  },
};
