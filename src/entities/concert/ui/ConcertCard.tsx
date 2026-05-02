import { ConcertStatus } from "../types";
import EmptyConcertCardIcon from "../../../shared/assets/EmptyConcertCardIcon.svg";
import ChipState from "../../../shared/ui/ChipState/ChipState";
import {
  getConcertDisplayDate,
  getConcertDisplayStatus,
  getConcertDisplayTitle,
} from "../../../shared/utils/concertDisplay";
import type { ConcertDisplaySource } from "../../../shared/utils/concertDisplay";

type ConcertCardProps = {
  title: string;
  startDate: string;
  endDate: string;
  status: ConcertStatus;
  onClick?: () => void;
  artist?: string;
  imageUrl?: string;
  daysLeft: number;
};

function ConcertCard({
  title,
  startDate,
  endDate,
  status,
  onClick,
  artist,
  imageUrl,
  daysLeft,
}: ConcertCardProps) {
  const displayConcert: ConcertDisplaySource = {
    title,
    artist: artist ?? "",
    startDate,
    endDate,
    status,
    daysLeft,
    venue: "",
  };

  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="w-full aspect-[108/158] relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            className="w-full h-full rounded-6 object-cover bg-grayScaleBlack80"
            onError={(e) => {
              e.currentTarget.src = EmptyConcertCardIcon;
            }}
          />
        ) : (
          <img
            src={EmptyConcertCardIcon}
            className="w-full h-full rounded-6 object-cover bg-grayScaleBlack80"
          />
        )}

        <ChipState
          label={getConcertDisplayStatus(displayConcert)}
          className="absolute top-10 left-10"
        />
      </div>
      <p className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR mt-8 line-clamp-2 break-words">
        {getConcertDisplayTitle(displayConcert)}
      </p>
      <p className="text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR mt-10 line-clamp-1">
        {getConcertDisplayDate(displayConcert)}
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
