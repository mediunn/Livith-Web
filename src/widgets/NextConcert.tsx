import { ConcertStatus } from "../entities/concert/types";
import EmptyConcertSlide from "../shared/ui/EmptyConcertSlide";

function NextConcert() {
  return (
    <div>
      <div className="flex item-center justify-between w-375">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-30 mb-19 ml-16">
          곧 진행하는 콘서트
        </p>
      </div>
      <EmptyConcertSlide status={ConcertStatus.UPCOMING} />
    </div>
  );
}

export default NextConcert;
