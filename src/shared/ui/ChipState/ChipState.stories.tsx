// ChipState.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import ChipState from "./ChipState";

const meta: Meta<typeof ChipState> = {
  title: "Chip & dropdown & filter/chip_state",
  component: ChipState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "selected", "keyword"],
    },
    label: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChipState>;

export const Default: Story = {
  args: {
    label: "공연취소",
    variant: "default",
  },
};

export const Selected: Story = {
  args: {
    label: "D-n",
    variant: "selected",
  },
};

export const Keyword: Story = {
  args: {
    label: "R&B",
    variant: "keyword",
  },
};
