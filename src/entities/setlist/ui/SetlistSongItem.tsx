import { useNavigate } from "react-router-dom";
import SongPlayIcon from "../../../shared/assets/SongPlayIcon.svg";
import { useSetRecoilState } from "recoil";
import { setlistIdState } from "../../recoil/atoms/setlistIdState";

interface SetlistSongItemProps {
  title: string;
  artist: string;
  orderIndex: number;
  imageUrl: string;
  songId: number;
  setlistId: number;
}
function SetlistSongItem({
  title,
  artist,
  imageUrl,
  orderIndex,
  songId,
  setlistId,
}: SetlistSongItemProps) {
  const navigate = useNavigate();
  const setSetlistId = useSetRecoilState(setlistIdState);

  const handleClick = () => {
    setSetlistId(setlistId);
    navigate(`/songs/${songId}`);
  };
  const paddedIndex = orderIndex.toString().padStart(2, "0");

  return (
    <div
      className=" flex items-center w-full aspect-[331/62] cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={imageUrl}
        alt="Empty Icon"
        className=" w-[62px] h-[62px] object-cover ml-5 rounded-6"
      />
      <div className="flex flex-col justify-center my-12 ml-10 space-y-4">
        <p className="text-grayScaleWhite text-body-sm font-semibold font-NotoSansKR ">
          {paddedIndex}. {title}
        </p>
        <p className="text-grayScaleWhite text-caption-sm font-regular font-NotoSansKR">
          {artist}
        </p>
      </div>
      <img
        src={SongPlayIcon}
        alt="Play Icon"
        className="w-[32px] h-[32px] my-15 object-cover ml-auto mr-5"
      />
    </div>
  );
}

export default SetlistSongItem;
