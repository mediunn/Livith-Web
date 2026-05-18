import { StateWithSetter } from "../../../shared/types/props.ts";
import BackArrow from "../../../shared/ui/BackArrow";
import SearchInputField from "../../../shared/ui/InputField/SearchInputField.tsx";
import { saveRecentSearch } from "../utils/saveRecentSearch";

type InputSearchBarProps = {
  inputState: StateWithSetter<string>;
  recentState?: StateWithSetter<string[]>;
  showAllState?: StateWithSetter<boolean>;
  showResultsState: StateWithSetter<boolean>;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
};

function InputSearchBar({
  inputState: { value: input, setValue: setInput },
  recentState,
  showAllState,
  showResultsState: { value: showResults, setValue: setShowResults },
  placeholder,
  onBlur,
  onFocus,
}: InputSearchBarProps) {
  const recent = recentState?.value;
  const setRecent = recentState?.setValue;
  const showAll = showAllState?.value;
  const setShowAll = showAllState?.setValue;

  const handleEnter = () => {
    if (input.trim()) {
      //최근 검색어 있을 때만 저장
      if (recentState && recent && setRecent) {
        let updated = saveRecentSearch({
          keyword: input.trim(),
          current: recent,
        });
        setRecent(updated);
      }
      setShowResults(true);
    }
  };

  const handleFocus = () => {
    setShowResults(false);
    setShowAll?.(true); // 포커스 시 전체 콘서트 목록 표시
    onFocus?.();
  };

  const handleBlur = () => {
    setShowAll?.(true);
    onBlur?.();
  };

  const handleChange = (value: string) => {
    setInput(value);
    // 입력값이 있으면 검색 결과 표시, 없으면 숨김
    if (value.trim()) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <div className="bg-grayScaleBlack100 max-w-md w-full flex pt-12 pb-13">
      {recent && setRecent && <BackArrow />}
      <div className="ml-2 w-full">
        <SearchInputField
          value={input}
          onChange={handleChange}
          onEnter={handleEnter}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputSearchBar;
