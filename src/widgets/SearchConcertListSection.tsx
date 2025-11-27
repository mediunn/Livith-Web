import ConcertCardListSkeleton from "../features/concert/ui/ConcertCardListSkeleton";
import SectionConcertSlide from "../entities/concert/ui/SectionConcertSlide";
import { SearchSection } from "../features/concert/api/getSearchConcertListSection";

type SearchConcertListSectionProps = {
  section: SearchSection;
  isLoading: boolean;
  onClick?: () => void;
};

function SearchConcertListSection({
  section,
  isLoading,
  onClick,
}: SearchConcertListSectionProps) {
  if (isLoading || !section.concerts || !section.concerts.length) return null;
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <p className="mt-30 mb-20 ml-16 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          {section.sectionTitle}
        </p>
      </div>
      {isLoading ? (
        <div className="mx-16">
          <ConcertCardListSkeleton num={3} />
        </div>
      ) : (
        <SectionConcertSlide concerts={section.concerts} onClick={onClick} />
      )}
    </div>
  );
}

export default SearchConcertListSection;
