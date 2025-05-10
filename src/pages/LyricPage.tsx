import { useParams } from "react-router-dom";
import { useState } from "react";
import MusicTitleBar from "../features/lyric/ui/MusicTitleBar";
import LyricTypeButton from "../features/lyric/ui/LyricTypeButton";
import Lyric from "../features/lyric/ui/Lyric";

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

  return (
    <>
      <MusicTitleBar songId={Number(songId)}></MusicTitleBar>
      <LyricTypeButton activeButtons={activeButtons} onToggle={toggleButton} />
      <Lyric songId={Number(songId)} activeButtons={activeButtons} />
    </>
  );
}

export default LyricPage;
