import { useEffect, useState } from "react";
import { getSong, Song } from "../api/getSong";

interface LyricProps {
  songId: number;
}

function Lyric({ songId }: LyricProps) {
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
    <div className="ml-16 pr-16 mt-30 w-full">
      {songData.lyrics.map((line, index) => (
        <div key={index} className="mb-44 w-full">
          <p className="mb-24 text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
            {line}
          </p>
          <p className="mb-24 text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
            {songData.pronunciation[index]}
          </p>
          <p className="mb-24 text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
            {songData.translation[index]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Lyric;
