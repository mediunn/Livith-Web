import { useSetRecoilState } from "recoil";
import useSetlistSongList from "../../../features/setlist/model/useSetlistSongList";
import EmptySongList from "../../../features/setlist/ui/EmptySongList";
import SetlistSongItem from "./SetlistSongItem";
import { setlistIdState } from "../../../entities/recoil/atoms/setlistIdState";
import { useNavigate } from "react-router-dom";
import { SetlistType } from "../types";

type SetlistSongListProps = {
  setlistId: number;
  setlistType: string | null;
};

function SetlistSongList({ setlistId, setlistType }: SetlistSongListProps) {
  const setSetlistId = useSetRecoilState(setlistIdState);
  const navigate = useNavigate();
  const { data: songs, isLoading, isError } = useSetlistSongList({ setlistId });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="mx-16 mt-30 pb-30">
      <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
        {setlistType === SetlistType.EXPECTED ? "예상" : ""} 셋리스트
      </p>
      {songs?.length === 0 ? (
        <EmptySongList />
      ) : (
        <div className="mt-24 space-y-10 px-21 py-11 bg-grayScaleBlack90 rounded-10">
          {songs?.map((song) => (
            <SetlistSongItem
              key={song.id}
              songId={song.id}
              title={song.title}
              artist={song.artist}
              orderIndex={song.orderIndex}
              setlistId={setlistId}
              onClick={() => {
                {
                  setSetlistId(setlistId);
                  navigate(`/songs/${song.id}`);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SetlistSongList;
