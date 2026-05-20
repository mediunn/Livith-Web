import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "One-time-btn/btn_main_correct",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <button className="mr-24 text-grayScaleBlack50 bg-grayScaleBlack100 hover:bg-grayScaleBlack80 rounded-30 p-8 text-Body4-re font-regular font-NotoSansKR border-none cursor-pointer">
      수정하기
    </button>
  ),
};
