import { StateWithSetter } from "../../../shared/types/props";
import RecentSearchItem from "./RecentSearchItem";

type RecentSearchProps = {
  inputState: StateWithSetter<string>;
  recentState: StateWithSetter<string[]>;
  showResultsState: StateWithSetter<boolean>;
};
function RecentSearch({
  inputState: { value: input, setValue: setInput },
  recentState: { value: recent, setValue: setRecent },
  showResultsState: { value: showResults, setValue: setShowResults },
}: RecentSearchProps) {
  return (
    <div className="px-16">
      <p className="text-grayScaleBlack5 text-Body2-md font-medium font-NotoSansKR mt-21 mb-13">
        최근 검색 기록
      </p>
      {/* 줄 바꿈 함 (넘치면 다음 줄로 감) */}
      <div className="flex flex-wrap gap-8">
        {recent.map((word, index) => (
          <RecentSearchItem
            key={index}
            word={word}
            recentState={{ value: recent, setValue: setRecent }}
            inputState={{ value: input, setValue: setInput }}
            showResultsState={{ value: showResults, setValue: setShowResults }}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentSearch;
