import { Meta } from "@storybook/react-vite";

const meta: Meta = {
  title: "One-time-btn/btn_profile_change",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = () => {
  return (
    <button className="hover:bg-grayScaleBlack90 px-12 py-6 bg-grayScaleBlack80 rounded-17 text-grayScaleBlack5 text-Body4-md font-medium font-NotoSansKR">
      닉네임 수정
    </button>
  );
};
