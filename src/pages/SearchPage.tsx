import { useEffect, useState } from "react";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import RecentSearch from "../features/search/ui/RecentSearch";
import RecommendSearch from "../features/search/ui/RecommendSearch";
import SearchResults from "../features/search/ui/SearchResult";

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
    <>
      <InputSearchBar
        inputState={{ value: input, setValue: setInput }}
        recentState={{ value: recent, setValue: setRecent }}
        showResultsState={{ value: showResults, setValue: setShowResults }}
      />

      {showResults ? (
        <SearchResults keyword={input} />
      ) : (
        <>
          {!input && recent.length > 0 && (
            <RecentSearch value={recent} setValue={setRecent} />
          )}
          {input.trim() && (
            <RecommendSearch value={input} setValue={setInput} />
          )}
        </>
      )}
    </>
  );
}
export default SearchPage;
