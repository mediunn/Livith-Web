import { Meta, StoryObj } from "@storybook/react-vite";
import MiniArrowIcon from "../../../shared/assets/MiniArrow.svg";
const meta: Meta = {
  title: "one-time-btn/btn_main_detail",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[300px] ">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="h-57 w-full flex flex-col justify-center hover:bg-grayScaleBlack90 bg-grayScaleBlack80 rounded-b-10 cursor-pointer">
      <div className="flex flex-row text-grayScaleBlack50 justify-center space-x-8">
        <p className="text-Body4-re font-regular font-NotoSansKR ">
          더 많은 노래를 확인해 보세요
        </p>
        <img src={MiniArrowIcon} />
      </div>
    </div>
  ),
};
