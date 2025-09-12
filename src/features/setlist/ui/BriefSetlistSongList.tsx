import useSetlistSongList from "../model/useSetlistSongList";
import SetlistSongItem from "../../../entities/setlist/ui/SetlistSongItem";
import EmptySongList from "./EmptySongList";
import MoreIcon from "../../../shared/assets/More.svg";
import MiniArrowIcon from "../../../shared/assets/MiniArrow.svg";
import { useNavigate } from "react-router-dom";

type BriefSetlistSongListProps = {
  setlistId: number;
  concertId: number;
  setlistTitle: string;
};

function BriefSetlistSongList({
  setlistId,
  concertId,
  setlistTitle,
}: BriefSetlistSongListProps) {
  const { data: songs, isLoading, isError } = useSetlistSongList({ setlistId });

  const navigate = useNavigate();
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (isError) {
  //   return <div>Error...</div>;
  // }

  return songs?.length === 0 ? (
    <EmptySongList />
  ) : (
    <div className="mt-20 pt-20 space-y-10 bg-grayScaleBlack90 rounded-10 flex flex-col items-center">
      <div className="px-20 w-full">
        {songs?.slice(0, 3)?.map((song) => (
          <SetlistSongItem
            key={song.id}
            songId={song.id}
            title={song.title}
            artist={song.artist}
            orderIndex={song.orderIndex}
            setlistId={setlistId}
            onClick={() => {
              window.amplitude.track("click_setlist_song_main");
              navigate(`/songs/${song.id}`);
            }}
          />
        ))}
      </div>
      {/* <img src={MoreIcon} alt="More Icon" /> */}
      <div
        onClick={() => {
          window.amplitude.track("click_more_songs_main");
          navigate(`/setlist/${setlistId}/${concertId}`, {
            state: { setlistTitle },
          });
        }}
        className="h-57 w-full flex flex-col justify-center bg-grayScaleBlack80 rounded-b-10 cursor-pointer"
      >
        <div className="flex flex-row text-grayScaleBlack50 justify-center space-x-8">
          <p className="text-Body4-re font-regular font-NotoSansKR ">
            더 많은 노래를 확인해 보세요
          </p>
          <img src={MiniArrowIcon} alt="Mini Arrow Icon" />
        </div>
      </div>
    </div>
  );
}

export default BriefSetlistSongList;
