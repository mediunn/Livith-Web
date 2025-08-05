import { useNavigate } from "react-router-dom";
import MdSlide from "../../../entities/concert/ui/MdSlide";
import ConcertRightArrow from "../../../shared/assets/ConcertRightArrow.svg";
import { Md } from "../api/getMd";

type MdInfoProps = {
  concertId: number;
  mds: Md[];
  mdCount: number;
  ticketUrl: string;
};

function MdInfo({ mds, concertId, mdCount, ticketUrl }: MdInfoProps) {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="pt-30 pb-20 px-16 relative">
          <div className="flex">
            <div className="inline-flex items-center justify-center bg-mainYellow30 rounded-4">
              <p className="px-7 text-grayScaleBlack100 text-body-lg font-semibold font-NotoSansKR">
                {mdCount}건
              </p>
            </div>
            <p className="ml-4 text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
              의 MD 정보를
            </p>
          </div>
          <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
            한 눈에 확인하세요
          </p>
          {mds.length > 1 && (
            <button
              className="absolute bottom-20 right-16 w-24 h-24 bg-transparent border-none p-0 cursor-pointer"
              onClick={() => navigate("/md", { state: { concertId } })}
            >
              <img src={ConcertRightArrow} className="w-full h-full" />
            </button>
          )}
        </div>

        {mds.length > 0 && <MdSlide mds={mds} ticketUrl={ticketUrl} />}
      </div>
    </>
  );
}

export default MdInfo;
