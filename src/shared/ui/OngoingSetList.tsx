import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConcertRightArrow from "../assets/ConcertRightArrow.svg";
import SetListCard from "./SetListCard";
import { Setlist, SetlistType } from "../../entities/setlist/types";
import { getSetlistCollection } from "../../features/setlist/api/getSetlistCollection";

type OngoingSetListProps = {
  concertId: number;
};

function OngoingSetList({ concertId }: OngoingSetListProps) {
  const navigate = useNavigate();

  const [setlists, setSetlists] = useState<Setlist[]>([]);

  useEffect(() => {
    async function fetchOngoingSetlists() {
      try {
        const res = await getSetlistCollection({
          type: SetlistType.ONGOING,
          concertId,
          size: 3,
        });
        if (Array.isArray(res.data.data)) {
          setSetlists(res.data.data);
        } else if (res.data.data) {
          setSetlists([res.data.data]);
        }
      } catch (error) {
        console.error("진행된 셋리스트 호출 실패: ", error);
      }
    }

    fetchOngoingSetlists();
  }, [concertId]);

  return (
    <div>
      <div className="flex item-center justify-between w-full">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-25 mb-19 ml-16">
          진행된 셋리스트
        </p>
        <button className="w-24 h-24 bg-transparent border-none p-0 mt-24 mr-16 cursor-pointer">
          <img
            src={ConcertRightArrow}
            className="w-full h-full"
            onClick={() =>
              navigate(`/setlists/${SetlistType.ONGOING}/${concertId}`)
            }
          />
        </button>
      </div>
      <div className="ml-16 flex gap-9 pb-92">
        {setlists.map((setlist) => (
          <SetListCard
            key={setlist.id}
            type={SetlistType.ONGOING}
            title={setlist.title}
            date={setlist.date}
            status={setlist.status}
            imageUrl={setlist.imgUrl}
            setlistId={setlist.id}
            concertId={concertId}
          />
        ))}
      </div>
    </div>
  );
}

export default OngoingSetList;
