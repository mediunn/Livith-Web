import AlarmArrowIcon from "../assets/AlarmArrowIcon.svg";

function RegisteredConcert() {
  return (
    <>
      <p className="pt-20 pb-6 text-grayScaleBlack5 text-Body3-sm font-semibold font-NotoSansKR">
        요청한 공연
      </p>

      <div className="flex flex-col">
        <div
          className={`flex items-center justify-between bg-grayScaleBlack80 rounded-8 mt-10 px-20 py-16 `}
        >
          <div className="w-full">
            <div className="flex justify-between">
              <div className="inline-flex items-center justify-center rounded-24 bg-grayScaleBlack100">
                <p className="px-10 py-4 text-grayScaleBlack5 text-Caption1-sm font-semibold font-NotoSansKR ">
                  추가 완료
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-grayScaleBlack50 text-Caption1-Bold font-bold font-NotoSansKR">
                  확인하기
                </p>
                <img src={AlarmArrowIcon} className="w-24 h-24" />
              </div>
            </div>
            <p className="pt-6 text-grayScaleWhite text-Body3-sm font-semibold font-NotoSansKR ">
              [19자 내 공연명 이후 말줄임..] 콘서트
            </p>

            <p className="pt-6 text-grayScaleBlack50 text-Body4-md font-medium font-NotoSansKR">
              나의 관심 콘서트에 추가됐어요
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div
          className={`flex items-center justify-between bg-grayScaleBlack80 rounded-8 mt-10 px-20 py-16 `}
        >
          <div className="w-full">
            <div className="flex justify-between">
              <div className="inline-flex items-center justify-center rounded-24 bg-lyricsTranslation">
                <p className="px-10 py-4 text-grayScaleBlack80 text-Caption1-sm font-semibold font-NotoSansKR ">
                  추가 실패
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-grayScaleBlack50 text-Caption1-Bold font-bold font-NotoSansKR">
                  재요청
                </p>
                <img src={AlarmArrowIcon} className="w-24 h-24" />
              </div>
            </div>
            <p className="pt-6 text-grayScaleWhite text-Body3-sm font-semibold font-NotoSansKR ">
              [19자 내 공연명 이후 말줄임..] 콘서트
            </p>

            <p className="pt-6 text-grayScaleBlack50 text-Body4-md font-medium font-NotoSansKR">
              정확한 정보가 부족하여 추가되지 않았어요
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisteredConcert;
