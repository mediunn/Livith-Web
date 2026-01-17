import SearchIcon from "../../assets/SearchIcon.tsx";
import CloseRoundIcon from "../../assets/CloseRoundIcon.svg";
import { useRef, useState } from "react";

type SearchInputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
};

function SearchInputField({
  value,
  onChange,
  onEnter,
  onFocus,
  onBlur,
  placeholder,
}: SearchInputFieldProps) {
  const [isComposing, setIsComposing] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(
    placeholder || ""
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing && value.trim() && onEnter) {
      onEnter();
      inputRef.current?.blur();
    }
  };

  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex items-center relative w-full py-7 pl-16 bg-grayScaleBlack90 rounded-10">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onFocus={(e) => {
          onFocus?.();
          setCurrentPlaceholder(""); // 포커스 시 placeholder 숨김
        }}
        onBlur={() => {
          onBlur?.();
          setCurrentPlaceholder(placeholder || ""); // blur 시 원래 placeholder로 복원
        }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder={currentPlaceholder}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        className="w-full my-9 text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR border-none outline-none bg-transparent placeholder-grayScaleBlack50"
      />
      {value ? (
        <img
          src={CloseRoundIcon}
          className="mr-16 cursor-pointer"
          onClick={handleClear}
        />
      ) : (
        <div className="mr-11">
          <SearchIcon color="#DBDCDF" />
        </div>
      )}
    </div>
  );
}

export default SearchInputField;
