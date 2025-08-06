import { formatKoreanDate } from "../shared/utils/formatKoreanDate";
import { Setlist } from "../entities/setlist/types";

function InterestConcertSetlistDetail({ setlist }: { setlist: Setlist }) {
  return (
    <div className="bg-grayScaleWhite rounded-10 mt-20 p-10">
      <div className="flex flex-row">
        <img
          src={setlist.imgUrl}
          alt="Concert"
          className="h-90 w-90 rounded-8"
        />
        <div className="ml-16 my-7 ">
          <p className="text-grayScaleBlack100 text-Body2-md font-medium font-NotoSansKR line-clamp-1">
            {setlist.title}
          </p>
          <p className="text-grayScaleBlack80 text-Caption1-sms font-regular font-NotoSansKR line-clamp-1 mt-2">
            {setlist.artist}
          </p>
          <div className="flex flex-row space-x-6 items-center mt-10">
            <div className="bg-grayScaleBlack90 rounded-24 py-4 px-13 w-fit">
              <p className="text-grayScaleBlack30 text- Caption2-re font-regular font-NotoSansKR line-clamp-1">
                {setlist.venue}
              </p>
            </div>
            <div className="bg-grayScaleBlack90 rounded-24 py-4 px-13 w-fit">
              <p className="text-grayScaleBlack30 text- Caption2-re font-regular font-NotoSansKR line-clamp-1">
                {formatKoreanDate({ dateStr: setlist.startDate })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestConcertSetlistDetail;
