import { useNavigate } from "react-router-dom";
import ConcertRightArrow from "../assets/ConcertRightArrow.svg";
import { SetlistType } from "../../entities/setlist/types";

function OngoingSetList() {
  const navigate = useNavigate();
  const concertId = 1; // 추후 API 연동 시 데이터로 대체
  return (
    <div>
      <div className="flex item-center justify-between w-full">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-25 mb-19 ml-16">
          진행된 셋리스트
        </p>
        <button className="w-24 h-24 bg-transparent border-none p-0 mt-24 mr-16 cursor-pointer">
          <img
            src={ConcertRightArrow}
            className="w-full h-full"
            onClick={() =>
              navigate(`/setlists/${SetlistType.ONGOING}/${concertId}`)
            }
          />
        </button>
      </div>
      <div className="ml-16 flex gap-9 pb-92">
        {/* 추후 API 연동 시 props 추가 */}
        {/* <SetListCard />
        <SetListCard />
        <SetListCard />
        <SetListCard /> */}
      </div>
    </div>
  );
}

export default OngoingSetList;
