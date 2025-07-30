import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConcertSchedulePanel from "../../../features/concert/ui/ConcertSchedulePanel";
import ConcertInfoCarousel from "../../../widgets/ConcertInfoCarousel";
import MdSlide from "../../../entities/concert/ui/MdSlide";
import ConcertRightArrow from "../../../shared/assets/ConcertRightArrow.svg";
import { getSchedule, Schedule } from "../api/getSchedule";
import {
  getConcertRequiredInfo,
  ConcertRequired,
} from "../api/getConcertRequiredInfo";
import { getMd, Md } from "../api/getMd";

interface ConcertTabPanelProps {
  concertId: number;
  ticketUrl: string;
}

function ConcertTabPanel({ concertId, ticketUrl }: ConcertTabPanelProps) {
  const [schedules, setSchedule] = useState<Schedule[] | null>(null);

  const [concertRequiredInfo, setConcertRequiredInfo] = useState<
    ConcertRequired[] | null
  >(null);

  const [mds, setMd] = useState<Md[] | null>(null);
  const [mdCount, setMdCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const data = await getSchedule(concertId);
        setSchedule(data);
      } catch (error) {
        console.error("특정 콘서트 일정 목록 조회 API 호출 실패:", error);
        setSchedule([]);
      }
    };

    fetchSchedule();
  }, [concertId]);

  useEffect(() => {
    const fetchConcertRequiredInfo = async () => {
      try {
        const data = await getConcertRequiredInfo(concertId);
        setConcertRequiredInfo(data);
      } catch (error) {
        console.error("특정 콘서트 필수 정보 목록 조회 API 호출 실패:", error);
        setConcertRequiredInfo([]);
      }
    };

    fetchConcertRequiredInfo();
  }, [concertId]);

  useEffect(() => {
    const fetchMds = async () => {
      try {
        const data = await getMd(concertId);
        setMd(data);
        setMdCount(data.length);
      } catch (error) {
        console.error("특정 콘서트의 MD 목록 조회 API 호출 실패:", error);
        setMd([]);
      }
    };

    fetchMds();
  }, [concertId]);

  if (mds === null) {
    return null;
  }

  return (
    <>
      {schedules && <ConcertSchedulePanel schedules={schedules} />}

      <div className="mx-16">
        <div className="pt-30 pb-20">
          <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
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
          <button
            className="absolute bottom-20 right-16 w-24 h-24 bg-transparent border-none p-0 cursor-pointer"
            onClick={() => navigate("/md", { state: { concertId } })}
          >
            <img src={ConcertRightArrow} className="w-full h-full" />
          </button>
        </div>

        {mds.length > 0 && <MdSlide mds={mds} />}
      </div>
    </>
  );
}

export default ConcertTabPanel;
