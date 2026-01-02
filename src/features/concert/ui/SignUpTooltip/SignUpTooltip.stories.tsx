import { Meta, StoryObj } from "@storybook/react-vite";
import SignUpTooltip from "./SignUpTooltip";

const meta: Meta<typeof SignUpTooltip> = {
  title: "callout & tooltip/tooltip",
  component: SignUpTooltip,
  argTypes: {
    onClose: { action: "closed" },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SignUpTooltip>;

export const GroupA: Story = {
  args: {
    group: "A",
    isOpen: true,
  },
};

export const GroupB: Story = {
  args: {
    group: "B",
    isOpen: true,
  },
};

export const GroupC: Story = {
  args: {
    group: "C",
    isOpen: true,
  },
};

export const Closed: Story = {
  args: {
    group: "B",
    isOpen: false,
  },
};
