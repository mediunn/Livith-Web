import { useState } from "react";
import HelpIcon from "../../../shared/assets/HelpIcon.svg";
import HelpModal from "../../../shared/ui/HelpModal";
import ConcertAddIcon from "../../../shared/assets/ConcertAddIcon.svg";

function ConcertSettingEmpty() {
  const [isHelpPopupOpen, setIsHelpPopupOpen] = useState(false);

  const toggleHelpPopup = () => {
    setIsHelpPopupOpen((prev) => !prev);
  };

  return (
    <div className="pt-24">
      <div className="flex justify-between">
        <p className="text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR ml-16">
          관심있는 콘서트를
          <br />
          설정해 주세요
        </p>
        <button
          className="w-24 h-24 mt-7 mr-16 p-0 bg-transparent border-none cursor-pointer"
          onClick={toggleHelpPopup}
        >
          <img src={HelpIcon} alt="help" className="w-full h-full" />
        </button>
      </div>
      <button className="w-full aspect-[343/167] mt-24 pl-16 pr-16 p-0 bg-transparent border-none cursor-pointer">
        <img src={ConcertAddIcon} alt="concert add" className="w-full h-full" />
      </button>

      {isHelpPopupOpen && (
        <HelpModal onClose={() => setIsHelpPopupOpen(false)}>
          <div className="pt-19 pl-24">
            <p className="pb-16 text-grayScaleBlack30 text-body-lgs font-regular font-NotoSansKR">
              설정 시 콘서트 정보를 홈에서
              <br />한 눈에 제공해줘요.
            </p>
            <p className="pb-16 text-grayScaleBlack30 text-body-lgs font-regular font-NotoSansKR">
              현재는 메인 콘서트
              <br />
              하나만 설정 가능해요.
            </p>
            <p className="text-grayScaleBlack30 text-body-lgs font-regular font-NotoSansKR">
              콘서트 당일 이후에는
              <br />
              다시 초기화 돼요!
            </p>
          </div>
        </HelpModal>
      )}
    </div>
  );
}

export default ConcertSettingEmpty;
