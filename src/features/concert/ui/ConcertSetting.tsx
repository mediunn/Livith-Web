import HelpIcon from "../../../shared/assets/HelpIcon.svg";

function ConcertSetting() {
  return (
    <div className="pt-24 pb-18">
      <div className="flex justify-between">
        <p className="ml-27 text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR">
          내가 관심있는 콘서트👀
        </p>
        <button className="mr-16 text-grayScaleBlack50 text-body-lgs font-regular font-NotoSansKR bg-transparent border-none cursor-pointer">
          수정하기
        </button>
      </div>
    </div>
  );
}

export default ConcertSetting;
