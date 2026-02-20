import { Meta, StoryObj } from "@storybook/react-vite";
import SetlistSongItem from "./SetlistSongItem";

const meta: Meta<typeof SetlistSongItem> = {
  title: "one-time-btn/btn_trackcard",
  component: SetlistSongItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[300px] ">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SetlistSongItem>;

export const Default: Story = {
  args: {
    title: "노래 제목",
    artist: "아티스트 이름",
    orderIndex: 1,
  },
};
