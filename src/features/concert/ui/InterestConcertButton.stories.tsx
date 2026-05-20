import type { Meta, StoryObj } from "@storybook/react";
import Lottie from "lottie-react";
import ConcertAddMotion from "../../../shared/assets/ConcertAddIconMotion.json";

const meta: Meta = {
  title: "One-time-btn/btn_main_set",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <button
      className="w-148 h-136 bg-grayScaleBlack80 hover:bg-grayScaleBlack100 rounded-10 border-none cursor-pointer"
      onClick={() => {}}
    >
      <div className="flex flex-col items-center ">
        <Lottie
          animationData={ConcertAddMotion}
          loop={true}
          className="w-40 h-40"
        />
        <p className="mt-7 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
          관심 콘서트 설정
        </p>
      </div>
    </button>
  ),
};
