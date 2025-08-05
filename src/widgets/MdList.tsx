import { useEffect, useState } from "react";
import MdCard from "../entities/concert/ui/MdCard";
import { getMd, Md } from "../entities/concert/api/getMd";

interface MdListProps {
  concertId?: number;
  ticketUrl: string;
}

export function MdList({ concertId, ticketUrl }: MdListProps) {
  const [mds, setMd] = useState<Md[] | null>(null);

  useEffect(() => {
    const fetchMds = async () => {
      if (!concertId) return;
      try {
        const data = await getMd(concertId);
        setMd(data);
      } catch (error) {
        console.error("특정 콘서트의 MD 목록 조회 API 호출 실패:", error);
        setMd([]);
      }
    };

    fetchMds();
  }, [concertId]);

  return (
    <div className="mt-18 grid grid-cols-3 gap-x-10 gap-y-24 mx-16">
      {mds?.map((md) => (
        <div key={md.id}>
          <MdCard
            imgUrl={md.imgUrl}
            name={md.name}
            price={md.price}
            ticketUrl={ticketUrl}
          />
        </div>
      ))}
    </div>
  );
}

export default MdList;
