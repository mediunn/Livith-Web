import { useEffect, useState } from "react";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import RecentSearch from "../features/search/ui/RecentSearch";
import RecommendSearch from "../features/search/ui/RecommendSearch";

function SearchPage() {
  const [input, setInput] = useState<string>("");
  const [recent, setRecent] = useState<string[]>([]);
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
      />

      {!input && recent.length > 0 && (
        <RecentSearch value={recent} setValue={setRecent} />
      )}
      {input.trim() && <RecommendSearch />}
    </>
  );
}
export default SearchPage;
