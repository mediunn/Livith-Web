import MdCard from "../entities/concert/ui/MdCard";
import { useMd } from "../entities/concert/model/useMd";

interface MdListProps {
  concertId?: number;
  ticketUrl: string;
}

export function MdList({ concertId, ticketUrl }: MdListProps) {
  const { data: mds = [] } = useMd(concertId ?? null);

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
