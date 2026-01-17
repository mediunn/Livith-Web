import { Meta, StoryObj } from "@storybook/react-vite";
import CardSkeleton from "./CardSkeleton";

const meta: Meta<typeof CardSkeleton> = {
  title: "Skeleton/card_skeleton",
  component: CardSkeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-108">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardSkeleton>;

export const Default: Story = {
  render: () => <CardSkeleton />,
};
