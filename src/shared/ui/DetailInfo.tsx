import WebSiteEarthIcon from "../../shared/assets/WebSiteEarthIcon.svg";
import WebSiteArrowIcon from "../../shared/assets/WebSiteArrowIcon.svg";
import EmptyConcertImageIcon from "../../shared/assets/EmptyConcertImageIcon.svg";
import ConcertDateIcon from "../../shared/assets/ConcertDateIcon.svg";
import ConcertVenueIcon from "../../shared/assets/ConcertVenueIcon.svg";
import HotConcertChipIcon from "../../shared/assets/HotConcertChipIcon.svg";
import ConcertAddIcon from "../../shared/assets/ConcertAddIcon.svg";
import { useState } from "react";
import ChangeConcertConfirmModal from "../../widgets/ChangeConcertConfirmModal";
import { ConcertStatus } from "../../entities/concert/types";
import { useRecoilState } from "recoil";
import { userState } from "../../entities/recoil/atoms/userState";
import LoginModal from "../../features/auth/ui/LoginModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isToastActive, setIsToastActive] = useState(false);

  const [user] = useRecoilState(userState);

  return (
    <div className="w-full h-337 relative">
      <button
        onClick={() => {
          window.amplitude.track("click_interest_concert_detail");
          if (user) {
            setIsModalOpen(true);
          } else {
            setIsLoginModalOpen(true);
          }
        }}
        disabled={isToastActive}
        className="absolute top-0 right-0 z-10 mt-16 mr-16 bg-grayScaleBlack100 rounded-8 backdrop-blur-sm shadow-[0_0_12px_rgba(255,255,255,0.3)] border-none cursor-pointer"
      >
        {status !== ConcertStatus.CANCELED && (
          <div className="px-10 py-8 flex items-center">
            <img src={ConcertAddIcon} className="w-24 h-24" />
            <p className="pl-4 text-grayScaleWhite text-Caption1-sm font-semibold font-NotoSansKR">
              관심 콘서트 설정하기
            </p>
          </div>
        )}
      </button>

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
        {label && (
          <div className="inline-flex items-center px-8 py-2 bg-lyricsTranslation rounded-24">
            <img src={HotConcertChipIcon} className="w-24 h-24" />
            <p className="text-grayScaleBlack100 text-Caption2-sm font-semibold font-NotoSansKR">
              {label}
            </p>
          </div>
        )}
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
      <ChangeConcertConfirmModal
        id={id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setIsToastActive={setIsToastActive}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="interestConcert"
      />
    </div>
  );
}

export default DetailInfo;
