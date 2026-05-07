import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useConcertInsideInfo } from "../entities/concert/model/useConcertInsideInfo";
import { useSchedule } from "../entities/concert/model/useSchedule";
import SignupCompleteModal from "../features/auth/ui/SignupCompleteModal";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import { useInterestConcerts } from "../features/interest/model/useInterestConcerts";
import TabBar from "../shared/ui/TabBar";
import TopBar from "../shared/ui/TopBar";
import GuidedBanner from "../shared/ui/GuidedBanner";
import { useRecoilValue } from "recoil";
import { userState } from "../shared/lib/recoil/atoms/userState";
import { authReadyState } from "../shared/lib/recoil/atoms/authReadyState";
import InterestConcert from "../widgets/InterestConcert";
import RecommedConcertListSection from "../widgets/RecommedConcertListSection";
import { toast } from "react-toastify";
import CompleteToast from "../shared/ui/Toast/CompleteToast";
import ErrorToast from "../shared/ui/Toast/ErrorToast";

function HomePage() {
  const user = useRecoilValue(userState);
  const isAuthReady = useRecoilValue(authReadyState);
  const isLoggedIn = !!user;
  const hasPrefer = user?.hasPreferredGenre ?? false;

  const { data: interest, isLoading: isInterestLoading } = useInterestConcerts({
    enabled: isLoggedIn,
    isLoggedIn,
  });
  const concertIdStr = interest?.[0]?.id ?? null;
  const concertId = concertIdStr ? Number(concertIdStr) : null;

  const { data: concert, isLoading: isConcertLoading } =
    useConcertInsideInfo(concertId);
  const { data: schedules = [], isLoading: isScheduleLoading } =
    useSchedule(concertId);

  const isLoading = isInterestLoading || isConcertLoading || isScheduleLoading;

  const location = useLocation();
  const navigate = useNavigate();
  const {
    showSignupComplete,
    nickname,
    showSetConcertSuccessToast,
    showSetConcertErrorToast,
    toastLabel,
  } = location.state || {};
  const hasShownSetConcertToastRef = useRef(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (showSignupComplete) {
      setIsModalOpen(true);
      navigate(".", { replace: true, state: null });
    }
  }, [showSignupComplete, navigate]);

  useEffect(() => {
    if (hasShownSetConcertToastRef.current) return;

    if (showSetConcertSuccessToast) {
      hasShownSetConcertToastRef.current = true;
      toast(
        <CompleteToast message={`소식을 받을 공연이 ${toastLabel}되었어요`} />,
        { position: "top-center", autoClose: 3000 },
      );
      navigate(".", { replace: true, state: null });
    } else if (showSetConcertErrorToast) {
      hasShownSetConcertToastRef.current = true;
      toast(
        <ErrorToast message={`소식을 받을 공연 ${toastLabel}에 실패했어요`} />,
        { position: "top-center", autoClose: 3000 },
      );
      navigate(".", { replace: true, state: null });
    }
  }, [
    showSetConcertSuccessToast,
    showSetConcertErrorToast,
    toastLabel,
    navigate,
  ]);

  return (
    <div className="pb-90">
      {concertId && concert && !isLoading ? (
        <div className="pb-20">
          <TopBar bgColor="bg-grayScaleBlack100" />
          <InterestConcert />
          {hasPrefer && user && (
            <RecommedConcertListSection nickname={user.nickname} />
          )}
        </div>
      ) : (
        <>
          <TopBar bgColor="bg-grayScaleBlack90" />
          {isAuthReady && !isLoggedIn && (
            <GuidedBanner
              content="회원가입하러 가기"
              compactTitle="나의 취향이 담긴 콘서트 추천받기"
              compactContent="회원가입하고 콘서트 정보를 빠르게 확인해요"
              isLoggedIn={isLoggedIn}
            />
          )}
          {isAuthReady && isLoggedIn && !hasPrefer && (
            <GuidedBanner
              content="취향 선택하러 가기"
              compactTitle="취향 선택하러 가기"
              compactContent="나의 취향이 담긴 콘서트를 추천받을 수 있어요"
              isLoggedIn={isLoggedIn}
            />
          )}
          <ConcertSettingEmpty hasPrefer={hasPrefer} />
        </>
      )}

      <TabBar />
      <SignupCompleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        nickname={nickname ?? ""}
      />
    </div>
  );
}

export default HomePage;
