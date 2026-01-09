import type { Meta, StoryObj } from "@storybook/react";
import { ChipBadge } from "./ChipBadge";
import HotConcertChipIcon from "../assets/HotConcertChipIcon.svg";

const meta: Meta<typeof ChipBadge> = {
  title: "Chip & dropdown & filter/chip_badge",
  component: ChipBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    icon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipBadge>;

export const Default: Story = {
  args: {
    label: "첫 단독 내한 콘서트",
    icon: HotConcertChipIcon,
  },
};
