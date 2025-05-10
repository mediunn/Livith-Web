const STORAGE_KEY = "recentSearches";
const MAX_RECENT = 5;

interface saveRecentSearchProps {
  keyword: string;
  current: string[];
}

export function saveRecentSearch({ keyword, current }: saveRecentSearchProps) {
  let updated = [keyword, ...current.filter((item) => item !== keyword)];

  if (updated.length > MAX_RECENT) {
    updated = updated.slice(0, MAX_RECENT);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}
