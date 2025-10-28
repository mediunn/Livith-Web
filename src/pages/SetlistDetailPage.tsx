import { useLocation, useParams } from "react-router-dom";
import SetlistDetail from "../entities/setlist/ui/SetlistDetail";
import ListHeader from "../shared/ui/ListHeader";
import SetlistSongList from "../entities/setlist/ui/SetlistSongList";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../entities/recoil/atoms/userState";
import LoginModal from "../features/auth/ui/LoginModal";
import { toast } from "react-toastify";
import LoginPromptToast from "../shared/ui/LoginPromptToast";

function SetlistDetailPage() {
  const { setlistId, concertId } = useParams();
  const location = useLocation();
  const setlistTitle = location.state.setlistTitle;
  const [setlistType, setSetlistType] = useState<string | null>(null);
  const [user] = useRecoilState(userState);
  const effectRan = useRef(false); // 실행 여부 추적
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [viewedSetlists, setViewedSetlists] = useState<string[]>(() => {
    const stored = sessionStorage.getItem("viewedSetlists");
    return stored ? JSON.parse(stored) : [];
  });

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (effectRan.current) return; // 이미 실행됐으면 중단
    effectRan.current = true;
    if (!setlistId) return;

    // 로그인 유저는 기록 저장 안 함
    if (user) return;

    // 이미 3개 이상 본 경우 추가 중단
    if (viewedSetlists.length >= 3) return;

    // 이미 본 세트리스트인지 체크
    if (!viewedSetlists.includes(setlistId)) {
      const newViewed = [...viewedSetlists, setlistId];
      sessionStorage.setItem("viewedSetlists", JSON.stringify(newViewed));

      // 3개 열람 시 토스트
      if (newViewed.length === 3) {
        toast(
          <LoginPromptToast
            message="셋리스트"
            onLoginClick={() => {
              setIsLoginModalOpen(true);
              toast.dismiss();
            }}
          />,
          { position: "top-center", autoClose: 3000, pauseOnFocusLoss: false }
        );
      }
    }
  }, [setlistId]);

  return (
    <div>
      <ListHeader title={setlistTitle} />
      <SetlistDetail
        concertId={Number(concertId)}
        setlistId={Number(setlistId)}
        setSetlistType={setSetlistType}
      />
      <SetlistSongList
        setlistId={Number(setlistId)}
        setlistType={setlistType}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="concertInfo"
      />
    </div>
  );
}
export default SetlistDetailPage;
