import { Meta, StoryObj } from "@storybook/react-vite";
import SocialLoginButton from "./SocialLoginButton";
import AppleIcon from "../../../../shared/assets/AppleIcon.svg";
import KakaoIcon from "../../../../shared/assets/KakaoIcon.svg";

const meta: Meta<typeof SocialLoginButton> = {
  title: "btn/btn_login",
  component: SocialLoginButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    provider: {
      control: { type: "radio" },
      options: ["apple", "kakao"],
    },
    bgColor: {
      control: { type: "text" },
    },
    textColor: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
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

type Story = StoryObj<typeof SocialLoginButton>;

export const KakaoLoginButton: Story = {
  args: {
    provider: "kakao",
    icon: KakaoIcon,
    bgColor: "bg-[#FCE64A]",
    textColor: "text-grayScaleBlack100",
    label: "카카오로 계속하기",
    recentLoginLabel: "카카오",
  },
};

export const AppleLoginButton: Story = {
  args: {
    provider: "apple",
    icon: AppleIcon,
    bgColor: "bg-grayScaleBlack80",
    textColor: "text-grayScaleBlack5",
    label: "Apple로 계속하기",
    recentLoginLabel: "Apple",
  },
};
