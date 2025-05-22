import { useEffect, useState } from "react";
import { getSetlistCollection } from "../../features/setlist/api/getSetlistCollection";
import { Setlist, SetlistType } from "../../entities/setlist/types";
import EmptySetList from "./EmptySetList";
import { useNavigate } from "react-router-dom";

type ExpectationSetListProps = {
  concertId: number;
};

function ExpectationSetList({ concertId }: ExpectationSetListProps) {
  const navigate = useNavigate();

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
        <div className="w-full h-135">
          {setlists.map((setlist) => (
            <div
              key={setlist.id}
              className="w-full h-full relative bg-grayScaleBlack80 rounded-6 cursor-pointer"
              onClick={() => {
                navigate(`/setlist/${setlist.id}/${concertId}`);
              }}
            >
              <img
                src={setlist.imgUrl}
                alt="이미지"
                className="w-full h-full rounded-6 object-cover"
              />
              <p className="absolute top-0 w-292 ml-19 mt-15 text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
                {setlist.title} <br /> 예상 셋리스트
              </p>
            </div>
          ))}
        </div>
      ) : (
        <EmptySetList type={SetlistType.EXPECTED} />
      )}
    </div>
  );
}

export default ExpectationSetList;
