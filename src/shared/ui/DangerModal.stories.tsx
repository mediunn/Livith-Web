import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import DangerModal from "./DangerModal";

const meta: Meta<typeof DangerModal> = {
  title: "Modal/DangerModal",
  component: DangerModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[375px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof DangerModal>;

const ModalWrapper = (
  props: Omit<React.ComponentProps<typeof DangerModal>, "isOpen" | "onClose">
) => {
  const [open, setOpen] = useState(true);

  return (
    <DangerModal {...props} isOpen={open} onClose={() => setOpen(false)} />
  );
};

// 관심 콘서트 삭제 스토리
export const DeleteInterestConcert: Story = {
  render: () => (
    <ModalWrapper
      title={
        <>
          관심 콘서트를 삭제하시나요? <br /> 다시 언제든 지정할 수 있어요.
        </>
      }
      primaryLabel="지금은 삭제할래요"
      secondaryLabel="잘못 눌렀어요"
      onPrimary={() => alert("관심 콘서트 삭제")}
    />
  ),
};

// 댓글 삭제 스토리
export const DeleteComment: Story = {
  render: () => (
    <ModalWrapper
      title="댓글을 삭제하시겠어요?"
      primaryLabel="지금은 삭제할래요"
      secondaryLabel="잘못 눌렀어요"
      onPrimary={() => alert("댓글 삭제")}
    />
  ),
};

// 댓글 신고 스토리
export const ReportComment: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <ModalWrapper
        title="댓글을 신고하시겠어요?"
        primaryLabel="신고할래요"
        secondaryLabel="잘못 눌렀어요"
        primaryDisabled={!value.length}
        onPrimary={() => alert(`신고 사유: ${value}`)}
      >
        <div className="relative mx-16 mt-20">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="신고 사유를 작성해 주세요"
            className="h-172 w-full px-14 pt-14 pb-30 resize-none rounded-6 bg-grayScaleBlack5 text-grayScaleBlack80 text-Body3-md font-medium font-NotoSansKR
              placeholder:text-grayScaleBlack50
              border border-transparent
              focus:border focus:border-grayScaleBlack30
              outline-none"
          />
          <div className="absolute bottom-5 left-1 h-30 w-[94%] rounded-6 bg-grayScaleBlack5">
            <p className="absolute bottom-14 right-0 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
              {value.length}/200
            </p>
          </div>
        </div>
      </ModalWrapper>
    );
  },
};
