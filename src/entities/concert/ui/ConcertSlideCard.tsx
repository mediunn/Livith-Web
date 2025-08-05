import { ConcertFilter } from "../types";
import EmptyConcertCardIcon from "../../../shared/assets/EmptyConcertCardIcon.svg";

type ConcertSlideCardProps = {
  imageUrl?: string;
  title: string;
  date: string;
  filter: ConcertFilter;
  daysLeft: number;
  onClick?: () => void;
};

function ConcertSlideCard({
  imageUrl,
  title,
  date,
  filter,
  daysLeft,
  onClick,
}: ConcertSlideCardProps) {
  let filterText = "";

  if (filter === ConcertFilter.UPCOMING) {
    filterText = `D-${daysLeft}`;
  } else {
    if (daysLeft > 0) {
      filterText = `D-${daysLeft}`;
    } else if (daysLeft === 0) {
      filterText = "진행중";
    } else {
      filterText = "종료";
    }
  }

  return (
    <div className="w-139 h-280 cursor-pointer" onClick={onClick}>
      <div className="w-139 h-196 relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=" "
            className="w-full h-full rounded-6 object-cover"
          />
        ) : (
          <img
            src={EmptyConcertCardIcon}
            alt="empty"
            className="w-full h-full rounded-6 object-cover bg-grayScaleBlack80"
          />
        )}

        <div className="absolute top-10 left-10 px-13 py-8 inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24">
          <p className="text-grayScaleBlack30 text-Caption1-Bold font-bold font-NotoSansKR">
            {filterText}
          </p>
        </div>
      </div>
      <p className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR mt-8 mb-0 line-clamp-2">
        {title}
      </p>
      <p className="text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR mt-6 mb-0 line-clamp-1">
        {date}
      </p>
    </div>
  );
}

export default ConcertSlideCard;
