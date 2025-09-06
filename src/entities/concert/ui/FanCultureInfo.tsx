import FanCultureSwiper from "./FanCultureSwiper";
import { ConcertCulture } from "../api/getConcertCulture";

interface FanCultureInfoProps {
  concertCulture: ConcertCulture[];
  cultureCount: number;
}

function FanCultureInfo({ concertCulture, cultureCount }: FanCultureInfoProps) {
  const handleClick = () => {
    window.amplitude.track("click_report_fan_tips");
    window.location.href = "https://forms.gle/aMj5C4LhDcMzueWz5";
  };
  return (
    <>
      <div className="mx-16">
        <div className="pt-30 pb-20 flex justify-between items-end">
          <div>
            <div className="flex">
              <div className="inline-flex items-center justify-center bg-mainYellow30 rounded-4">
                <p className="px-7 text-grayScaleBlack100 text-Body1-sm font-semibold font-NotoSansKR">
                  {cultureCount}개
                </p>
              </div>
              <p className="ml-4 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
                의 팬문화와
              </p>
            </div>
            <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
              꿀팁을 알아봐요
            </p>
          </div>
          <div
            onClick={handleClick}
            className="bg-grayScaleBlack100 rounded-24 border border-solid border-grayScaleBlack80 cursor-pointer"
          >
            <p className="px-13 py-4 text-grayScaleBlack50 text-Caption1-Bold font-bold font-NotoSansKR">
              정보 제보
            </p>
          </div>
        </div>
      </div>
      <FanCultureSwiper concertCulture={concertCulture} />
    </>
  );
}

export default FanCultureInfo;
