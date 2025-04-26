import ConcertRightArrow from "../shared/assets/ConcertRightArrow.svg";
import SetListCard from "../shared/ui/SetListCard";

function SetList() {
  return (
    <div>
      <div className="flex item-center justify-between w-375">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-25 mb-19 ml-16">
          진행된 셋리스트
        </p>
        <button className="w-24 h-24 bg-transparent border-none p-0 mt-24 mr-16 cursor-pointer">
          <img src={ConcertRightArrow} className="w-full h-full" />
        </button>
      </div>
      <div className="ml-16 flex gap-9 pb-92">
        <SetListCard />
        <SetListCard />
        <SetListCard />
      </div>
    </div>
  );
}

export default SetList;
