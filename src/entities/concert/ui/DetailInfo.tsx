import WebSiteEarthIcon from "../../shared/assets/WebSiteEarthIcon.svg";
import WebSiteArrowIcon from "../../shared/assets/WebSiteArrowIcon.svg";
import EmptyConcertImageIcon from "../../../shared/assets/EmptyConcertImageIcon.svg";
import ConcertDateIcon from "../../../shared/assets/ConcertDateIcon.svg";
import ConcertVenueIcon from "../../../shared/assets/ConcertVenueIcon.svg";
import HotConcertChipIcon from "../../../shared/assets/HotConcertChipIcon.svg";
import AlarmIcon from "../../../shared/assets/AlarmIcon.svg";
import AlarmFillIcon from "../../../shared/assets/AlarmFillIcon.svg";
import { useState } from "react";
import { ConcertStatus } from "../types";
import { useRecoilState } from "recoil";
import { userState } from "../../../shared/lib/recoil/atoms/userState";
import LoginModal from "../../../features/auth/ui/LoginModal";
import { ChipBadge } from "../../../shared/ui/ChipBadge/ChipBadge";
import ConcertMoreBtn from "../../../shared/ui/ConcertMoreButton/ConcertMoreButton";
import { useSetInterestConcert } from "../../../features/interest/model/useSetInterestConcert";
import { useInterestConcerts } from "../../../features/interest/model/useInterestConcerts";
import { InterestSortFilter } from "../../../entities/concert/types";
import { useInterestConcertExists } from "../../../features/interest/model/useInterestConcertExists";

interface DetailInfoProps {
  id: string;
  imageUrl: string;
  artist: string;
  title: string;
  date: string;
  venue: string;
  label: string;
  status: string;
}

function DetailInfo({
  id,
  imageUrl,
  artist,
  title,
  date,
  venue,
  label,
  status,
}: DetailInfoProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const mutation = useSetInterestConcert();
  const { data: interestConcerts } = useInterestConcerts({
    sort: InterestSortFilter.CONCERT,
  });

  const [user] = useRecoilState(userState);

  const targetId = Number(id);

  const { data: interestExistsData } = useInterestConcertExists(
    targetId,
    !!user,
  );

  const isInterested = interestExistsData?.data?.isInterested ?? false;

  const handleReceiveConcertAlert = () => {
    window.amplitude.track("confirm_change_interest");

    if (!Number.isFinite(targetId) || targetId <= 0) {
      return;
    }

    const existingIds = (interestConcerts ?? [])
      .map((concert) => Number(concert.id))
      .filter((concertId) => Number.isFinite(concertId) && concertId > 0);
    const mergedConcertIds = Array.from(new Set([...existingIds, targetId]));

    const accessToken = localStorage.getItem("accessToken") ?? "";

    mutation.mutate(
      {
        concertIds: mergedConcertIds,
        accessToken,
      },
      {},
    );
  };

  return (
    <div className="w-full h-337 relative">
      {status !== ConcertStatus.CANCELED &&
        status !== ConcertStatus.COMPLETED && (
          <ConcertMoreBtn
            label={isInterested ? "소식 받는 중" : "소식 받기"}
            icon={isInterested ? AlarmFillIcon : AlarmIcon}
            right={16}
            top={0}
            disabled={mutation.isPending}
            iconPosition="left"
            onClick={() => {
              window.amplitude.track("click_interest_concert_detail");
              if (user) {
                handleReceiveConcertAlert();
              } else {
                setIsLoginModalOpen(true);
              }
            }}
          />
        )}

      <div className="h-337 absolute inset-0 bg-grayScaleBlack100 opacity-70"></div>
      {imageUrl ? (
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = EmptyConcertImageIcon;
          }}
        />
      ) : (
        <img
          src={EmptyConcertImageIcon}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute bottom-28 left-0 w-full px-16">
        {label && <ChipBadge label={label} icon={HotConcertChipIcon} />}
        <p className="pt-10 text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
          {title}
        </p>
        <p className="pt-10 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
          {artist}
        </p>

        <div className="pt-10 flex items-center">
          <img src={ConcertDateIcon} className="w-24 h-24" />
          <p className="pl-4 text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR">
            {date}
          </p>
        </div>

        <div className="pt-4 flex items-center">
          <img src={ConcertVenueIcon} className="w-24 h-24" />
          <p className="pl-4 text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR">
            {venue}
          </p>
        </div>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="interestConcert"
      />
    </div>
  );
}

export default DetailInfo;
