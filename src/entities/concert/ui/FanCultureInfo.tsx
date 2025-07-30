import { useState } from "react";
import FanCultureSwiper from "./FanCultureSwiper";

interface FanCultureInfoProps {
  concertId: number;
}

function FanCultureInfo({ concertId }: FanCultureInfoProps) {
  const [cultureCount, setCultureCount] = useState(0);

  return (
    <>
      <div className="mx-16">
        <div className="pt-24 pb-20">
          <div className="flex">
            <div className="inline-flex items-center justify-center bg-mainYellow30 rounded-4">
              <p className="px-7 text-grayScaleBlack100 text-body-lg font-semibold font-NotoSansKR">
                {cultureCount}개
              </p>
            </div>
            <p className="ml-4 text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
              의 팬문화와
            </p>
          </div>
          <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
            꿀팁을 한 눈에 알아봐요
          </p>
        </div>
      </div>
      <FanCultureSwiper
        concertId={concertId}
        onCultureCountChange={setCultureCount}
      />
    </>
  );
}

export default FanCultureInfo;
