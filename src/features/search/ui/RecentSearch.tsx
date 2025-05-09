import RecentSearchItem from "./RecentSearchItem";

function RecentSearch() {
  return (
    <div className="px-16">
      <p className="text-grayScaleBlack5 text-caption-sm font-regular font-NotoSansKR mt-21 mb-13">
        최근 검색 기록
      </p>
      {/* 줄 바꿈 함 (넘치면 다음 줄로 감) */}
      <div className="flex flex-wrap gap-8">
        <RecentSearchItem word="콜드플레이" />
        <RecentSearchItem word="오아시스" />
        <RecentSearchItem word="아이묭" />
        <RecentSearchItem word="루이스 오프만" />
        <RecentSearchItem word="라우브" />
      </div>
    </div>
  );
}

export default RecentSearch;
