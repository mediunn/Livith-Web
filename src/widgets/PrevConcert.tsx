import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConcertSlide from "../features/ConcertSlide";
import ConcertRightArrow from "../shared/assets/ConcertRightArrow.svg";
import { ConcertStatus, Concert } from "../entities/concert/types";
import { getConcertList } from "../features/concert/api/getConcertList";

function PrevConcert() {
  const [concerts, setConcerts] = useState<Concert[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await getConcertList({
          status: ConcertStatus.COMPLETED,
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
    <div className="pb-92">
      <div className="flex item-center justify-between w-full">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-30 mb-19 ml-16">
          한 달 이내 진행했던 콘서트
        </p>
        {concerts.length > 0 && (
          <button
            className="w-24 h-24 bg-transparent border-none p-0 mt-30 mr-16 cursor-pointer"
            onClick={() => navigate(`/concerts/${ConcertStatus.COMPLETED}`)}
          >
            <img src={ConcertRightArrow} className="w-full h-full" />
          </button>
        )}
      </div>
      <ConcertSlide status={ConcertStatus.COMPLETED} concerts={concerts} />
    </div>
  );
}

export default PrevConcert;
