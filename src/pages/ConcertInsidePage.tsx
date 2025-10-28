import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import ConcertInsideInfo from "../entities/concert/ui/ConcertInsideInfo";
import ConcertInfoTab from "../entities/concert/ui/ConcertInfoTab";
import { useConcertInsideInfo } from "../entities/concert/model/useConcertInsideInfo";
import { toast } from "react-toastify";
import LoginPromptToast from "../shared/ui/LoginPromptToast";
import LoginModal from "../features/auth/ui/LoginModal";
import { useRecoilState } from "recoil";
import { userState } from "../entities/recoil/atoms/userState";

function ConcertInsidePage() {
  const { concertId } = useParams<{ concertId: string }>();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user] = useRecoilState(userState);
  const effectRan = useRef(false); // 실행 여부 추적

  // 세션 스토리지에서 열람한 콘서트 ID 배열 가져오기
  const [viewedConcerts, setViewedConcerts] = useState<string[]>(() => {
    const stored = sessionStorage.getItem("viewedConcerts");
    return stored ? JSON.parse(stored) : [];
  });

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: concert } = useConcertInsideInfo(Number(concertId));
  // 페이지 진입 시 열람 기록 업데이트
  useEffect(() => {
    if (effectRan.current) return; // 이미 실행됐으면 중단
    effectRan.current = true;
    if (!concertId) return;

    // 로그인 유저는 기록 저장 안 함
    if (user) return;

    // 이미 3개 이상 본 경우 추가 중단
    if (viewedConcerts.length >= 3) return;

    // 이미 본 콘서트인지 체크
    if (!viewedConcerts.includes(concertId)) {
      const newViewed = [...viewedConcerts, concertId];
      console.log("새로운 열람 기록:", newViewed);
      sessionStorage.setItem("viewedConcerts", JSON.stringify(newViewed));

      // 3개 열람 시 토스트
      if (newViewed.length === 3) {
        toast(
          <LoginPromptToast
            message="콘서트 정보"
            onLoginClick={() => {
              setIsLoginModalOpen(true);
              toast.dismiss();
            }}
          />,
          { position: "top-center", autoClose: 3000, pauseOnFocusLoss: false }
        );
      }
    }
  }, [concertId]);
  if (!concert) return null;

  return (
    <div className="pb-90">
      <ListHeader title={concert.title} />
      <ConcertInsideInfo concert={concert}></ConcertInsideInfo>
      <ConcertInfoTab
        introduction={concert.introduction}
        concertId={Number(concertId)}
        ticketUrl={concert.ticketUrl}
      ></ConcertInfoTab>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="concertInfo"
      />
    </div>
  );
}

export default ConcertInsidePage;
