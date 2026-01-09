import { formatKoreanDate } from "../shared/utils/formatKoreanDate";
import { Setlist } from "../entities/setlist/types";
import { ChipInfo } from "../shared/ui/ChipInfo";

function InterestConcertSetlistDetail({ setlist }: { setlist: Setlist }) {
  return (
    <div className="bg-grayScaleWhite rounded-10 mt-20 p-10">
      <div className="flex flex-row items-center">
        {setlist.imgUrl && (
          <img src={setlist.imgUrl} className="h-90 w-90 rounded-8 mr-16 " />
        )}
        <div className="my-7 ">
          <p className="text-grayScaleBlack100 text-Body2-md font-medium font-NotoSansKR line-clamp-1">
            {setlist.title}
          </p>
          <p className="text-grayScaleBlack80 text-Body4-re font-regular font-NotoSansKR line-clamp-1 mt-2">
            {setlist.artist}
          </p>
          <div className="flex flex-row space-x-6 items-center mt-10">
            <ChipInfo label={setlist.venue} textStyle="caption2Regular" />
            <ChipInfo
              label={formatKoreanDate({ dateStr: setlist.startDate })}
              textStyle="caption2Regular"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestConcertSetlistDetail;
