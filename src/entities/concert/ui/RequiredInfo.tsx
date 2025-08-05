import ConcertInfoCarousel from "../../../widgets/ConcertInfoCarousel";
import { ConcertRequired } from "../api/getConcertRequiredInfo";

type RequiredInfoProps = {
  concertRequiredInfo: ConcertRequired[];
  ticketUrl: string;
};

function RequiredInfo({ concertRequiredInfo, ticketUrl }: RequiredInfoProps) {
  return (
    <>
      <div className="mx-16">
        <div className="pt-30 pb-20">
          <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
            콘서트 필수 정보를
            <br />
            확인해 보세요
          </p>
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
