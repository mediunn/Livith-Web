import CardListSkeleton from "../shared/ui/CardSkeleton/CardListSkeleton";
import SectionConcertSlide from "../entities/concert/ui/SectionConcertSlide";
import type { HomeSection } from "../features/concert/api/getHomeConcertListSection";

interface HomeConcertListSectionProps {
  section: HomeSection;
  isLoading: boolean;
}

function HomeConcertListSection({
  section,
  isLoading,
}: HomeConcertListSectionProps) {
  return (
    <div>
      <div className="flex item-center justify-between w-full">
        <p className="mt-30 mb-20 ml-16 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          {section.sectionTitle}
        </p>
      </div>
      {isLoading ? (
        <div className="mx-16">
          <CardListSkeleton num={3} />
        </div>
      ) : (
        <SectionConcertSlide
          concerts={section.concerts || []}
          onClick={() => {
            window.amplitude.track("click_concert_cell_main");
          }}
        />
      )}
    </div>
  );
}

export default HomeConcertListSection;
