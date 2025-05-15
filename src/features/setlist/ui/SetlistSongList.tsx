import useSetlistSongList from "../model/useSetlistSongList";
import EmptySongList from "./EmptySongList";
import SetlistSongItem from "./SetlistSongItem";

function SetlistSongList({ setlistId }: { setlistId: number }) {
  const { data: songs, isLoading, isError } = useSetlistSongList({ setlistId });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="mx-16 mt-30 ">
      <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mb-18">
        셋리스트 목록
      </p>
      {songs?.data.length === 0 ? (
        <EmptySongList />
      ) : (
        <div className="space-y-10 px-6 py-10 bg-grayScaleBlack90 rounded-10">
          {songs?.data.map((song) => (
            <SetlistSongItem
              key={song.id}
              songId={song.id}
              title={song.title}
              artist={song.artist}
              orderIndex={song.orderIndex}
              imageUrl={song.imgUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SetlistSongList;
