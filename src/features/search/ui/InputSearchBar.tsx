import SearchIcon from "../../../shared/assets/SearchIcon.tsx";
import BackArrow from "../../../widgets/BackArrow.tsx";
import CloseRoundIcon from "../../../shared/assets/CloseRoundIcon.svg";
import { useState } from "react";
import { StateWithSetter } from "../../../shared/types/props.ts";

type InputSearchBarProps = {
  inputState: StateWithSetter<string>;
  recentState: StateWithSetter<string[]>;
};
const STORAGE_KEY = "recentSearches";
const MAX_RECENT = 5; // 최대 최근 검색어 개수

function InputSearchBar({
  inputState: { value: input, setValue: setInput },
  recentState: { value: recent, setValue: setRecent },
}: InputSearchBarProps) {
  // 한글 입력 시 Enter 키 이벤트가 두 번 발생하는 문제 해결
  const [isComposing, setIsComposing] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing && input.trim()) {
      let updated = [
        input.trim(),
        ...recent.filter((item) => item !== input.trim()),
      ];

      if (updated.length > MAX_RECENT) {
        updated = updated.slice(0, MAX_RECENT);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setRecent(updated);
      setInput("");
    }
  };
  return (
    <div className="flex pt-13 pb-12 pl-16 pr-16">
      <BackArrow />
      <div className="flex items-center relative w-full ml-2 py-7 pl-16 bg-grayScaleWhite rounded-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.trim())}
          onKeyDown={handleKeyDown}
          placeholder="찾고 있는 콘서트는 무엇인가요?"
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          className="w-full my-9 text-grayScaleBlack80 text-body-sm font-regular font-NotoSansKR border-none outline-none"
        />
        {input ? (
          <img
            src={CloseRoundIcon}
            alt="삭제 아이콘"
            className="mr-16 cursor-pointer"
            onClick={() => setInput("")}
          />
        ) : (
          <SearchIcon color="black" />
        )}
      </div>
    </div>
  );
}

export default InputSearchBar;
