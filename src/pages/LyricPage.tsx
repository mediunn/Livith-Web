import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MusicTitleBar from "../features/lyric/ui/MusicTitleBar";
import LyricTypeButton from "../features/lyric/ui/LyricTypeButton";
import Lyric from "../features/lyric/ui/Lyric";
import LyricModal from "../features/lyric/ui/LyricModal";

function LyricPage() {
  const { songId } = useParams<{ songId: string }>();

  // 초기값: 원어, 발음, 해석 true
  const [activeButtons, setActiveButtons] = useState<boolean[]>([
    true,
    true,
    true,
    false,
  ]);

  const toggleButton = (index: number) => {
    setActiveButtons((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const showDuration = 1500; // 딜레이
    const fadeDuration = 1000; // 애니메이션

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, showDuration);

    const closeTimer = setTimeout(() => {
      setIsPopupOpen(false);
    }, showDuration + fadeDuration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  return (
    <>
      <MusicTitleBar songId={Number(songId)}></MusicTitleBar>
      <LyricTypeButton activeButtons={activeButtons} onToggle={toggleButton} />
      <Lyric songId={Number(songId)} activeButtons={activeButtons} />

      {isPopupOpen && (
        <LyricModal
          isFadingOut={isFadingOut}
          onClose={() => setIsPopupOpen(false)}
        >
          <p className="text-center text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
            원어, 발음, 해석 중 하나는 <br />
            켜져야 해요
          </p>
        </LyricModal>
      )}
    </>
  );
}

export default LyricPage;
