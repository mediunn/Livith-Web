import { useParams } from "react-router-dom";
import MusicTitleBar from "../features/lyric/ui/MusicTitleBar";
import LyricTypeButton from "../features/lyric/ui/LyricTypeButton";
import Lyric from "../features/lyric/ui/Lyric";

function LyricPage() {
  const { songId } = useParams<{ songId: string }>();

  return (
    <>
      <MusicTitleBar songId={Number(songId)}></MusicTitleBar>
      <LyricTypeButton></LyricTypeButton>
      <Lyric songId={Number(songId)}></Lyric>
    </>
  );
}

export default LyricPage;
