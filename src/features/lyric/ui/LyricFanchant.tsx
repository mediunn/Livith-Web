import { useEffect, useState } from "react";
import { getFanchant, Fanchant } from "../api/getFanchant";

interface FanchantProps {
  setlistId: number;
  songId: number;
  lineIndex: number;
}

function LyricFanchant({ setlistId, songId, lineIndex }: FanchantProps) {
  const [fanchantData, setFanchantData] = useState<Fanchant | null>(null);

  useEffect(() => {
    const fetchFanchant = async () => {
      try {
        const data = await getFanchant(setlistId, songId);
        setFanchantData(data);
      } catch (error) {
        console.error("응원법 조회 API 호출 실패:", error);
      }
    };

    fetchFanchant();
  }, [setlistId, songId]);

  const highlightText = (content: string) => {
    // ##로 감싸진 부분 찾기
    const regex = /##(.*?)##/g;
    return content.split(regex).map((part, index) => {
      if (index % 2 !== 0) {
        return (
          <span
            key={index}
            className="text-mainYellow60 text-body-md font-semibold font-NotoSansKR"
          >
            {part}
          </span>
        );
      }
      // 나머지는 그대로 출력
      return (
        <span
          key={index}
          className="text-lyricsOriginal text-body-md font-medium font-NotoSansKR"
        >
          {part}
        </span>
      );
    });
  };

  if (!fanchantData) {
    return <div className="text-white">로딩 중...</div>;
  }

  const line = fanchantData.fanchant[lineIndex] ?? "";

  return (
    <p className="mb-24 text-body-md font-medium font-NotoSansKR">
      {highlightText(line)}
    </p>
  );
}

export default LyricFanchant;
