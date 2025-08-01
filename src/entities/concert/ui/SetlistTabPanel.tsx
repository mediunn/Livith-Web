import { useNavigate } from "react-router-dom";
import { Setlist } from "../api/getSetlistInfo";
import SetListCard from "../../../entities/setlist/ui/SetListCard";
import formatDate from "../../../features/setlist/utils/formatDate";

interface SetlistTabPanelProps {
  setlist: Setlist[] | null;
  concertId: number;
}

function SetlistTabPanel({ setlist, concertId }: SetlistTabPanelProps) {
  const navigate = useNavigate();

  return (
    <div className="mx-16 pb-54">
      <div className="pt-24 pb-20">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
          콘서트 셋리스트로
          <br />
          콘서트를 즐겨요
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-10 gap-y-24">
        {setlist &&
          setlist.map((setlistItem) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(`/setlist/${setlistItem.id}/${concertId}`);
              }}
            >
              <div className="w-full aspect-[108/158] relative">
                {setlistItem.imgUrl ? (
                  <img
                    src={setlistItem.imgUrl}
                    alt="이미지"
                    className="w-full h-full rounded-6 object-cover"
                  />
                ) : (
                  <div className="w-full bg-grayScaleBlack80 rounded-6" />
                )}
                {setlistItem.status && (
                  <div className="absolute top-10 left-10 inline-flex items-center justify-center h-30 bg-grayScaleBlack90 rounded-24 px-13 ">
                    <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
                      {setlistItem.status}
                    </p>
                  </div>
                )}

                <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR mt-8 line-clamp-2">
                  {setlistItem.title}
                </p>
                <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR mt-10 line-clamp-1">
                  {formatDate(setlistItem.startDate)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SetlistTabPanel;
