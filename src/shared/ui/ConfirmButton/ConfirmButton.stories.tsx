import type { Meta, StoryObj } from "@storybook/react";
import ConfirmButton from "./ConfirmButton";

const meta = {
  title: "btn/btn_confirm",
  component: ConfirmButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "버튼에 표시될 텍스트",
    },

    className: {
      control: "text",
      description: "추가 CSS 클래스",
    },
  },
} satisfies Meta<typeof ConfirmButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 등록 버튼
export const RegisterButton: Story = {
  args: {
    label: "등록",
    onClick: () => console.log("등록 버튼 클릭"),
    disabled: false,
    isLoading: false,
    className:
      "px-16 py-14 bg-mainYellow30 hover:bg-mainYellow60 text-grayScaleBlack100",
  },
};

// 등록 버튼 (비활성화)
export const RegisterButtonDisabled: Story = {
  args: {
    label: "등록",
    onClick: () => console.log("등록 버튼 클릭"),
    disabled: true,
    isLoading: false,
    className: "px-16 py-14 bg-grayScaleBlack80 text-grayScaleBlack50",
  },
};

// 중복확인 버튼
export const DuplicateCheckButton: Story = {
  args: {
    label: "중복확인",
    onClick: () => console.log("중복확인 버튼 클릭"),
    disabled: false,
    isLoading: false,
    className:
      "bg-grayScaleBlack80 hover:bg-grayScaleBlack90 px-12 py-16 text-grayScaleWhite",
  },
};

// 중복확인 버튼 (비활성화)
export const DuplicateCheckButtonDisabled: Story = {
  args: {
    label: "중복확인",
    onClick: () => console.log("중복확인 버튼 클릭"),
    disabled: true,
    isLoading: false,
    className: "bg-grayScaleBlack80 px-12 py-16 text-grayScaleBlack50",
  },
};
