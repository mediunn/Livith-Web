import { StateWithSetter } from "../../../shared/types/props";
import { saveRecentSearch } from "../utils/saveRecentSearch";

type RecommendSearchItemProps = {
  word: string;
  inputState: StateWithSetter<string>;
  recentState: StateWithSetter<string[]>;
  showResultsState: StateWithSetter<boolean>;
};
function RecommendSearchItem({
  word,

  inputState,
  recentState,
  showResultsState,
}: RecommendSearchItemProps) {
  const { value: input, setValue: setInput } = inputState;
  const { value: recent, setValue: setRecent } = recentState;
  const { value: showResults, setValue: setShowResults } = showResultsState;
  const index = word.toLowerCase().indexOf(input.toLowerCase());

  const before = word.slice(0, index);
  const match = word.slice(index, index + input.length);
  const after = word.slice(index + input.length);

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
    <p
      className="text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR mb-24 cursor-pointer"
      onClick={handleAddRecent}
    >
      {before}
      <strong className="text-grayScaleBlack5 font-bold">{match}</strong>
      {after}
    </p>
  );
}

export default RecommendSearchItem;
