import BriefSetlistSongList from "./BriefSetlistSongList";
import { SetlistType } from "../../../entities/setlist/types";
import useInterestConcertSetlist from "../model/useInterestConcertSetlist";
import EmptySetList from "./EmptySetList";
import InterestConcertSetlistDetail from "../../../widgets/InterestConcertSetlistDetail";

interface InterestConcertSetlistProps {
  concertId: number;
}

function InterestConcertSetlist({ concertId }: InterestConcertSetlistProps) {
  const {
    data: setlist,
    isLoading,
    isError,
  } = useInterestConcertSetlist({ concertId: Number(concertId) });
  if (isLoading) {
    return null;
  }
  if (isError) {
    return null;
  }

  let label1 = "";
  let label2 = "";

  if (!setlist || setlist!.id === undefined) {
    return <EmptySetList />;
  } else if (setlist.type === SetlistType.EXPECTED) {
    label1 = "이전 콘서트를 기반으로";
    label2 = "이런 노래를 예상해요";
  } else {
    label1 = "이전 콘서트에서";
    label2 = "어떤 노래를 불렀을까요?";
  }

  return (
    <div className="mx-16 pb-38">
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
        setlistTitle={setlist.title}
      />
    </div>
  );
}

export default InterestConcertSetlist;
