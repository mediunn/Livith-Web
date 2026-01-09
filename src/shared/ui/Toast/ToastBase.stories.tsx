import { Meta, StoryObj } from "@storybook/react-vite";
import ToastBase from "./ToastBase";
import CompleteToastIconMotion from "../../assets/CompleteToastIconMotion.json";
import Lottie from "lottie-react";
import ErrorToastIcon from "../../assets/ErrorToastIcon.svg";

const meta: Meta<typeof ToastBase> = {
  title: "Toast & Snackbar/toast",
  component: ToastBase,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: { control: { type: "text" } },
    message: { control: { type: "text" } },
  },
  decorators: [
    (Story) => (
      <div className="shadow-custom-toast rounded-8 bg-grayScaleBlack80 w-343 mt-[15%] mx-auto z-50 h-64 flex items-center px-16">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToastBase>;

export const DefaultToast: Story = {
  args: {
    icon: (
      <Lottie
        animationData={CompleteToastIconMotion}
        loop={false}
        renderer="svg"
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    ),
    message: "관심 공연을 변경했어요",
  },
};

export const ErrorToast: Story = {
  args: {
    icon: <img src={ErrorToastIcon} />,
    message: "오류가 발생했어요. 다시 시도해주세요.",
  },
};
