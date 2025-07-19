import InstagramIcon from "../../../shared/assets/InstagramIcon.svg";
import FanCultureSwiper from "./FanCultureSwiper";

function ArtistTabPanel() {
  return (
    <>
      <div className="px-16">
        <div className="pt-24 pb-17">
          <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
            가수에 대한
            <br />
            정보를 필독해요
          </p>
        </div>

        <div>
          <div className="bg-grayScaleBlack90 rounded-8 border border-grayScaleBlack80">
            <div className="relative w-full h-142 ">
              <img
                src={
                  "https://dimg.donga.com/wps/NEWS/IMAGE/2020/05/22/101174802.3.jpg"
                }
                className="w-full h-full object-cover rounded-t-8"
              ></img>
            </div>

            <div className="pt-16 pr-16 pl-16 pb-24 ">
              <div className="relative">
                <div className="inline-flex items-center justify-center bg-mainYellow30 rounded-24">
                  <p className="px-13 py-4 text-grayScaleBlack100 text-caption-smd font-semibold font-NotoSansKR">
                    일본 내한 가수
                  </p>
                </div>
                <p className="pt-8 text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
                  HOSINO GEN
                </p>
                <button className="absolute right-0 bottom-0 border-none cursor-pointer">
                  <img
                    src={InstagramIcon}
                    alt="instagram"
                    className="w-30 h-30"
                  />
                </button>
              </div>

              <div className="pt-12 w-full border-b border-dashed border-grayScaleBlack50" />

              <div>
                <p className="pt-12 text-grayScaleWhite text-caption-lg font-semibold font-NotoSansKR">
                  단순한 가수를 넘어, 연기, 음악, 글쓰기, 라디오 등 다방면에서
                  활약하는 일본의 대표적인 크리에이터
                </p>
                <div className="flex pt-20">
                  <p className="text-grayScaleWhite text-caption-lg font-semibold font-NotoSansKR">
                    출생
                  </p>
                  <p className="pl-16 text-grayScaleBlack30 text-caption-sm font-regular font-NotoSansKR">
                    1981년 1월 28일, 일본 사이타마현
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-13">
          <div className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24">
            <p className="px-13 py-4 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              다채로운 사운드
            </p>
          </div>
          <div className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24">
            <p className="px-13 py-4 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              팝
            </p>
          </div>
          <div className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24">
            <p className="px-13 py-4 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              재즈
            </p>
          </div>
          <div className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24">
            <p className="px-13 py-4 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              펑크
            </p>
          </div>
          <div className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24">
            <p className="px-13 py-4 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              시티팝
            </p>
          </div>
          <div className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24">
            <p className="px-13 py-4 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              R&B
            </p>
          </div>
          <div className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24">
            <p className="px-13 py-4 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              따뜻한 멜로디
            </p>
          </div>
          <div className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24">
            <p className="px-13 py-4 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              사소한 일상의 감정을 섬세하게
            </p>
          </div>
          <div className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24">
            <p className="px-13 py-4 text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              독특한 "겐 감성"
            </p>
          </div>
        </div>

        <div className="pt-24 pb-20">
          <div className="flex">
            <div className="inline-flex items-center justify-center bg-mainYellow30 rounded-4">
              <p className="px-7 text-grayScaleBlack100 text-body-lg font-semibold font-NotoSansKR">
                5개
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
      <FanCultureSwiper />
    </>
  );
}

export default ArtistTabPanel;
