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
import { useInterestConcertExists } from "../../../features/interest/model/useInterestConcertExists";
import { useQueryClient } from "@tanstack/react-query";
import {
  getInterestConcerts,
  InterestConcertResponse,
} from "../../../features/interest/api/getInterestConcerts";
import { toast } from "react-toastify";
import CompleteToast from "../../../shared/ui/Toast/CompleteToast";
import ErrorToast from "../../../shared/ui/Toast/ErrorToast";

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
  const queryClient = useQueryClient();

  const [user] = useRecoilState(userState);

  const targetId = Number(id);

  const { data: interestExistsData } = useInterestConcertExists(
    targetId,
    !!user,
  );

  const isInterested = interestExistsData?.data?.isInterested ?? false;

  const handleToggleInterest = async () => {
    window.amplitude.track("confirm_change_interest");

    if (!Number.isFinite(targetId) || targetId <= 0) {
      return;
    }

    const accessToken = localStorage.getItem("accessToken") ?? "";

    const response = await queryClient.fetchQuery({
      queryKey: ["interest-concerts", 9999, undefined],
      queryFn: () => getInterestConcerts({ size: 9999 }),
      staleTime: 0,
    });

    const currentConcerts: InterestConcertResponse[] =
      response?.data?.data ?? [];

    const existingIds = currentConcerts
      .map((concert) => Number(concert.id))
      .filter((concertId) => Number.isFinite(concertId) && concertId > 0);

    const mergedConcertIds = isInterested
      ? existingIds.filter((concertId) => concertId !== targetId) // 해제
      : Array.from(new Set([...existingIds, targetId])); // 추가

    mutation.mutate(
      {
        concertIds: mergedConcertIds,
        accessToken,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["interestConcertExists", targetId],
          });

          queryClient.invalidateQueries({
            queryKey: ["interest-concerts"],
          });
          toast(
            <CompleteToast
              message={
                isInterested
                  ? "소식을 받을 공연이 해제되었어요"
                  : "소식을 받을 공연이 추가되었어요"
              }
            />,
            {
              position: "top-center",
              autoClose: 3000,
              pauseOnFocusLoss: false,
            },
          );
        },
        onError: () => {
          toast(
            <ErrorToast
              message={
                isInterested
                  ? "소식을 받을 공연 해제에 실패했어요"
                  : "소식을 받을 공연 추가에 실패했어요"
              }
            />,
            {
              position: "top-center",
              autoClose: 3000,
              pauseOnFocusLoss: false,
            },
          );
        },
      },
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
            onClick={async () => {
              window.amplitude.track("click_interest_concert_detail");
              if (user) {
                await handleToggleInterest();
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
