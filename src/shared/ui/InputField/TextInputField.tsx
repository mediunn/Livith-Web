import { useRef, useState, useEffect } from "react";
import CloseRoundedIcon from "../../assets/CloseRoundIcon.svg";
import { validateNickname } from "../../utils/validateNickname";

type TextInputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onValidationChange?: (isValid: boolean) => void;
  onCheckStateChange?: (isChecked: boolean) => void;
  onMessageChange?: (message: string) => void;
  placeholder?: string;
  maxLength?: number;
  className?: string;
};

export default function TextInputField({
  value,
  onChange,
  onValidationChange,
  onCheckStateChange,
  onMessageChange,
  placeholder = "예시 ) 홍길동",
  maxLength = 10,
  className = "",
}: TextInputFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const [isComposing, setIsComposing] = useState(false);

  useEffect(() => {
    setShowClear(value.length > 0 && isFocused);
  }, [value, isFocused]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing && value.trim()) {
      inputRef.current?.blur();
    }
  };

  const handleClear = () => {
    onChange("");
    onValidationChange?.(false);
    onCheckStateChange?.(false);
    onMessageChange?.(`${maxLength}자리 이내, 문자/숫자로 입력 가능해요`);
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    onCheckStateChange?.(false);

    if (newValue) {
      const { isValid, message } = validateNickname(newValue);
      onValidationChange?.(isValid);
      onMessageChange?.(message);
    } else {
      onValidationChange?.(false);
      onMessageChange?.(`${maxLength}자리 이내, 문자/숫자로 입력 가능해요`);
    }
  };

  return (
    <div
      className={`flex flex-1 items-center px-12 rounded-10 bg-grayScaleBlack90 ${
        isFocused
          ? "border border-grayScaleBlack50"
          : "border border-transparent"
      } ${className}`}
    >
      <input
        value={value}
        ref={inputRef}
        onFocus={(e) => {
          setIsFocused(true);
          e.currentTarget.placeholder = "";
        }}
        onBlur={(e) => {
          setIsFocused(false);
          if (!value) {
            e.currentTarget.placeholder = placeholder;
            onMessageChange?.(
              `${maxLength}자리 이내, 문자/숫자로 입력 가능해요`
            );
          }
        }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        className="my-15 w-full border-none outline-none bg-transparent placeholder-grayScaleBlack50 text-grayScaleWhite"
      />
      <p className="text-Caption1-re text-grayScaleBlack50 font-regular font-NotoSansKR ml-12">
        {value.length}/{maxLength}
      </p>
      {showClear && (
        <img
          src={CloseRoundedIcon}
          className="ml-13 cursor-pointer"
          onMouseDown={(e) => {
            e.preventDefault();
            handleClear();
          }}
        />
      )}
    </div>
  );
}
