import { useNavigate } from "react-router-dom";
import SongPlayIcon from "../../../shared/assets/SongPlayIcon.svg";
import { useSetRecoilState } from "recoil";
import { setlistIdState } from "../../../entities/recoil/atoms/setlistIdState";

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
      className="flex w-full aspect-[331/62] cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={imageUrl}
        alt="Empty Icon"
        className="object-cover ml-5 rounded-6"
      />
      <div className="flex flex-col justify-center my-12 ml-10 space-y-10">
        <p className="text-grayScaleWhite text-caption-lg font-semibold font-NotoSansKR">
          {paddedIndex}. {title}
        </p>
        <p className="text-grayScaleWhite text-caption-ssm font-regular font-NotoSansKR">
          {artist}
        </p>
      </div>
      <img
        src={SongPlayIcon}
        alt="Play Icon"
        className="my-15 object-cover ml-auto mr-5"
      />
    </div>
  );
}

export default SetlistSongItem;
