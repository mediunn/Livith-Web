import EmptyIcon from "../shared/assets/EmptyIcon.svg";

function NextConcert() {
  return (
    <div>
      <div className="flex item-center justify-between w-375">
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-30 mb-19 ml-16">
          곧 진행하는 콘서트
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-90 mb-90">
        <img src={EmptyIcon} className="w-50 h-40" />
        <p className="text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR text-center mt-16 mb-0">
          곧 진행하는
          <br />
          콘서트가 없어요
        </p>
      </div>
    </div>
  );
}

export default NextConcert;
