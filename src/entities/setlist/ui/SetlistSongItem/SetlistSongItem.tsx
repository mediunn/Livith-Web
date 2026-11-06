import PlayIcon from "../../../../shared/assets/PlayIcon";

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
    <button
      type="button"
      className={`rounded-6 bg-grayScaleBlack90 flex items-center w-full p-8 min-h-62 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mainYellow30 ${onClick ? "cursor-pointer [@media(hover:hover)_and_(pointer:fine)]:hover:bg-grayScaleBlack80 active:!bg-grayScaleBlack100" : "cursor-default"}`}
      onClick={onClick}
    >
      {/* <img
        src={imageUrl}
        className=" w-[62px] h-[62px] object-cover ml-5 rounded-6"
      /> */}
      <span className="flex flex-col justify-center space-y-4">
        <span className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR ">
          {paddedIndex}. {title}
        </span>
        <span className="text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR">
          {artist}
        </span>
      </span>
      <PlayIcon className="w-[32px] h-[32px] ml-auto shrink-0" />
    </button>
  );
}

export default SetlistSongItem;
