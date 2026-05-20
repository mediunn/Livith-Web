import { Meta, StoryObj } from "@storybook/react-vite";
import CommonButton from "./CommonButton";

const meta: Meta<typeof CommonButton> = {
  title: "btn/btn_common",
  component: CommonButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "pink"],
    },
    onClick: { action: "clicked" },
    isActive: {
      control: { type: "boolean" },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[416px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CommonButton>;

export const PrimaryButton: Story = {
  args: {
    title: "btn",
    variant: "primary",
    isActive: true,
  },
};

export const PinkButton: Story = {
  args: {
    title: "btn",
    variant: "pink",
    isActive: true,
  },
};

export const InactiveButton: Story = {
  args: {
    title: "btn",
    isActive: false,
  },
};
