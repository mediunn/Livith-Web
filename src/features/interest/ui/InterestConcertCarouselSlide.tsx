import cardMask from "../../../shared/assets/InterestConcertCarousel.svg";
import ConcertDateIcon from "../../../shared/assets/ConcertDateIcon.svg";
import ConcertVenueIcon from "../../../shared/assets/ConcertVenueIcon.svg";
import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";

function InterestConcertCarouselSlide() {
  return (
    <div className="w-full  mb-40 flex items-center">
      <div className="w-full cursor-pointer relative">
        <img src={cardMask} className="w-full h-full object-contain" />

        <div className="absolute inset-0 p-16 flex flex-col gap-16">
          <div className="flex gap-10">
            <img
              src={EmptyIcon}
              className="w-84 h-112 rounded-4 object-cover flex-shrink-0"
            />
            <div>
              <div className="inline-flex items-center justify-center px-10 py-4 rounded-24 bg-mainYellow30">
                <p className="text-grayScaleBlack100 text-Caption1-Bold font-bold font-NotoSansKR">
                  공연 D-20
                </p>
              </div>
              <p className="pt-6 text-grayScaleBlack5 text-Body1-sm font-semibold font-NotoSansKR">
                원 오크 록 내한공연
              </p>

              <div className="pt-9 flex items-center">
                <img src={ConcertDateIcon} className="w-24 h-24" />
                <p className="pl-4 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
                  2025.09.13 ~ 09.14
                </p>
              </div>

              <div className="flex items-center">
                <img src={ConcertVenueIcon} className="w-24 h-24" />
                <p className="pl-4 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
                  잠실 실내 체육관
                </p>
              </div>
            </div>
          </div>
          <p className="absolute bottom-[11%] left-1/2 -translate-x-1/2 whitespace-nowrap text-grayScaleBlack30 text-Body3-md font-medium font-NotoSansKR text-center">
            선예매 오픈 · 9/14(일) 2:00PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterestConcertCarouselSlide;
