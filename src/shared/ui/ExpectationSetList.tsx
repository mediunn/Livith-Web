import { useEffect, useState } from "react";
import { getSetlistCollection } from "../../features/setlist/api/getSetlistCollection";
import { Setlist, SetlistType } from "../../entities/setlist/types";
import EmptySetList from "./EmptySetList";

type ExpectationSetListProps = {
  concertId: number;
};

function ExpectationSetList({ concertId }: ExpectationSetListProps) {
  const [setlists, setSetlists] = useState<Setlist[] | null>(null);

  useEffect(() => {
    async function fetchSetList() {
      try {
        const res = await getSetlistCollection({
          type: SetlistType.EXPECTED,
          concertId,
        });
        if (Array.isArray(res.data.data)) {
          setSetlists(res.data.data);
        } else if (res.data.data) {
          setSetlists([res.data.data]);
        } else {
          setSetlists([]);
        }
      } catch (error) {
        console.error("예상 셋리스트 호출 실패: ", error);
        setSetlists([]);
      }
    }

    fetchSetList();
  }, [concertId]);

  return (
    <div className="w-full ml-16 pr-32">
      <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-25 mb-14">
        예상 셋리스트
      </p>
      {setlists && setlists.length > 0 ? (
        <div className="w-full h-135 bg-grayScaleBlack80 rounded-6"></div>
      ) : (
        <EmptySetList type={SetlistType.EXPECTED} />
      )}
    </div>
  );
}

export default ExpectationSetList;
