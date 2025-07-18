import ConcertTicketArrowIcon from "../../../shared/assets/ConcertTicketArrowIcon.svg";

function ConcertSetting() {
  return (
    <div>
      <div className="pt-24 pb-18 flex justify-between">
        <p className="ml-27 text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR">
          내가 관심있는 콘서트👀
        </p>
        <button className="mr-16 text-grayScaleBlack50 text-body-lgs font-regular font-NotoSansKR bg-transparent border-none cursor-pointer">
          수정하기
        </button>
      </div>

      <div className="w-full h-539 flex justify-center bg-grayScaleBlack90">
        <div className="relative w-327 h-438 mt-24">
          {/* 배경 이미지 + 마스크 */}
          <div
            className="w-full h-full"
            style={{
              WebkitMaskImage: "url('/ConcertTicketMask.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskImage: "url('/ConcertTicketMask.svg')",
              maskRepeat: "no-repeat",
              maskSize: "cover",
              backgroundImage:
                "url('https://cdn.imweb.me/thumbnail/20250530/bafd11a557308.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {/* 그라데이션 + 마스크 */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-grayScaleBlack100 to-transparent pointer-events-none"
            style={{
              WebkitMaskImage: "url('/ConcertTicketMask.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskImage: "url('/ConcertTicketMask.svg')",
              maskRepeat: "no-repeat",
              maskSize: "cover",
            }}
          />

          <div className="absolute bottom-26 left-19">
            <p className="text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR">
              호시노 겐 콘서트
            </p>
            <p className="pt-2 text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR">
              <span className="text-mainYellow30">두 달</span> 앞으로
              다가왔어요!
            </p>

            <div className="pt-18 w-270 border-b border-dashed border-grayScaleBlack50 opacity-50" />

            <p className="pt-18 text-grayScaleBlack30 text-body-lgs font-regular font-NotoSansKR">
              2025.09.13 ~ 2025.09.14
            </p>
            <p className="pt-4 text-grayScaleBlack30 text-body-lgs font-regular font-NotoSansKR">
              올림픽공원 올림픽홀
            </p>
          </div>

          <button className="absolute bottom-26 right-16 w-46 h-46 bg-transparent border-none cursor-pointer">
            <img
              src={ConcertTicketArrowIcon}
              alt="concert ticket arrow"
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConcertSetting;
