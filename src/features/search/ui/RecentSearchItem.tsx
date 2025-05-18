import CloseIcon from "../../../shared/assets/CloseIcon.svg";
import { StateWithSetter } from "../../../shared/types/props";
import { saveRecentSearch } from "../utils/saveRecentSearch";

interface RecentSearchItemProps {
  word: string;
  recentState: StateWithSetter<string[]>;
  inputState: StateWithSetter<string>;
  showResultsState: StateWithSetter<boolean>;
}

const STORAGE_KEY = "recentSearches";

function RecentSearchItem({
  word,
  recentState,
  inputState,
  showResultsState,
}: RecentSearchItemProps) {
  const { value: recent, setValue: setRecent } = recentState;
  const { value: input, setValue: setInput } = inputState;
  const { value: showResults, setValue: setShowResults } = showResultsState;

  const handleDeleteRecent = () => {
    let updated = recent.filter((item) => item !== word);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setRecent(updated);
  };

  const handleAddRecent = () => {
    let updated = saveRecentSearch({
      keyword: word,
      current: recent,
    });
    setRecent(updated);
    setInput(word);
    setShowResults(true);
  };

  return (
    <div
      className="w-fit border-1 border-solid border-grayScaleBlack30 rounded-26 flex items-center px-10 py-3 cursor-pointer"
      onClick={() => handleAddRecent()}
    >
      <p className="text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR mr-4 ">
        {word}
      </p>
      <img
        src={CloseIcon}
        alt="삭제 아이콘"
        onClick={(e) => {
          e.stopPropagation(); // 부모 onClick 실행 막기
          handleDeleteRecent();
        }}
      />
    </div>
  );
}

export default RecentSearchItem;
