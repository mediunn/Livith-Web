import InstagramIcon from "../../../shared/assets/InstagramIcon.svg";
import FanCultureSwiper from "./FanCultureSwiper";

function ConcertTabPanel() {
  return (
    <>
      <div className="mx-16">
        <div className="pt-24 pb-20">
          <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
            다가온 콘서트 일정을
            <br />
            확인해 보세요
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-between pl-15 pr-16 w-full h-64 bg-grayScaleBlack90 rounded-8 border border-solid border-grayScaleBlack80">
            <div className="flex items-center">
              <div className="h-30 px-13 py-8 bg-mainYellow30 rounded-24 text-grayScaleBlack100 text-caption-lg font-semibold font-NotoSansKR">
                D-1
              </div>
              <p className="pl-8 text-grayScaleWhite text-body-sm font-semibold font-NotoSansKR">
                티켓팅 오픈
              </p>
            </div>
            <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
              6/30(월) 7:00PM
            </p>
          </div>

          <div className="flex items-center justify-between pl-15 pr-16 w-full h-64 bg-grayScaleBlack90 rounded-8 border border-solid border-grayScaleBlack80">
            <div className="flex items-center">
              <div className="h-30 px-13 py-8 bg-mainYellow30 rounded-24 text-grayScaleBlack100 text-caption-lg font-semibold font-NotoSansKR">
                D-30
              </div>
              <p className="pl-8 text-grayScaleWhite text-body-sm font-semibold font-NotoSansKR">
                MD 오픈
              </p>
            </div>
            <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
              7/31(화) 1:00PM
            </p>
          </div>

          <div className="flex items-center justify-between pl-15 pr-16 w-full h-64 bg-grayScaleBlack90 rounded-8 border border-solid border-grayScaleBlack80">
            <div className="flex items-center">
              <div className="h-30 px-13 py-8 bg-mainYellow30 rounded-24 text-grayScaleBlack100 text-caption-lg font-semibold font-NotoSansKR">
                D-81
              </div>
              <p className="pl-8 text-grayScaleWhite text-body-sm font-semibold font-NotoSansKR">
                콘서트
              </p>
            </div>
            <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
              9/13(토) 2:00PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConcertTabPanel;
