import ConcertCardListSkeleton from "../features/concert/ui/ConcertCardListSkeleton";
import SectionConcertSlide from "../entities/concert/ui/SectionConcertSlide";
import { useHomeConcertList } from "../features/concert/model/useHomeConcertList";

function PopularConcert() {
  const { data, isLoading } = useHomeConcertList();

  return (
    <div>
      <div className="flex item-center justify-between w-full">
        <p className="mt-30 mb-20 ml-16 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          {data?.sectionTitle || ""}
        </p>
      </div>
      {isLoading ? (
        <div className="mx-16">
          <ConcertCardListSkeleton num={3} />
        </div>
      ) : (
        <SectionConcertSlide
          concerts={data?.concerts || []}
          onClick={() => {
            window.amplitude.track("click_concert_cell_main");
          }}
        />
      )}
    </div>
  );
}

export default PopularConcert;
