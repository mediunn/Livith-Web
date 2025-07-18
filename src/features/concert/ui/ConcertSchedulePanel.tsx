function ConcertSchedulePanel() {
  return (
    <div className="pt-20 pl-16 pr-16">
      <div className="pb-190 flex flex-col gap-12">
        <div className="flex items-center justify-between pl-15 pr-16 w-full h-64 bg-grayScaleBlack90 rounded-8 border border-solid border-grayScaleBlack80">
          <div className="flex items-center">
            <div className="h-30 px-13 py-8 bg-mainYellow30 rounded-24 text-grayScaleBlack100 text-caption-lg font-semibold font-NotoSansKR">
              D-60
            </div>
            <p className="pl-8 text-grayScaleWhite text-body-sm font-semibold font-NotoSansKR">
              09.13 (토) 콘서트
            </p>
          </div>
          <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
            9/13(토) 2:00PM
          </p>
        </div>

        <div className="flex items-center justify-between pl-15 pr-16 w-full h-64 bg-grayScaleBlack90 rounded-8 border border-solid border-grayScaleBlack80">
          <div className="flex items-center">
            <div className="h-30 px-13 py-8 bg-mainYellow30 rounded-24 text-grayScaleBlack100 text-caption-lg font-semibold font-NotoSansKR">
              D-61
            </div>
            <p className="pl-8 text-grayScaleWhite text-body-sm font-semibold font-NotoSansKR">
              09.14 (일) 콘서트
            </p>
          </div>
          <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
            9/14(일) 2:00PM
          </p>
        </div>

        <div className="flex items-center justify-between pl-15 pr-16 w-full h-64 bg-grayScaleBlack90 rounded-8 border border-solid border-grayScaleBlack80 opacity-30">
          <div className="flex items-center">
            <div className="h-30 px-13 py-8 bg-mainYellow30 rounded-24 text-grayScaleBlack100 text-caption-lg font-semibold font-NotoSansKR">
              D-120
            </div>
            <p className="pl-8 text-grayScaleWhite text-body-sm font-semibold font-NotoSansKR">
              티켓팅 오픈
            </p>
          </div>
          <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
            9/14(일) 2:00PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConcertSchedulePanel;
