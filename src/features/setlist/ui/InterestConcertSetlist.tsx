import BriefSetlistSongList from "./BriefSetlistSongList";
import { SetlistType } from "../../../entities/setlist/types";
import useInterestConcertSetlist from "../model/useInterestConcertSetlist";
import EmptySetList from "./EmptySetList";
import InterestConcertSetlistDetail from "../../../widgets/InterestConcertSetlistDetail";

function InterestConcertSetlist() {
  //로컬스토리지에서 콘서트 아이디 가져오기
  const concertId = localStorage.getItem("InterestConcertId");
  const {
    data: setlist,
    isLoading,
    isError,
  } = useInterestConcertSetlist({ concertId: Number(concertId) });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  let label1 = "";
  let label2 = "";

  if (!setlist || !setlist!.id) {
    return null;
  } else if (setlist.type === SetlistType.EXPECTED) {
    label1 = "이전 콘서트를 기반으로";
    label2 = "어런 노래를 예상해요";
  } else {
    label1 = "이전 콘서트에서";
    label2 = "어떤 노래를 불렀을까요?";
  }

  return (
    <div className="mx-16 pb-38">
      {!setlist || !setlist!.id ? (
        <EmptySetList />
      ) : (
        <>
          <div className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR mt-24">
            <p>{label1}</p>
            <p>{label2}</p>
          </div>
          {setlist.type !== SetlistType.EXPECTED ? (
            <InterestConcertSetlistDetail setlist={setlist} />
          ) : null}
          <BriefSetlistSongList
            setlistId={setlist.id}
            concertId={Number(concertId)}
          />
        </>
      )}
    </div>
  );
}

export default InterestConcertSetlist;
