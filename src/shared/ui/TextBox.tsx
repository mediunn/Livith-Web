import { forwardRef, useState } from "react";

interface TextBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  enforceMaxLength?: boolean;
  height?: string;
  variant?: "light" | "dark";
  showGradients?: {
    isScrollable: boolean;
    showTopGradient: boolean;
    showBottomGradient: boolean;
  };
}

const TextBox = forwardRef<HTMLTextAreaElement, TextBoxProps>(
  (
    {
      value,
      onChange,
      placeholder = "내용을 입력해 주세요",
      maxLength = 200,
      enforceMaxLength = true,
      height = "h-206",
      variant = "dark",
      showGradients,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const isDark = variant === "dark";
    const bgColor = isDark ? "bg-grayScaleBlack80" : "bg-grayScaleBlack5";
    const textColor = isDark ? "text-grayScaleWhite" : "text-grayScaleBlack80";

    const isOverLimit = value.length > maxLength;

    const counterColor = isOverLimit
      ? "text-caution100"
      : isFocused
        ? isDark
          ? "text-grayScaleWhite"
          : "text-grayScaleBlack80"
        : "text-grayScaleBlack50";

    return (
      <div className="relative">
        <textarea
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...(enforceMaxLength && { maxLength })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`relative z-10 ${height} w-full px-14 pt-14 pb-30 resize-none overflow-y-auto rounded-6 ${bgColor} ${textColor} text-Body3-md font-medium font-NotoSansKR
            placeholder:text-grayScaleBlack50
            border border-transparent
            focus:border focus:border-grayScaleBlack30
            outline-none`}
        />

        {/* 그라데이션 */}
        {showGradients?.isScrollable && showGradients.showTopGradient && (
          <div className="pointer-events-none absolute top-0 left-0 h-30 w-[94%] bg-gradient-to-b from-grayScaleBlack5 to-transparent rounded-t-6" />
        )}
        {showGradients?.isScrollable && showGradients.showBottomGradient && (
          <div className="pointer-events-none absolute bottom-30 left-0 h-30 w-[94%] bg-gradient-to-t from-grayScaleBlack5 to-transparent rounded-b-6" />
        )}

        {/* 글자수 카운터 */}
        <div
          className={`absolute bottom-5 left-1 h-30 w-[94%] rounded-6 ${bgColor} z-20`}
        >
          <p
            className={`absolute bottom-8 right-8 ${counterColor} text-Body4-re font-regular font-NotoSansKR`}
          >
            {value.length}/{maxLength}
          </p>
        </div>
      </div>
    );
  }
);

TextBox.displayName = "TextBox";
export default TextBox;
