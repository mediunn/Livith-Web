import { useNavigate } from "react-router-dom";
import { ConcertStatus } from "../entities/concert/types";
import ConcertSlide from "../features/ConcertSlide";
import ConcertRightArrow from "../shared/assets/ConcertRightArrow.svg";

function PrevConcert() {
  const navigate = useNavigate();
  return (
    <div className="pb-92">
      <div className="flex item-center justify-between w-full">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-30 mb-19 ml-16">
          한 달 이내 진행했던 콘서트
        </p>
        <button className="w-24 h-24 bg-transparent border-none p-0 mt-30 mr-16 cursor-pointer">
          <img
            src={ConcertRightArrow}
            className="w-full h-full"
            onClick={() => navigate(`/concerts/${ConcertStatus.COMPLETED}`)}
          />
        </button>
      </div>
      <ConcertSlide status={ConcertStatus.COMPLETED} />
    </div>
  );
}

export default PrevConcert;
