import SectionConcertSlide from "../entities/concert/ui/SectionConcertSlide";
import { useSearchConcertList } from "../features/concert/model/useSearchConcertList";

type SearchConcertListProps = {
  id: number;
  onClick?: () => void;
};

function SearchConcertList({ id }: SearchConcertListProps) {
  const { data, isLoading } = useSearchConcertList(id);

  if (isLoading || !data || !data.concerts.length) return null;
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <p className="mt-30 mb-20 ml-16 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          {data.sectionTitle}
        </p>
      </div>
      <SectionConcertSlide concerts={data.concerts} />
    </div>
  );
}

export default SearchConcertList;
