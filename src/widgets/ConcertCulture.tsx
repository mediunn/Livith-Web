import ConcertCultureCarousel from "../features/ConcertCultureCarousel";
import EmptyConcertCulture from "../shared/ui/EmptyConcertCulture";

function ConcertCulture() {
  return (
    <div className="w-375 ml-16">
      <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-30 mb-14">
        해당 공연 문화
      </p>
      <ConcertCultureCarousel />
      {/* <EmptyConcertCulture /> */}
    </div>
  );
}

export default ConcertCulture;
