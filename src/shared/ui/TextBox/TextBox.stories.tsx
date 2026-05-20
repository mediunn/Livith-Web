import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import TextBox from "./TextBox";

const meta: Meta<typeof TextBox> = {
  title: "inputfield & textbox/textbox",
  component: TextBox,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextBox>;

function useScrollableText(maxLength: number) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isScrollable, setIsScrollable] = useState(false);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(false);

  const handleScroll = () => {
    const el = textareaRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    setIsScrollable(scrollHeight > clientHeight);
    setShowTopGradient(scrollTop > 4);
    setShowBottomGradient(scrollTop + clientHeight < scrollHeight - 4);
  };

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, [value]);

  return {
    textareaRef,
    value,
    setValue,
    showGradients: {
      isScrollable,
      showTopGradient,
      showBottomGradient,
    },
  };
}

export const Comment: Story = {
  render: () => {
    const maxLength = 200;
    const { textareaRef, value, setValue, showGradients } =
      useScrollableText(maxLength);

    return (
      <div className="w-294 ">
        <TextBox
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="신고 사유를 작성해 주세요"
          maxLength={maxLength}
          height="h-172"
          variant="light"
          enforceMaxLength={false}
          showGradients={showGradients}
        />
      </div>
    );
  },
};

export const Withdraw: Story = {
  render: () => {
    const maxLength = 200;
    const { textareaRef, value, setValue, showGradients } =
      useScrollableText(maxLength);

    return (
      <div className="w-319 ">
        <TextBox
          ref={textareaRef}
          value={value}
          onChange={(e) =>
            setValue(
              e.target.value.length <= 220
                ? e.target.value
                : e.target.value.slice(0, 220)
            )
          }
          placeholder="10자 이상의 사유를 작성해 주세요"
          variant="dark"
          height="h-206"
          maxLength={maxLength}
          showGradients={showGradients}
        />
      </div>
    );
  },
};
