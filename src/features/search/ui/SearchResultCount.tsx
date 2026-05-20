import { useSearchResult } from "../model/useSearchResult";

function SearchResultCount({ keyword }: { keyword: string }) {
  const { data } = useSearchResult({ keyword });
  return (
    <p className="text-grayScaleBlack5 text-Body2-md font-medium font-NotoSansKR">
      검색 결과
      <span className="text-mainYellow30"> {data?.totalCount}건</span>의 정보가
      있어요
    </p>
  );
}

export default SearchResultCount;
