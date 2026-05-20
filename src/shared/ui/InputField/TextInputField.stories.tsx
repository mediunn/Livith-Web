import { Meta, StoryObj } from "@storybook/react";
import { useState, useRef, useEffect } from "react";
import TextInputField from "./TextInputField";

const meta: Meta<typeof TextInputField> = {
  title: "inputfield & textbox/text",
  component: TextInputField,
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

type Story = StoryObj<typeof TextInputField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [message, setMessage] = useState(
      "10자리 이내, 문자/숫자로 입력 가능해요"
    );

    return (
      <TextInputField
        value={value}
        onChange={setValue}
        onValidationChange={setIsValid}
        onCheckStateChange={setIsChecked}
        onMessageChange={setMessage}
        placeholder="입력창"
      />
    );
  },
};

export const Enabled: Story = {
  render: () => {
    const [value, setValue] = useState("활성화");
    const [isValid, setIsValid] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const input = containerRef.current?.querySelector("input");
      if (input) {
        input.focus();
      }
    }, []);

    return (
      <div ref={containerRef}>
        <TextInputField
          value={value}
          onChange={setValue}
          onValidationChange={setIsValid}
          onCheckStateChange={setIsChecked}
          placeholder="입력창"
        />
      </div>
    );
  },
};

export const Finish: Story = {
  render: () => {
    const [value, setValue] = useState("완료");
    const [isValid, setIsValid] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [message, setMessage] = useState("사용 가능한 닉네임입니다");

    return (
      <TextInputField
        value={value}
        onChange={setValue}
        onValidationChange={setIsValid}
        onCheckStateChange={setIsChecked}
        onMessageChange={setMessage}
        placeholder="입력창"
      />
    );
  },
};
