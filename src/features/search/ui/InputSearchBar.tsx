import SearchIcon from "../../../shared/assets/SearchIcon.tsx";
import BackArrow from "../../../widgets/BackArrow.tsx";
import CloseRoundIcon from "../../../shared/assets/CloseRoundIcon.svg";
import { useRef, useState } from "react";
import { StateWithSetter } from "../../../shared/types/props.ts";
import { saveRecentSearch } from "../utils/saveRecentSearch.ts";

type InputSearchBarProps = {
  inputState: StateWithSetter<string>;
  recentState?: StateWithSetter<string[]>;
  showAllState?: StateWithSetter<boolean>;
  showResultsState: StateWithSetter<boolean>;
};

function InputSearchBar({
  inputState: { value: input, setValue: setInput },
  recentState,
  showAllState,
  showResultsState: { value: showResults, setValue: setShowResults },
}: InputSearchBarProps) {
  const recent = recentState?.value;
  const setRecent = recentState?.setValue;
  const showAll = showAllState?.value;
  const setShowAll = showAllState?.setValue;

  // 한글 입력 시 Enter 키 이벤트가 두 번 발생하는 문제 해결
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing && input.trim()) {
      //최근 검색어 있을 때만 저장
      if (recentState && recent && setRecent) {
        let updated = saveRecentSearch({
          keyword: input.trim(),
          current: recent,
        });
        setRecent(updated);
      }
      setShowResults(true);
      inputRef.current?.blur(); // Enter 입력 후 포커스 해제
    }
  };

  return (
    <div className="bg-grayScaleBlack100 max-w-md w-full flex pt-13 pb-12 pl-16 pr-16 ">
      {recent && setRecent && <BackArrow />}
      <div className="flex items-center relative w-full ml-2 py-7 pl-16 bg-grayScaleBlack90 rounded-10">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onFocus={(e) => {
            setShowResults(false);
            setShowAll?.(false);
            e.currentTarget.placeholder = ""; // 포커스 시 placeholder 숨김
          }} // 포커스 시 검색 결과 숨김
          onBlur={() => {
            setShowAll?.(true);
          }} // 포커스 해제 시 전체 검색어 표시
          onChange={(e) => {
            setInput(e.target.value);
            setShowResults(false); // 입력값이 바뀌면 검색결과 숨김
          }}
          onKeyDown={handleKeyDown}
          placeholder="찾고 있는 콘서트나 가수를 검색하세요"
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          className="w-full my-9 text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR border-none outline-none bg-transparent placeholder-grayScaleBlack50"
        />
        {input && !showResults ? (
          <img
            src={CloseRoundIcon}
            alt="삭제 아이콘"
            className="mr-16 cursor-pointer"
            onClick={() => {
              setInput("");
              inputRef.current?.focus(); // 다시 포커스 줘서 커서 유지
            }}
          />
        ) : (
          <div className="mr-11">
            <SearchIcon color="#DBDCDF" />
          </div>
        )}
      </div>
    </div>
  );
}

export default InputSearchBar;
