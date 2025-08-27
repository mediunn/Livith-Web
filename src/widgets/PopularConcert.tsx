import { useEffect, useState } from "react";
import ConcertSlide from "../entities/concert/ui/ConcertSlide";
import { ConcertFilter, Concert } from "../entities/concert/types";
import { getConcertList } from "../features/concert/api/getConcertList";

// 추후 최신 콘서트 목록 api 대신 인기 콘서트 api로 수정

function PopularConcert() {
  const [concerts, setConcerts] = useState<Concert[] | null>(null);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await getConcertList({
          filter: ConcertFilter.NEW,
          size: 10,
        });
        setConcerts(res.data.data);
      } catch (error) {
        console.error("콘서트 목록 조회 API 호출 실패:", error);
        setConcerts([]);
      }
    };

    fetchConcerts();
  }, []);

  if (concerts === null) {
    return null;
  }

  return (
    <div>
      <div className="flex item-center justify-between w-full">
        <p className="mt-30 mb-20 ml-16 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          이달의
          <br />
          인기 콘서트
        </p>
      </div>
      <ConcertSlide filter={ConcertFilter.NEW} concerts={concerts} />
    </div>
  );
}

export default PopularConcert;
