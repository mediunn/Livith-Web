import { ConcertFilter } from "../../../entities/concert/types";
import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";

type EmptyConcertSlideProps = {
  filter: ConcertFilter;
};

function EmptyConcertSlide({ filter }: EmptyConcertSlideProps) {
  const filterText =
    filter === ConcertFilter.ALL
      ? "전체 콘서트 목록이"
      : filter === ConcertFilter.NEW
        ? "최근 추가된 콘서트가"
        : "곧 진행하는 콘서트가";

  return (
    <div className="flex flex-col items-center justify-center mt-90 mb-90">
      <img src={EmptyIcon} className="w-50 h-40" />
      <p className="text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR text-center mt-16 mb-0">
        {filterText}
        <br />
        없어요
      </p>
    </div>
  );
}

export default EmptyConcertSlide;
