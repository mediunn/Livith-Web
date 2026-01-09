import type { Meta, StoryObj } from "@storybook/react";
import { ChipInfo } from "./ChipInfo";

const meta: Meta<typeof ChipInfo> = {
  title: "Chip & dropdown & filter/chip_info",
  component: ChipInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Chip text",
    },
    textStyle: {
      control: "radio",
      options: ["caption1Bold", "caption2Regular"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChipInfo>;

export const Caption1Bold: Story = {
  name: "default",
  args: {
    label: "일본 내한 가수",
    textStyle: "caption1Bold",
  },
};

export const Caption2Regular: Story = {
  name: "variant2",
  args: {
    label: "2022년 3월 25일",
    textStyle: "caption2Regular",
  },
};
