import BriefSetlistSongList from "./BriefSetlistSongList";
import { SetlistType } from "../../../entities/setlist/types";
import useInterestConcertSetlist from "../model/useInterestConcertSetlist";
import EmptySetList from "./EmptySetList";
import InterestConcertSetlistDetail from "../../../widgets/InterestConcertSetlistDetail";

function InterestConcertSetlist() {
  //로컬스토리지에서 콘서트 아이디 가져오기
  const concertId = localStorage.getItem("InterestConcertId");
  const {
    data: song,
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

  if (!song) {
    status = "";
  } else if (song.type === SetlistType.EXPECTED) {
    status = "예상";
  } else {
    status = "이전";
  }

  return (
    <div className="mx-16 pb-38">
      <div className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-24">
        <p>{status} 콘서트 셋리스트를</p>
        <p>확인해 보세요!</p>
      </div>
      {!song ? (
        <EmptySetList />
      ) : (
        <>
          {song.type !== SetlistType.EXPECTED ? (
            <InterestConcertSetlistDetail song={song} />
          ) : null}
          <BriefSetlistSongList setlistId={song.id} />
        </>
      )}
    </div>
  );
}

export default InterestConcertSetlist;
