import { Meta } from "@storybook/react-vite";
import DangerModalButton from "./DangerModalButton";

const meta: Meta<typeof DangerModalButton> = {
  title: "One-time-btn/btn_danger_modal",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: DangerModalButton,
  decorators: [
    (Story) => (
      <div className="flex gap-9 mt-20 px-16 min-h-58">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = () => {
  return (
    <div className="flex gap-12 w-80 ">
      <DangerModalButton label="삭제" onClick={() => alert("삭제 클릭됨")} />
    </div>
  );
};

export const WithTwoButtons = () => {
  return (
    <div className="flex gap-12 w-180">
      <DangerModalButton
        label="취소"
        variant="white"
        onClick={() => alert("취소 클릭됨")}
      />
      <DangerModalButton
        label="삭제"
        variant="black"
        onClick={() => alert("삭제 클릭됨")}
      />
    </div>
  );
};
