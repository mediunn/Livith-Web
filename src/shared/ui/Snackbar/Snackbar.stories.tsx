import { Meta, StoryObj } from "@storybook/react-vite";
import Snackbar from "./Snackbar";

const meta: Meta<typeof Snackbar> = {
  title: "Toast & Snackbar/snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    message: { control: { type: "text" } },
    onButtonClick: { action: "button clicked" },
    buttonMessage: { control: { type: "text" } },
  },
  decorators: [
    (Story) => (
      <div className="shadow-custom-toast rounded-8 bg-grayScaleBlack80 w-343 h-64 mt-[15%] mx-auto z-50 flex items-center px-16 relative">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

export const DefaultSnackbar: Story = {
  args: {
    message:
      "콘서트를 3개나 열람하셨네요!\n로그인 후 더 많은 기능을 이용해보세요",
    buttonMessage: "로그인",
  },
};
