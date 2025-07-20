// import ConcertSchedulePanel from "../../../features/concert/ui/ConcertSchedulePanel";

import ConcertInfoCarousel from "../../../widgets/ConcertInfoCarousel";

function ConcertTabPanel() {
  return (
    <>
      {/* <ConcertSchedulePanel /> */}

      <div className="mx-16">
        <div className="pt-30 pb-20">
          <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
            콘서트 필수 정보를
            <br />
            확인해 보세요
          </p>
        </div>
        <ConcertInfoCarousel />
      </div>
    </>
  );
}

export default ConcertTabPanel;
