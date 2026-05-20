import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group cursor-pointer rounded-6 hover:bg-grayScaleBlack100 bg-grayScaleBlack90 flex items-center w-full aspect-[331/62] ${onClick ? "cursor-pointer" : "cursor-default"}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      <PlayIcon
        iconColor={isHovered ? "#FFEB56" : "#FFFF97"}
        iconBackgroundColor={isHovered ? "#2F3745" : "#14171B"}
        className="w-[32px] h-[32px] my-15 ml-auto mr-3 transition-all duration-200"
      />
    </div>
  );
}

export default SetlistSongItem;
