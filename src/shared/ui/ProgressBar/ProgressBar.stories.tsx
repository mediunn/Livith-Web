import { Meta, StoryObj } from "@storybook/react-vite";
import ProgressBar from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Progress_bar/Progress_bar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    //0부터 5까지의 숫자 중에서 선택할 수 있도록 설정
    total: {
      control: { type: "number", min: 2, max: 4, step: 1 },
    },
    current: {
      control: { type: "number", min: 1, max: 4, step: 1 },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-414">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    total: 4,
    current: 1,
  },
};
