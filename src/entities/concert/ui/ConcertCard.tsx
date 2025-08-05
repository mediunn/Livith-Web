import { setConcertStatus } from "../../../features/search/utils/setConcertStatus";
import { ConcertStatus } from "../types";

type ConcertCardProps = {
  title: string;
  date: string;
  status: ConcertStatus;
  onClick?: () => void;
  artist?: string;
  imageUrl?: string;
  daysLeft: number;
};

function ConcertCard({
  title,
  date,
  status,
  onClick,
  artist,
  imageUrl,
  daysLeft,
}: ConcertCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="w-full aspect-[108/158] relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="콘서트 이미지"
            className="w-full h-full rounded-6 object-cover"
          />
        ) : (
          <div className="w-full bg-grayScaleBlack80 rounded-6" />
        )}
        <div className="absolute top-10 left-10 inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13">
          <p className="text-grayScaleBlack30 text-Caption1-sm font-semibold font-NotoSansKR">
            {setConcertStatus({ status, daysLeft })}
          </p>
        </div>
      </div>
      <p className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR mt-8 line-clamp-2">
        {title}
      </p>
      <p className="text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR mt-10 line-clamp-1">
        {date}
      </p>
      {artist && (
        <p className="text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR mt-4 mb-2 line-clamp-1">
          {artist}
        </p>
      )}
    </div>
  );
}

export default ConcertCard;
