import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ConcertTabList, { ConcertTabItem } from "./ConcertTabList";

const meta: Meta = {
  title: "Tab/TabList",
  component: ConcertTabList,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1a1a1a" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    totalCount: {
      control: { type: "number", min: 0, max: 999 },
      description: "소통·댓글 탭의 댓글 개수",
      defaultValue: 0,
    },
  },
};

export default meta;
type Story = StoryObj<{ totalCount: number }>;

const Wrapper = ({
  tabs,
  initialValue = "1",
  totalCount,
  scrollable = false,
  stickyTop,
  minWidth,
}: {
  tabs: (totalCount: number) => ConcertTabItem[];
  initialValue?: string;
  totalCount: number;
  scrollable?: boolean;
  stickyTop?: number;
  minWidth?: string;
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <ConcertTabList
      tabs={tabs(totalCount)}
      value={value}
      onChange={(_, v) => setValue(v)}
      scrollable={scrollable}
      stickyTop={stickyTop}
      minWidth={minWidth}
    />
  );
};
export const ConcertInfoTabList: Story = {
  args: { totalCount: 0 },
  render: ({ totalCount }) => (
    <Wrapper
      totalCount={totalCount}
      scrollable
      stickyTop={0}
      tabs={(count) => [
        { label: "아티스트 상세", value: "1" },
        { label: "콘서트 상세", value: "2" },
        { label: "셋리스트", value: "3" },
        {
          label: (
            <div className="flex">
              <p>소통·댓글</p>
              <p className="pl-2 text-mainYellow30 text-Body2-sm font-semibold">
                {count}
              </p>
            </div>
          ),
          value: "4",
        },
      ]}
    />
  ),
};
export const ConcertSettingTabList: Story = {
  args: { totalCount: 0 },
  render: ({ totalCount }) => (
    <Wrapper
      totalCount={totalCount}
      minWidth="50%"
      tabs={() => [
        { label: "콘서트 일정", value: "1" },
        { label: "셋리스트", value: "2" },
      ]}
    />
  ),
};
