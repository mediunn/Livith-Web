import type { Meta, StoryObj } from "@storybook/react";
import ConcertMoreBtn from "./ConcertMoreBtn";
import ConcertAddIcon from "../assets/ConcertAddIcon.svg";
import ConcertTicketArrowIcon from "../assets/ConcertTicketArrowIcon.svg";

const meta: Meta<typeof ConcertMoreBtn> = {
  title: "btn/btn_concertmore",
  component: ConcertMoreBtn,
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
  args: {
    onClick: () => alert("clicked"),
  },
};

export default meta;

type Story = StoryObj<typeof ConcertMoreBtn>;

export const InterestConcertSet: Story = {
  args: {
    label: "관심 콘서트 설정하기",
    icon: ConcertAddIcon,
    right: 16,
    top: 0,
    iconPosition: "left",
  },
};

export const MoreConcertInfo: Story = {
  args: {
    label: "더 많은 정보 확인하기",
    icon: ConcertTicketArrowIcon,
    right: 39,
    top: 157,
    iconPosition: "right",
  },
};
