import { Meta, StoryObj } from "@storybook/react-vite";
import ConcertSettingTooltip from "./ConcertSettingTooltip";

const meta: Meta<typeof ConcertSettingTooltip> = {
  title: "callout & tooltip/tooltip",
  component: ConcertSettingTooltip,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ConcertSettingTooltip>;

export const Default: Story = {
  args: { isOpen: true },
};
