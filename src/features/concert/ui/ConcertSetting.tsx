import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConcertTicketArrowIcon from "../../../shared/assets/ConcertTicketArrowIcon.svg";
import WebSiteEarthIcon from "../../../shared/assets/WebSiteEarthIcon.svg";
import WebSiteArrowIcon from "../../../shared/assets/WebSiteArrowIcon.svg";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import EmptyConcertSchedulePanel from "./EmptyConcertSchedulePanel";
import ScheduleInfo from "../../../entities/concert/ui/ScheduleInfo";
import { Concert } from "../../../entities/concert/types";
import { formatConcertDate } from "../../../shared/utils/formatConcertDate";
import { Schedule } from "../../../entities/concert/api/getSchedule";
import InterestConcertSetlist from "../../../features/setlist/ui/InterestConcertSetlist";

interface ConcertSettingProps {
  concert: Concert;
  schedules: Schedule[];
}

function ConcertSetting({ concert, schedules }: ConcertSettingProps) {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const navigate = useNavigate();

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
        <div>
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
                {formatConcertDate(concert.startDate, concert.endDate)}
              </p>
              <p className="pt-4 text-grayScaleBlack30 text-body-lgs font-regular font-NotoSansKR">
                {concert.venue}
              </p>
            </div>

            <button
              className="absolute bottom-26 right-16 w-46 h-46 bg-transparent border-none cursor-pointer"
              onClick={() => navigate(`/concert/${concert.id}`)}
            >
              <img
                src={ConcertTicketArrowIcon}
                alt="concert ticket arrow"
                className="w-full h-full"
              />
            </button>
          </div>

          <a
            href={concert.ticketSite ? concert.ticketUrl : "#"}
            target="_blank"
            className={`w-full h-37 mt-16 pl-8 pr-8 flex items-center justify-between text-grayScaleBlack100 text-body-sm font-semibold font-NotoSansKR rounded-6 border-none cursor-pointer ${
              concert.ticketSite ? "bg-mainYellow30" : "bg-grayScaleBlack50"
            }`}
          >
            <div className="flex items-center">
              <img
                src={WebSiteEarthIcon}
                alt="web site earth"
                className="w-18 h-18 mr-4"
              />
              <p>{concert.ticketSite || "콘서트 관련 웹사이트가 없어요"}</p>
            </div>
            {concert.ticketSite && (
              <img
                src={WebSiteArrowIcon}
                alt="web site arrow"
                className="w-8 h-8 ml-4"
              />
            )}
          </a>
        </div>
      </div>

      <Box sx={{ width: "100%" }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 2, borderColor: "#222831" }}>
            <TabList
              onChange={handleChange}
              aria-label="tab"
              sx={{
                "& .MuiTab-root": {
                  width: "50%",
                  height: "64px",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "NotoSansKR",
                  letterSpacing: "-0.05em",
                  lineHeight: "1.4",
                  textTransform: "none",
                  color: "#808794",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#FFFFFF",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#FFFFFF",
                },
              }}
            >
              <Tab label="콘서트 일정정보" value="1" />
              <Tab label="관련 셋리스트" value="2" />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              padding: "0",
              paddingBottom: 19,
            }}
          >
            {schedules && schedules.length > 0 ? (
              <ScheduleInfo schedules={schedules} />
            ) : (
              <EmptyConcertSchedulePanel />
            )}
          </TabPanel>
          <TabPanel
            value="2"
            sx={{
              padding: "0",
            }}
          >
            <InterestConcertSetlist />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default ConcertSetting;
