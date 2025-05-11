import SetlistSongItem from "./SetlistSongItem";

function SetlistSongList() {
  return (
    <div className="mx-16 mt-30">
      <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mb-18">
        셋리스트 목록
      </p>
      <div className="space-y-10 px-6 py-10 bg-grayScaleBlack90 rounded-10">
        <SetlistSongItem />
        <SetlistSongItem />
      </div>
    </div>
  );
}

export default SetlistSongList;
