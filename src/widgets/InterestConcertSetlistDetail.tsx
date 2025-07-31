import { formatKoreanDate } from "../shared/utils/formatKoreanDate";
import { Setlist } from "../entities/setlist/types";

function InterestConcertSetlistDetail({ song }: { song: Setlist }) {
  return (
    <div className="bg-grayScaleWhite rounded-10 mt-20 p-10">
      <div className="flex flex-row">
        <img src={song.imgUrl} alt="Concert" className="h-90 w-90 rounded-8" />
        <div className="ml-16 my-7 ">
          <p className="text-grayScaleBlack100 text-body-md font-medium font-NotoSansKR line-clamp-1">
            {song.title}
          </p>
          <p className="text-grayScaleBlack80 text-caption-lgs font-regular font-NotoSansKR line-clamp-1 mt-2">
            {song.artist}
          </p>
          <div className="flex flex-row space-x-6 items-center mt-10">
            <div className="bg-grayScaleBlack90 rounded-24 py-4 px-13 w-fit">
              <p className="text-grayScaleBlack30 text-caption-ssm font-regular font-NotoSansKR line-clamp-1">
                {song.venue}
              </p>
            </div>
            <div className="bg-grayScaleBlack90 rounded-24 py-4 px-13 w-fit">
              <p className="text-grayScaleBlack30 text-caption-ssm font-regular font-NotoSansKR line-clamp-1">
                {formatKoreanDate({ dateStr: song.startDate })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestConcertSetlistDetail;
