import SongPlayIcon from "../../../shared/assets/SongPlayIcon.svg";

interface SetlistSongItemProps {
  title: string;
  artist: string;
  orderIndex: number;
  // imageUrl: string;
  songId: number;
  setlistId: number;
  onClick?: () => void;
}
function SetlistSongItem({
  title,
  artist,
  // imageUrl,
  orderIndex,
  onClick,
}: SetlistSongItemProps) {
  const paddedIndex = orderIndex.toString().padStart(2, "0");

  return (
    <div
      className={`rounded-6 hover:bg-grayScaleBlack100 bg-grayScaleBlack90 flex items-center w-full aspect-[331/62] ${onClick ? "cursor-pointer" : "cursor-default"}`}
      onClick={onClick}
    >
      {/* <img
        src={imageUrl}
        className=" w-[62px] h-[62px] object-cover ml-5 rounded-6"
      /> */}
      <div className="flex flex-col justify-center space-y-4">
        <p className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR ">
          {paddedIndex}. {title}
        </p>
        <p className="text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR">
          {artist}
        </p>
      </div>
      <img
        src={SongPlayIcon}
        className="w-[32px] h-[32px] my-15 object-cover ml-auto mr-3"
      />
    </div>
  );
}

export default SetlistSongItem;
