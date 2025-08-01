import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConcertSlide from "../entities/concert/ui/ConcertSlide";
import { ConcertFilter, Concert } from "../entities/concert/types";
import { getConcertList } from "../features/concert/api/getConcertList";

function NewConcert() {
  const [concerts, setConcerts] = useState<Concert[] | null>(null);

  const navigate = useNavigate();

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
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-36 mb-19 ml-16">
          최근 추가된 콘서트
        </p>
      </div>
      <ConcertSlide filter={ConcertFilter.NEW} concerts={concerts} />
    </div>
  );
}

export default NewConcert;
