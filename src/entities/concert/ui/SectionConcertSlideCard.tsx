import { ConcertStatus } from "../types";
import EmptyConcertCardIcon from "../../../shared/assets/EmptyConcertCardIcon.svg";
import { setConcertStatus } from "../../../features/search/utils/setConcertStatus";

type ConcertSlideCardProps = {
  imageUrl?: string;
  title: string;
  artist?: string;
  date: string;
  status: ConcertStatus;
  daysLeft: number;
  onClick?: () => void;
};

function SectionConcertSlideCard({
  imageUrl,
  title,
  artist,
  date,
  status,
  daysLeft,
  onClick,
}: ConcertSlideCardProps) {
  return (
    <div className="w-108 h-262 cursor-pointer" onClick={onClick}>
      <div className="w-108 h-158 relative">
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
            {setConcertStatus({ status, daysLeft })}
          </p>
        </div>
      </div>
      <p className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR mt-8 mb-0 line-clamp-2">
        {title}
      </p>
      <p className="text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR mt-10 line-clamp-1">
        {date}
      </p>
      {artist && (
        <p className="text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR mt-4 line-clamp-1">
          {artist}
        </p>
      )}
    </div>
  );
}

export default SectionConcertSlideCard;
