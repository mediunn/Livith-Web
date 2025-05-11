import { useEffect, useState } from "react";
import { getFanchant, Fanchant } from "../api/getFanchant";

interface FanchantProps {
  setlistId: number;
  songId: number;
}

function LyricFanchant({ setlistId, songId }: FanchantProps) {
  const [fanchantData, setFanchantData] = useState<Fanchant | null>(null);

  useEffect(() => {
    const fetchFanchant = async () => {
      try {
        const data = await getFanchant(setlistId, songId);
        // API 연결 확인
        console.log("응원법 조회 API 호출 성공:", data);
        setFanchantData(data);
      } catch (error) {
        console.error("응원법 조회 API 호출 실패:", error);
      }
    };

    fetchFanchant();
  }, [setlistId, songId]);

  if (!fanchantData) {
    return <div className="text-white">로딩 중...</div>;
  }

  return (
    <div className="ml-16 pr-16 mt-30 w-full">
      {fanchantData.fanchant.map((line, index) => (
        <p
          key={index}
          className="mb-24 text-mainYellow60 text-body-md font-medium font-NotoSansKR"
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export default LyricFanchant;
