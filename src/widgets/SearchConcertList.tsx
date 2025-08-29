import { useEffect, useState } from "react";
import SectionConcertSlide from "../entities/concert/ui/SectionConcertSlide";
import { SectionConcert } from "../entities/concert/types";
import { getSearchConcertList } from "../features/concert/api/getSearchConcertList";

type SearchConcertListProps = {
  id: number;
};

function SearchConcertList({ id }: SearchConcertListProps) {
  const [concerts, setConcerts] = useState<SectionConcert[]>([]);
  const [sectionTitle, setSectionTitle] = useState("");

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const data = await getSearchConcertList();

        // 전달받은 id와 일치하는 섹션 찾기
        const section = data.find((section) => section.id === id);

        if (section) {
          setConcerts(section.concerts);
          setSectionTitle(section.sectionTitle);
        } else {
          setConcerts([]);
          setSectionTitle("");
        }
      } catch (error) {
        console.error("탐색 섹션 목록 조회 실패:", error);
        setConcerts([]);
        setSectionTitle("");
      }
    };

    fetchConcerts();
  }, [id]);

  if (!concerts.length) return null;

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <p className="mt-30 mb-20 ml-16 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          {sectionTitle}
        </p>
      </div>
      <SectionConcertSlide concerts={concerts} />
    </div>
  );
}

export default SearchConcertList;
