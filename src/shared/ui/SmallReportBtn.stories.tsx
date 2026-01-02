import type { Meta, StoryObj } from "@storybook/react";
import SmallReportBtn from "./SmallReportBtn";

const meta: Meta<typeof SmallReportBtn> = {
  title: "btn/btn_small_report",
  component: SmallReportBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SmallReportBtn>;

export const DeleteAndReport: Story = {
  render: () => (
    <div className="flex gap-12">
      <SmallReportBtn
        label="삭제"
        variant="my"
        onClick={() => alert("삭제 클릭")}
      />
      <SmallReportBtn
        label="신고"
        variant="not"
        onClick={() => alert("신고 클릭")}
      />
    </div>
  ),
};

export const ArtistInfoReport: Story = {
  args: {
    label: "정보 제보",
    onClick: () => alert("정보 제보 클릭"),
    className: "border border-solid border-grayScaleBlack80",
  },
};
