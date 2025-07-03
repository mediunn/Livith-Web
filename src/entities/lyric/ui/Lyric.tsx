import { useEffect, useState } from "react";
import { getSong, Song } from "../../../features/lyric/api/getSong";
import LyricFanchant from "../ui/LyricFanchant";
import { useRecoilValue } from "recoil";
import { setlistIdState } from "../../recoil/atoms/setlistIdState";
import { Fanchant } from "../../../features/lyric/api/getFanchant";
import { BeatLoader } from "react-spinners";

interface LyricProps {
  songId: number;
  activeButtons: boolean[];
  fanchantData: Fanchant | null;
}

function Lyric({ songId, activeButtons, fanchantData }: LyricProps) {
  const setlistId = useRecoilValue(setlistIdState);
  const [songData, setSongData] = useState<Song | null>(null);

  const [isLyricLoading, setIsLyricLoading] = useState(true);

  useEffect(() => {
    const fetchSongData = async () => {
      setIsLyricLoading(true);
      try {
        const data = await getSong(songId);
        setSongData(data);
      } catch (error) {
        console.error("가사 조회 API 호출 실패:", error);
      } finally {
        setIsLyricLoading(false);
      }
    };

    fetchSongData();
  }, [songId]);

  if (isLyricLoading || !songData) {
    return (
      <div className="flex justify-center items-center h-60">
        <BeatLoader
          color="#FFFF97"
          cssOverride={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="ml-16 pr-32 mt-76 w-full">
      {songData.lyrics.map((_, index) => (
        <div key={index} className="pb-20 w-full">
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
            <p className="mb-24 text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
              {songData.pronunciation[index]}
            </p>
          )}
          {activeButtons[2] && (
            <p className="mb-24 text-lyricsTranslation text-body-md font-medium font-NotoSansKR">
              {songData.translation[index]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lyric;
