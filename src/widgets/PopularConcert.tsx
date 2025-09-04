import { useEffect, useState } from "react";
import SectionConcertSlide from "../entities/concert/ui/SectionConcertSlide";
import { SectionConcert } from "../entities/concert/types";
import { getHomeConcertList } from "../features/concert/api/getHomeConcertList";

function PopularConcert() {
  const [concerts, setConcerts] = useState<SectionConcert[] | null>(null);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const data = await getHomeConcertList();

        // id === 1 (이 달의 인기 콘서트)
        const popularSection = data.find((section) => section.id === 1);

        if (popularSection) {
          setConcerts(popularSection.concerts);
        } else {
          setConcerts([]);
        }
      } catch (error) {
        console.error("홈 섹션 콘서트 목록 조회 실패:", error);
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
      <SectionConcertSlide
        concerts={concerts}
        onClick={() => {
          window.amplitude.track("click_concert_cell_main");
        }}
      />
    </div>
  );
}

export default PopularConcert;
