import { Meta, StoryObj } from "@storybook/react-vite";
import BtnPopupIn from "./BtnPopupIn";
import EditInterestConcertIcon from "../../../../shared/assets/EditIcon.svg";
import TrashCanIcon from "../../../../shared/assets/TrashCanIcon.svg";

const meta: Meta<typeof BtnPopupIn> = {
  title: "one-time-btn/btn_popup_in",
  component: BtnPopupIn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[350px] ">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BtnPopupIn>;

export const Default: Story = {
  args: {
    icon: EditInterestConcertIcon,
    label: "메인 콘서트 바꾸기",
  },
};

export const RedText: Story = {
  args: {
    icon: TrashCanIcon,
    label: "콘서트 삭제하기",
    color: "red",
  },
};
