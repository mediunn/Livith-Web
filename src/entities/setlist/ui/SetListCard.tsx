import { useNavigate } from "react-router-dom";
import { SetlistType } from "../types";

interface SetListCardProps {
  type: SetlistType;
  title: string;

  status: string;
  imageUrl?: string;
  setlistId: number;
  concertId: number;
}

function SetListCard({
  type,
  title,

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
        navigate(`/setlist/${setlistId}/${concertId}`, {
          state: { setlistTitle: title },
        });
      }}
    >
      <div className="aspect-[108/158] relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            className="w-full h-full rounded-6 object-cover"
          />
        ) : (
          <div className="w-full bg-grayScaleBlack80 rounded-6" />
        )}
        <div className="absolute top-10 left-10 inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13 ">
          <p className="text-grayScaleBlack30 text-Caption1-sm font-semibold font-NotoSansKR">
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SetListCard;
