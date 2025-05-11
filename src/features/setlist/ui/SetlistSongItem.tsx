import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";
import SongPlayIcon from "../../../shared/assets/SongPlayIcon.svg";
function SetlistSongItem() {
  return (
    <div className="flex w-full aspect-[331/62]">
      <img
        src={EmptyIcon}
        alt="Empty Icon"
        className="object-cover ml-5 round-6"
      />
      <div className="my-12 ml-10 space-y-10">
        <p className="text-grayScaleWhite text-caption-lg font-semibold font-NotoSansKR">
          01. 노래제목
        </p>
        <p className="text-grayScaleWhite text-caption-ssm font-regular font-NotoSansKR">
          아티스트
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
