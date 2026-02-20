import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import CommentInputField from "./CommentInputField";

const meta: Meta<typeof CommentInputField> = {
  title: "inputfield & textbox/comment",
  component: CommentInputField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-270 flex items-center flex-1 px-16 py-14 bg-grayScaleBlack90 rounded-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CommentInputField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <CommentInputField
        value={value}
        onChange={setValue}
        isLoggedIn={true}
        onRequireLogin={() => console.log("Login required")}
      />
    );
  },
};

export const Enabled: Story = {
  render: () => {
    const [value, setValue] = useState(" ");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const textarea = containerRef.current?.querySelector("textarea");
      if (textarea) {
        textarea.focus();
      }
    }, []);

    return (
      <div ref={containerRef}>
        <CommentInputField
          value={value}
          onChange={setValue}
          isLoggedIn={true}
          onRequireLogin={() => console.log("Login required")}
        />
      </div>
    );
  },
};

export const Finish: Story = {
  render: () => {
    const [value, setValue] = useState("완료");

    return (
      <CommentInputField
        value={value}
        onChange={setValue}
        isLoggedIn={true}
        onRequireLogin={() => console.log("Login required")}
      />
    );
  },
};
