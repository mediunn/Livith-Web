import { useNavigate } from "react-router-dom";
import { Setlist } from "../api/getSetlistInfo";
import SetListCard from "../../../entities/setlist/ui/SetListCard";
import formatDate from "../../../features/setlist/utils/formatDate";
import EmptyConcertCardIcon from "../../../shared/assets/EmptyConcertCardIcon.svg";
interface SetlistTabPanelProps {
  setlist: Setlist[] | null;
  concertId: number;
}

function SetlistTabPanel({ setlist, concertId }: SetlistTabPanelProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = "https://forms.gle/aMj5C4LhDcMzueWz5";
  };
  return (
    <div className="mx-16 pb-54">
      <div className="pt-24 pb-20 flex flex-row justify-between items-end">
        <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          셋리스트를
          <br />
          확인해 보세요
        </p>
        <div
          onClick={handleClick}
          className="bg-grayScaleBlack100 rounded-24 border border-solid border-grayScaleBlack80 cursor-pointer"
        >
          <p className="px-13 py-4 text-grayScaleBlack50 text-Caption1-Bold font-bold font-NotoSansKR">
            정보 제보
          </p>
        </div>
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
                    className="w-full h-full rounded-6 object-cover bg-grayScaleBlack80"
                    onError={(e) => {
                      e.currentTarget.src = EmptyConcertCardIcon;
                    }}
                  />
                ) : (
                  <img
                    src={EmptyConcertCardIcon}
                    alt="empty"
                    className="w-full h-full rounded-6 object-cover bg-grayScaleBlack80"
                  />
                )}
                {setlistItem.status && (
                  <div className="absolute top-10 left-10 inline-flex items-center justify-center h-30 bg-grayScaleBlack90 rounded-24 px-13 ">
                    <p className="text-grayScaleBlack30 text-Caption1-sm font-semibold font-NotoSansKR">
                      {setlistItem.status}
                    </p>
                  </div>
                )}

                <p className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR mt-8 line-clamp-2">
                  {setlistItem.title}
                </p>
                <p className="text-grayScaleBlack30 text-Caption1-sm font-semibold font-NotoSansKR mt-10 line-clamp-1">
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
