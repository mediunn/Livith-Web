import cardMask from "../../../shared/assets/InterestConcertCarousel.svg";
import ConcertDateIcon from "../../../shared/assets/ConcertDateIcon.svg";
import ConcertVenueIcon from "../../../shared/assets/ConcertVenueIcon.svg";
import ConcertPosterEmptyIcon from "../../../shared/assets/ConcertPosterEmptyIcon.svg";
import { InterestConcertResponse } from "../api/getInterestConcerts";
import {
  getConcertCarouselDisplayStatus,
  getConcertDisplayDate,
  getConcertDisplayTitle,
  getConcertDisplayVenue,
  getTicketingText,
} from "../../../shared/utils/concertDisplay";

interface InterestConcertCarouselSlideProps {
  concert: InterestConcertResponse;
  onClick: () => void;
}

function InterestConcertCarouselSlide({
  concert,
  onClick,
}: InterestConcertCarouselSlideProps) {
  const {
    daysLeft,
    title,
    venue,
    startDate,
    endDate,
    poster,
    preSaleDate,
    generalSaleDate,
  } = concert;

  const ticketingText = getTicketingText(
    preSaleDate,
    generalSaleDate,
    startDate,
  );

  const displayTitle = getConcertDisplayTitle(concert);
  const displayStatus = getConcertCarouselDisplayStatus(concert);
  const displayDate = getConcertDisplayDate(concert);
  const displayVenue = getConcertDisplayVenue(concert);

  return (
    <div className="w-full mb-40 flex items-center">
      <div className="w-full cursor-pointer relative" onClick={onClick}>
        <img src={cardMask} className="w-full h-full object-contain" />

        <div className="absolute inset-0 p-16 flex flex-col gap-16">
          <div className="flex gap-10">
            <img
              src={poster ?? ConcertPosterEmptyIcon}
              className="w-84 h-112 rounded-4 object-cover flex-shrink-0"
            />
            <div>
              <div className="inline-flex items-center justify-center px-10 py-4 rounded-24 bg-mainYellow30">
                <p className="text-grayScaleBlack100 text-Caption1-Bold font-bold font-NotoSansKR line-clamp-1">
                  {displayStatus}
                </p>
              </div>
              <p className="pt-6 text-grayScaleBlack5 text-Body1-sm font-semibold font-NotoSansKR line-clamp-1">
                {displayTitle}
              </p>

              <div className="pt-9 flex items-center">
                <img src={ConcertDateIcon} className="w-24 h-24" />
                <p className="pl-4 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR line-clamp-1">
                  {displayDate}
                </p>
              </div>

              <div className="flex items-center">
                <img src={ConcertVenueIcon} className="w-24 h-24" />
                <p className="pl-4 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR line-clamp-1">
                  {displayVenue}
                </p>
              </div>
            </div>
          </div>
          <p className="absolute bottom-[11%] left-1/2 -translate-x-1/2 whitespace-nowrap text-grayScaleBlack30 text-Body3-md font-medium font-NotoSansKR text-center line-clamp-2">
            {ticketingText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterestConcertCarouselSlide;
