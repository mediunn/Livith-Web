import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConcertRightArrow from "../assets/ConcertRightArrow.svg";
import SetListCard from "./SetListCard";
import { Setlist, SetlistType } from "../../entities/setlist/types";
import { getSetlistCollection } from "../../features/setlist/api/getSetlistCollection";
import EmptySetList from "./EmptySetList";

type PastSetListProps = {
  concertId: number;
};

function PastSetList({ concertId }: PastSetListProps) {
  const navigate = useNavigate();

  const [setlists, setSetlists] = useState<Setlist[]>([]);

  useEffect(() => {
    async function fetchPastSetlists() {
      try {
        const res = await getSetlistCollection({
          type: SetlistType.PAST,
          concertId,
          size: 3,
        });
        if (Array.isArray(res.data.data)) {
          setSetlists(res.data.data);
        } else if (res.data.data) {
          setSetlists([res.data.data]);
        }
      } catch (error) {
        console.error("지난 셋리스트 호출 실패: ", error);
      }
    }
    fetchPastSetlists();
  }, [concertId]);

  return (
    <div>
      <div className="flex item-center justify-between w-full">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-25 mb-19 ml-16">
          지난 셋리스트
        </p>
        {setlists.length > 0 && (
          <button className="w-24 h-24 bg-transparent border-none p-0 mt-24 mr-16 cursor-pointer">
            <img
              src={ConcertRightArrow}
              className="w-full h-full"
              onClick={() =>
                navigate(`/setlists/${SetlistType.PAST}/${concertId}`)
              }
            />
          </button>
        )}
      </div>
      {setlists && setlists.length > 0 ? (
        <div className="ml-16 mr-16 flex gap-9 pb-92">
          {setlists.map((setlist) => (
            <SetListCard
              key={setlist.id}
              type={SetlistType.PAST}
              title={setlist.title}
              date={setlist.date}
              status={setlist.status}
              imageUrl={setlist.imgUrl}
              setlistId={setlist.id}
              concertId={concertId}
            />
          ))}
        </div>
      ) : (
        <EmptySetList type={SetlistType.PAST} />
      )}
    </div>
  );
}

export default PastSetList;
