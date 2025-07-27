import { ConcertFilter } from "../types";

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
            alt="콘서트 이미지"
            className="w-full h-full rounded-6 object-cover"
          />
        ) : (
          <div className="w-full h-full bg-grayScaleBlack80 rounded-6" />
        )}
        <div className="absolute top-10 left-10 inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13">
          <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
            {filterText}
          </p>
        </div>
      </div>
      <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR mt-8 mb-0 line-clamp-2">
        {title}
      </p>
      <p className="text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR mt-6 mb-0 line-clamp-1">
        {date}
      </p>
    </div>
  );
}

export default ConcertSlideCard;
