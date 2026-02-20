import { Meta, StoryObj } from "@storybook/react-vite";
import CommonModal from "./CommonModal";
import CongratsIcon from "../../../../shared/assets/CongratsIcon.svg";
import WarningTriangleIcon from "../../../../shared/assets/WarningTriangleIcon.svg";

const meta: Meta<typeof CommonModal> = {
  title: "modal/modal_common",
  component: CommonModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "text" },
    },
    btnText: {
      control: { type: "text" },
    },
    btnVariant: {
      control: { type: "radio" },
      options: ["primary", "pink"],
    },
    isOpen: {
      control: { type: "boolean" },
    },
    onClose: {
      action: "onClose",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CommonModal>;

export const SignupCompleteModal: Story = {
  args: {
    isOpen: true,
    title: "유저님, \n 라이빗에 어서오세요!",
    description: "라이빗과 즐거운 내한 공연을 준비해 볼까요?",
    icon: CongratsIcon,
    btnText: "시작하기",
    btnVariant: "primary",
  },
};

export const WithdrawalRestrictionModal: Story = {
  args: {
    isOpen: true,
    title: "탈퇴 후 7일이 지나지 않았어요",
    description: "7일이 지난 후 다시 시도해주세요",
    icon: WarningTriangleIcon,
    btnText: "홈으로 돌아가기",
    btnVariant: "pink",
  },
};

export const ErrorModal: Story = {
  args: {
    isOpen: true,
    title: "오류가 발생했어요!",
    description: "홈에서 다시 시도해주세요",
    icon: WarningTriangleIcon,
    btnText: "홈으로 돌아가기",
    btnVariant: "pink",
  },
};
