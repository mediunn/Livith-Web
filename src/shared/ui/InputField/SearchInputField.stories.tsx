import { Meta, StoryObj } from "@storybook/react";
import { useState, useRef, useEffect } from "react";
import SearchInputField from "./SearchInputField";

const meta: Meta<typeof SearchInputField> = {
  title: "inputfield & textbox/search",
  component: SearchInputField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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

type Story = StoryObj<typeof SearchInputField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <SearchInputField
        value={value}
        onChange={setValue}
        placeholder="검색어를 입력하세요"
        onEnter={() => console.log("Enter pressed with:", value)}
        onFocus={() => console.log("Input focused")}
        onBlur={() => console.log("Input blurred")}
      />
    );
  },
};

export const Enabled: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const input = containerRef.current?.querySelector("input");
      if (input) {
        input.focus();
      }
    }, []);

    return (
      <div ref={containerRef}>
        <SearchInputField
          value={value}
          onChange={setValue}
          placeholder="검색어를 입력하세요"
          onEnter={() => console.log("Enter pressed with:", value)}
          onFocus={() => console.log("Input focused")}
          onBlur={() => console.log("Input blurred")}
        />
      </div>
    );
  },
};

export const Finish: Story = {
  render: () => {
    const [value, setValue] = useState("완료");

    return (
      <SearchInputField
        value={value}
        onChange={setValue}
        placeholder="검색어를 입력하세요"
        onEnter={() => console.log("Search:", value)}
      />
    );
  },
};
