import SmallReportBtn from "../../../shared/ui/SmallReportBtn";
import ConcertInfoCarousel from "../../../widgets/ConcertInfoCarousel";
import { ConcertRequired } from "../api/getConcertRequiredInfo";

type RequiredInfoProps = {
  concertRequiredInfo: ConcertRequired[];
  ticketUrl: string;
};

function RequiredInfo({ concertRequiredInfo, ticketUrl }: RequiredInfoProps) {
  const handleClick = () => {
    window.amplitude.track("click_report_concert_info");
    window.location.href = "https://forms.gle/aMj5C4LhDcMzueWz5";
  };

  return (
    <>
      <div className="mx-16">
        <div className="pt-30 pb-20 flex justify-between items-end">
          <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
            콘서트 필수 정보
            <br />
            빠르게 확인해요
          </p>

          <SmallReportBtn
            onClick={handleClick}
            className="border border-solid border-grayScaleBlack80"
            label="정보 제보"
          />
        </div>
        {concertRequiredInfo && (
          <ConcertInfoCarousel
            concertRequiredInfo={concertRequiredInfo}
            ticketUrl={ticketUrl}
          />
        )}
      </div>
    </>
  );
}

export default RequiredInfo;
