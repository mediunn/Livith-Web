import ConcertSlide from "../features/ConcertSlide";
import ConcertRightArrow from "../shared/assets/ConcertRightArrow.svg";

function CurrentConcert() {
  return (
    <div>
      <div className="flex item-center justify-between w-375">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-36 mb-19 ml-16">
          현재 진행하는 콘서트
        </p>
        <button className="w-24 h-24 bg-transparent border-none p-0 mt-36 mr-16 cursor-pointer">
          <img src={ConcertRightArrow} className="w-full h-full" />
        </button>
      </div>
      <ConcertSlide status="current" />
    </div>
  );
}

export default CurrentConcert;
