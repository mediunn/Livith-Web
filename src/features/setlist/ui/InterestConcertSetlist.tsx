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

  let status = "";

  if (!setlist || !setlist!.id) {
    status = "";
  } else if (setlist.type === SetlistType.EXPECTED) {
    status = "예상";
  } else {
    status = "이전";
  }

  return (
    <div className="mx-16 pb-38">
      {!setlist || !setlist!.id ? (
        <EmptySetList />
      ) : (
        <>
          <div className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR mt-24">
            <p>{status} 콘서트 셋리스트를</p>
            <p>참고해 보세요</p>
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
