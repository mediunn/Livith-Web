import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MusicTitleBar from "../features/lyric/ui/MusicTitleBar";
import LyricTypeButton from "../features/lyric/ui/LyricTypeButton";
import Lyric from "../features/lyric/ui/Lyric";
import LyricModal from "../features/lyric/ui/LyricModal";
import { getFanchant } from "../features/lyric/api/getFanchant";
import { useRecoilValue } from "recoil";
import { setlistIdState } from "../entities/recoil/atoms/setlistIdState";

function LyricPage() {
  const { songId } = useParams<{ songId: string }>();

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 초기값: 원어, 발음, 해석, 응원법 true
  const [activeButtons, setActiveButtons] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);

  // 응원법 존재 확인
  const [hasFanchant, setHasFanchant] = useState(false);
  const setlistId = useRecoilValue(setlistIdState);

  useEffect(() => {
    const fetchFanchantExistence = async () => {
      try {
        const fanchantData = await getFanchant(
          Number(setlistId),
          Number(songId)
        );
        const hasAnyFanchant = fanchantData?.fanchant?.some(
          (line) => line.trim() !== ""
        );
        setHasFanchant(hasAnyFanchant);
      } catch (error) {
        console.error("응원법 조회 API 호출 실패:", error);
        setHasFanchant(false);
      }
    };

    if (setlistId !== null && songId) {
      fetchFanchantExistence();
    }
  }, [setlistId, songId]);

  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const showPopup = (message: string) => {
    setPopupMessage(message);
    setIsFadingOut(false);

    const showDuration = 1500; // 딜레이 시간
    const fadeDuration = 1000; // 애니메이션 시간

    setTimeout(() => setIsFadingOut(true), showDuration);
    setTimeout(() => setPopupMessage(null), showDuration + fadeDuration);
  };

  const toggleButton = (index: number) => {
    const newState = [...activeButtons];
    newState[index] = !newState[index];

    const [isLang, isPron, isTrans, isFanChat] = newState;
    const langGroup = [isLang, isPron, isTrans];
    const langGroupOnCount = langGroup.filter(Boolean).length;

    // 원어 - off, 발음 - off, 해석 - off - 응원법 - off
    if (!isLang && !isPron && !isTrans && !isFanChat) {
      // 모든 버튼 off 시 팝업
      showPopup("원어, 발음, 해석 중 하나는\n켜져야 해요");
      return;
    }

    // 원어 - off, 발음 - off, 해석 - off - 응원법 - on
    if (!isLang && !isPron && !isTrans && isFanChat) {
      // 모든 버튼 off 시 팝업
      showPopup("원어, 발음, 해석 중 하나는\n켜져야 해요");
      return;
    }

    // 원어 - off, 발음 - off, 해석 - on - 응원법 - on
    if (!isLang && !isPron && isTrans && isFanChat) {
      // 해석과 응원법만 동시에 킬 경우 등장하는 팝업
      showPopup("해석에는 응원법이\n표시가 되지 않아요");
      return;
    }

    // 원어 - off, 발음 - on, 해석 - off - 응원법 - on
    if (!isLang && isPron && !isTrans && isFanChat) {
      // 발음과 응원법만 동시에 킬 경우 등장하는 팝업
      showPopup("발음에는 응원법이\n표시가 되지 않아요");
      return;
    }

    // 원어 - off, 발음 - on, 해석 - on - 응원법 - on
    if (!isLang && isPron && isTrans && isFanChat) {
      // 발음, 해석과 응원법만 동시에 킬 경우 등장하는 팝업
      showPopup("발음과 해석에는 응원법이\n표시가 되지 않아요");
      return;
    }

    // 응원법 표시 가능한 경우
    if (index === 3) {
      if (newState[3]) {
        // 응원법 켜려는 경우 → 원어가 꺼져있으면 안 됨
        if (!newState[0]) {
          // 응원법 표시 팝업
          showPopup("응원법은 원어에서만\n표시가 돼요");
          return;
        }
        setActiveButtons(newState);
        showPopup("응원법은 원어에서만\n표시가 돼요");
        return;
      }
    }

    setActiveButtons(newState);
  };

  return (
    <div className="pt-60">
      <MusicTitleBar songId={Number(songId)}></MusicTitleBar>
      <LyricTypeButton
        activeButtons={activeButtons}
        onToggle={toggleButton}
        hasFanchant={hasFanchant}
      />
      <Lyric songId={Number(songId)} activeButtons={activeButtons} />

      {popupMessage && (
        <LyricModal
          isFadingOut={isFadingOut}
          onClose={() => setPopupMessage(null)}
        >
          <p
            className="text-center text-grayScaleWhite text-body-md font-medium font-NotoSansKR"
            style={{ whiteSpace: "pre-line" }}
          >
            {popupMessage}
          </p>
        </LyricModal>
      )}
    </div>
  );
}

export default LyricPage;
