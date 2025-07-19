import { useEffect, useState } from "react";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import RecentSearch from "../features/search/ui/RecentSearch";
import RecommendSearch from "../features/search/ui/RecommendSearch";
import SearchResults from "../features/search/ui/SearchResult";
import SearchResultCount from "../features/search/ui/SearchResultCount";

function SearchPage() {
  const [input, setInput] = useState<string>("");
  const [recent, setRecent] = useState<string[]>([]);
  // 검색 결과를 보여줄지 여부
  const [showResults, setShowResults] = useState(false);
  const STORAGE_KEY = "recentSearches";

  // 처음 렌더링 시 localStorage에서 불러오기
  useEffect(() => {
    const recentSearch = localStorage.getItem(STORAGE_KEY);
    if (recentSearch) {
      setRecent(JSON.parse(recentSearch));
    }
  }, []);

  return (
    <div className="pb-90 ">
      <div className="sticky top-0 z-50 bg-grayScaleBlack100">
        <InputSearchBar
          inputState={{ value: input, setValue: setInput }}
          recentState={{ value: recent, setValue: setRecent }}
          showResultsState={{ value: showResults, setValue: setShowResults }}
        />

        {/* 검색 결과 개수 표시 */}
        {showResults && input && (
          <div className="px-16 py-24 sticky top-[72px] bg-grayScaleBlack100 z-40">
            {/* height만큼 top 값을 줘야 아래에서 겹치지 않음 */}
            <SearchResultCount keyword={input} />
          </div>
        )}
      </div>
      {showResults && input ? (
        <SearchResults keyword={input} />
      ) : (
        <>
          {!input && recent.length > 0 && (
            <RecentSearch
              inputState={{ value: input, setValue: setInput }}
              recentState={{ value: recent, setValue: setRecent }}
              showResultsState={{
                value: showResults,
                setValue: setShowResults,
              }}
            />
          )}
          {input.trim() && (
            <RecommendSearch
              inputState={{ value: input, setValue: setInput }}
              recentState={{ value: recent, setValue: setRecent }}
              showResultsState={{
                value: showResults,
                setValue: setShowResults,
              }}
            />
          )}
        </>
      )}
    </div>
  );
}
export default SearchPage;
