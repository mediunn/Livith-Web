import { Song } from "../api/getSong";
import LyricFanchant from "../ui/LyricFanchant";
import { useRecoilValue } from "recoil";
import { setlistIdState } from "../../recoil/atoms/setlistIdState";
import { Fanchant } from "../../../features/lyric/api/getFanchant";

interface LyricProps {
  songData: Song;
  activeButtons: boolean[];
  fanchantData: Fanchant | null;
}

function Lyric({ songData, activeButtons, fanchantData }: LyricProps) {
  const setlistId = useRecoilValue(setlistIdState);

  return (
    <div className="px-16 mt-49 w-full">
      {songData.lyrics.map((_, index) => (
        <div key={index} className="pb-20 w-full">
          {activeButtons[3] && setlistId !== null && fanchantData ? (
            <LyricFanchant line={fanchantData.fanchant[index] ?? ""} />
          ) : (
            activeButtons[0] && (
              <p className="mb-24 text-lyricsOriginal text-Body2-md font-medium font-NotoSansKR">
                {songData.lyrics[index]}
              </p>
            )
          )}
          {activeButtons[1] && (
            <p className="mb-24 text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR">
              {songData.pronunciation[index]}
            </p>
          )}
          {activeButtons[2] && (
            <p className="mb-24 text-lyricsTranslation text-Body2-md font-medium font-NotoSansKR">
              {songData.translation[index]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lyric;
