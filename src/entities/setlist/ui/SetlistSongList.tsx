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
  const handleClick = () => {
    window.amplitude.track("click_report_setlist");
    window.location.href = "https://forms.gle/aMj5C4LhDcMzueWz5";
  };
  const { data: songs, isLoading, isError } = useSetlistSongList({ setlistId });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="mx-16 mt-30 pb-30">
      <div className="flex flex-row justify-between items-end">
        <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          {setlistType === SetlistType.EXPECTED ? "예상" : ""} 셋리스트
        </p>
        <div
          onClick={handleClick}
          className="bg-grayScaleBlack100 rounded-24 border border-solid border-grayScaleBlack80 cursor-pointer"
        >
          <p className="px-13 py-4 text-grayScaleBlack50 text-Caption1-Bold font-bold font-NotoSansKR">
            정보 제보
          </p>
        </div>
      </div>
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
                  window.amplitude.track("click_song_cell");
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
