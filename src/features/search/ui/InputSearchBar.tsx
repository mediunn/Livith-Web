import SearchIcon from "../../../shared/assets/SearchIcon.tsx";
import BackArrow from "../../../widgets/BackArrow.tsx";
import CloseRoundIcon from "../../../shared/assets/CloseRoundIcon.svg";
import { useRef, useState } from "react";
import { StateWithSetter } from "../../../shared/types/props.ts";
import { saveRecentSearch } from "../utils/saveRecentSearch.ts";

type InputSearchBarProps = {
  inputState: StateWithSetter<string>;
  recentState: StateWithSetter<string[]>;
  showResultsState: StateWithSetter<boolean>;
};

function InputSearchBar({
  inputState: { value: input, setValue: setInput },
  recentState: { value: recent, setValue: setRecent },
  showResultsState: { value: showResults, setValue: setShowResults },
}: InputSearchBarProps) {
  // 한글 입력 시 Enter 키 이벤트가 두 번 발생하는 문제 해결
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing && input.trim()) {
      let updated = saveRecentSearch({
        keyword: input.trim(),
        current: recent,
      });
      setRecent(updated);
      setShowResults(true);
      inputRef.current?.blur(); // Enter 입력 후 포커스 해제
    }
  };

  return (
    <div className="flex pt-13 pb-12 pl-16 pr-16">
      <BackArrow />
      <div className="flex items-center relative w-full ml-2 py-7 pl-16 bg-grayScaleWhite rounded-10">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onFocus={() => setShowResults(false)}
          onChange={(e) => {
            setInput(e.target.value);
            setShowResults(false); // 입력값이 바뀌면 검색결과 숨김
          }}
          onKeyDown={handleKeyDown}
          placeholder="찾고 있는 콘서트는 무엇인가요?"
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          className="w-full my-9 text-grayScaleBlack80 text-body-sm font-regular font-NotoSansKR border-none outline-none"
        />
        {input && !showResults ? (
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
