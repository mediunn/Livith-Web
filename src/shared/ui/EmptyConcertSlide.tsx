import { ConcertStatus } from "../../entities/concert/types";
import EmptyIcon from "../assets/EmptyIcon.svg";

type EmptyConcertSlideProps = {
  status: ConcertStatus;
};

function EmptyConcertSlide({ status }: EmptyConcertSlideProps) {
  const statusText =
    status === ConcertStatus.COMPLETED
      ? "한 달 이내 진행했던"
      : status === ConcertStatus.ONGOING
        ? "현재 진행하는"
        : "곧 진행하는";

  return (
    <div className="flex flex-col items-center justify-center mt-90 mb-90">
      <img src={EmptyIcon} className="w-50 h-40" />
      <p className="text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR text-center mt-16 mb-0">
        {statusText}
        <br />
        콘서트가 없어요
      </p>
    </div>
  );
}

export default EmptyConcertSlide;
