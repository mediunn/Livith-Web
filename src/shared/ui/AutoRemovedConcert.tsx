function AutoRemovedConcert() {
  return (
    <>
      <p className="pt-20 pb-6 text-grayScaleBlack5 text-Body3-sm font-semibold font-NotoSansKR">
        자동 정리된 공연
      </p>

      <div className="flex flex-col pt-10">
        <div
          className={`flex items-center justify-between bg-grayScaleBlack80 rounded-10 p-20 cursor-pointer`}
        >
          <div>
            <div className="flex">
              <p className="text-grayScaleWhite text-Body3-sm font-semibold font-NotoSansKR">
                자동 정리된 공연
              </p>
              <p className="ml-4 text-grayScaleWhite text-Body3-sm font-semibold font-NotoSansKR">
                4
              </p>
            </div>

            <p className="pt-4 text-grayScaleBlack50 text-Body4-md font-medium font-NotoSansKR">
              원 오크 록 내한 공연 외 3건이 자동 정리됐어요
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-10">
        <div
          className={`flex items-center justify-between bg-grayScaleBlack80 rounded-10 p-20 cursor-pointer`}
        >
          <div>
            <div className="flex">
              <p className="text-grayScaleWhite text-Body3-sm font-semibold font-NotoSansKR">
                취소된 공연
              </p>
              <p className="ml-4 text-grayScaleWhite text-Body3-sm font-semibold font-NotoSansKR">
                2
              </p>
            </div>

            <p className="pt-4 text-grayScaleBlack50 text-Body4-md font-medium font-NotoSansKR">
              원 오크 록 내한 공연 외 1건이 취소되어 자동 정리됐여요
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoRemovedConcert;
