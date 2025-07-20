import { ConcertStatus } from "../types";

// 추후 콘서트 api 대신 MD api 연결

type ConcertSlideCardProps = {
  imageUrl?: string;
  title: string;
  date: string;
  status: ConcertStatus;
  daysLeft: number;
  onClick?: () => void;
};

function MdSlideCard({
  imageUrl,
  title,
  date,
  status,
  daysLeft,
  onClick,
}: ConcertSlideCardProps) {
  const statusText =
    status === ConcertStatus.ONGOING
      ? "진행중"
      : status === ConcertStatus.COMPLETED
        ? "종료"
        : `D-${daysLeft}`;

  return (
    <div className="w-108 h-214 cursor-pointer" onClick={onClick}>
      <div className="w-108 h-158 relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="콘서트 이미지"
            className="w-full h-full rounded-6 object-cover"
          />
        ) : (
          <div className="w-full h-full bg-grayScaleBlack80 rounded-6" />
        )}
      </div>
      <p className="mt-8 mb-0 text-grayScaleWhite text-body-md font-medium font-NotoSansKR line-clamp-1">
        {title}
      </p>
      <p className="mt-10 mb-0 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR line-clamp-1">
        {date}
      </p>
    </div>
  );
}

export default MdSlideCard;
