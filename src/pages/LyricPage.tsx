import { useParams } from "react-router-dom";
import { useState } from "react";
import MusicTitleBar from "../features/lyric/ui/MusicTitleBar";
import LyricTypeButton from "../features/lyric/ui/LyricTypeButton";
import Lyric from "../features/lyric/ui/Lyric";
import LyricModal from "../features/lyric/ui/LyricModal";
import LyricFanchant from "../features/lyric/ui/LyricFanchant";

function LyricPage() {
  const { songId } = useParams<{ songId: string }>();

  // 초기값: 원어, 발음, 해석 true
  const [activeButtons, setActiveButtons] = useState<boolean[]>([
    true,
    true,
    true,
    false,
  ]);

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

    // 다 끄려고 할 경우
    if (index < 3 && !newState[index] && langGroupOnCount === 0) {
      showPopup("원어, 발음, 해석 중 하나는\n켜져야 해요");
      return;
    }

    if (index === 3 && newState[3]) {
      // 해석과 응원법만 동시에 킬 경우
      if (!(isLang || isPron)) {
        showPopup("해석에는 응원법이\n표시가 되지 않아요");
        return;
      } else {
        // 응원법 표시 가능한 경우
        setActiveButtons(newState);
        showPopup("응원법은 원어에서만\n표시가 돼요");
        return;
      }
    }

    setActiveButtons(newState);
  };

  return (
    <>
      <MusicTitleBar songId={Number(songId)}></MusicTitleBar>
      <LyricTypeButton activeButtons={activeButtons} onToggle={toggleButton} />
      <Lyric songId={Number(songId)} activeButtons={activeButtons} />
      {/* 응원법 조회 API 호출 테스트 */}
      <LyricFanchant setlistId={1} songId={Number(songId)} />
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
    </>
  );
}

export default LyricPage;
