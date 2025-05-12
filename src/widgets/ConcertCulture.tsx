import { useParams } from "react-router-dom";
import ConcertCultureCarousel from "../features/concert/ui/ConcertCultureCarousel";
import EmptyConcertCulture from "../shared/ui/EmptyConcertCulture";

function ConcertCulture() {
  const { concertId } = useParams<{ concertId: string }>();

  return (
    <div className="w-full ml-16 pr-32">
      <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-30 mb-14">
        해당 공연 문화
      </p>
      <ConcertCultureCarousel concertId={Number(concertId)} />
      {/* <EmptyConcertCulture /> */}
    </div>
  );
}

export default ConcertCulture;
