import { useNavigate } from "react-router-dom";
import { SetlistType } from "../../entities/setlist/types";

interface SetListCardProps {
  type: SetlistType;
  title: string;
  date: string;
  status: string;
  imageUrl?: string;
  setlistId: number;
  concertId: number;
}

function SetListCard({
  type,
  title,
  date,
  status,
  imageUrl,
  setlistId,
  concertId,
}: SetListCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className="basis-0 flex-grow min-w-[108px] max-w-[132px] cursor-pointer"
      onClick={() => {
        navigate(`/setlist/${setlistId}/${concertId}`);
      }}
    >
      <div className="aspect-[108/158] relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="이미지"
            className="w-full h-full rounded-6 object-cover"
          />
        ) : (
          <div className="w-full bg-grayScaleBlack80 rounded-6" />
        )}
        <div className="absolute top-10 left-10 inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13 ">
          <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
            {status}
          </p>
        </div>
        {type === SetlistType.PAST ? (
          <>
            <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR mt-8 mb-0 line-clamp-1">
              {title}
            </p>
            <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR mt-8 mb-0 line-clamp-1">
              {date}
            </p>
          </>
        ) : (
          <p className="text-grayScaleBlack30 text-body-md font-medium font-NotoSansKR mt-8 mb-0 line-clamp-1">
            {date}
          </p>
        )}
      </div>
    </div>
  );
}

export default SetListCard;
