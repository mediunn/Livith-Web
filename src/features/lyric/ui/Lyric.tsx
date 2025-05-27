import { useEffect, useState } from "react";
import { getSong, Song } from "../api/getSong";
import LyricFanchant from "../ui/LyricFanchant";
import { useRecoilValue } from "recoil";
import { setlistIdState } from "../../../entities/recoil/atoms/setlistIdState";
import { Fanchant } from "../api/getFanchant";

interface LyricProps {
  songId: number;
  activeButtons: boolean[];
  fanchantData: Fanchant | null;
}

function Lyric({ songId, activeButtons, fanchantData }: LyricProps) {
  const setlistId = useRecoilValue(setlistIdState);
  const [songData, setSongData] = useState<Song | null>(null);

  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const data = await getSong(songId);
        setSongData(data);
      } catch (error) {
        console.error("가사 조회 API 호출 실패:", error);
      }
    };

    fetchSongData();
  }, [songId]);

  if (!songData) {
    return <div className="text-white">로딩 중...</div>;
  }

  return (
    <div className="ml-16 pr-16 mt-76 w-full">
      {songData.lyrics.map((_, index) => (
        <div key={index} className="mb-44 w-full">
          {activeButtons[3] && setlistId !== null && fanchantData ? (
            <LyricFanchant line={fanchantData.fanchant[index] ?? ""} />
          ) : (
            activeButtons[0] && (
              <p className="mb-24 text-lyricsOriginal text-body-md font-medium font-NotoSansKR">
                {songData.lyrics[index]}
              </p>
            )
          )}
          {activeButtons[1] && (
            <p className="mb-24 text-lyricsTranslation text-body-md font-medium font-NotoSansKR">
              {songData.pronunciation[index]}
            </p>
          )}
          {activeButtons[2] && (
            <p className="mb-24 text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
              {songData.translation[index]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lyric;
