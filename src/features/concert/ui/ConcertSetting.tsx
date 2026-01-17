import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../../shared/ui/TopBar";
import ConcertDateIcon from "../../../shared/assets/ConcertDateIcon.svg";
import ConcertVenueIcon from "../../../shared/assets/ConcertVenueIcon.svg";
import ConcertTicketArrowIcon from "../../../shared/assets/ConcertTicketArrowIcon.svg";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import EmptyConcertSchedulePanel from "./EmptyConcertSchedulePanel";
import ScheduleInfo from "../../../entities/concert/ui/ScheduleInfo";
import { Concert } from "../../../entities/concert/types";
import { formatDateRange } from "../../../shared/utils/formatDateRange";
import { Schedule } from "../../../entities/concert/api/getSchedule";
import InterestConcertSetlist from "../../../features/setlist/ui/InterestConcertSetlist";
import dayjs from "../../../shared/lib/dayjs";
import EditInterestConcertBottomSheet from "../../../features/interest/ui/EditInterestConcertBottomSheet";
import { getFormatDday } from "../utils/formatScheduleDate";
import ConcertMoreBtn from "../../../shared/ui/ConcertMoreButton/ConcertMoreButton";
import ConcertTabList from "../../../shared/ui/Tab/ConcertTabList";

interface ConcertSettingProps {
  concertId: number;
  concert: Concert;
  schedules: Schedule[];
}

function ConcertSetting({
  concertId,
  concert,
  schedules,
}: ConcertSettingProps) {
  const [tabValue, setTabValue] = useState("1");
  // isOpen 상태 관리
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  // 바텀시트 열기
  const openSheet = () => setIsSheetOpen(true);
  // 바텀시트 닫기
  const closeSheet = () => setIsSheetOpen(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const navigate = useNavigate();

  const now = dayjs();

  const upcomingSchedules = schedules
    .filter(
      (s) =>
        (s.type === "TICKETING" || s.type === "CONCERT") &&
        dayjs(s.scheduledAt).isSameOrAfter(now, "day"),
    )
    .sort((a, b) => dayjs(a.scheduledAt).unix() - dayjs(b.scheduledAt).unix());

  // 다가오는 일정이 있으면 그 중 가장 가까운 일정, 없으면 가장 마지막 일정
  const nearestSchedule =
    upcomingSchedules[0] ??
    schedules
      .filter((s) => s.type === "TICKETING" || s.type === "CONCERT")
      .sort((a, b) => dayjs(a.scheduledAt).unix() - dayjs(b.scheduledAt).unix())
      .slice(-1)[0];

  // nearestSchedule이 다가오는 일정인지 확인
  const isUpcoming =
    upcomingSchedules.length > 0 && nearestSchedule === upcomingSchedules[0];

  const DDayDate = nearestSchedule
    ? getFormatDday(nearestSchedule.scheduledAt)
    : "";

  const DDayLabel = (schedule: Schedule) => {
    const today = dayjs().startOf("day");
    const target = dayjs(nearestSchedule.scheduledAt).startOf("day");
    const diff = target.diff(today, "day");

    if (schedule.type === "TICKETING") {
      if (diff >= 0) return "준비를 시작해 볼까요?";
      return "알차게 즐기고 오셨나요?";
    }

    if (schedule.type === "CONCERT") {
      if (diff === 0) return "놓친 정보가 있으면 확인해요!";
      if (diff > 0) return "준비를 시작해 볼까요?";
      return "알차게 즐기고 오셨나요?";
    }

    return "";
  };

  const tabs = [
    {
      label: "콘서트 일정",
      value: "1",
      onClick: () =>
        window.amplitude.track("click_concert_schedule_segment_main"),
    },
    {
      label: "셋리스트",
      value: "2",
      onClick: () => window.amplitude.track("click_setlist_segment_main"),
    },
  ];
  return (
    <>
      <TopBar bgColor="bg-grayScaleBlack100" />

      <div>
        <div className="pt-24 pb-18 flex justify-between items-center">
          <p className="ml-27 text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
            나의 관심 콘서트
          </p>
          <div>
            <button
              onClick={() => {
                openSheet();
                window.amplitude.track("click_change_concert_main");
              }}
              className="mr-24 text-grayScaleBlack50 bg-grayScaleBlack100 hover:bg-grayScaleBlack80 rounded-30 p-8 text-Body4-re font-regular font-NotoSansKR border-none cursor-pointer"
            >
              수정하기
            </button>
            <EditInterestConcertBottomSheet
              isSheetOpen={isSheetOpen}
              onSheetClose={closeSheet}
              concertId={concertId}
            />
          </div>
        </div>

        <div className="w-full flex justify-center bg-grayScaleBlack90 ">
          <ConcertMoreBtn
            label="더 많은 정보 확인하기"
            icon={ConcertTicketArrowIcon}
            right={39}
            top={157}
            iconPosition="right"
            onClick={() => {
              window.amplitude.track("click_more_info_main");
              navigate(`/concert/${concert.id}`);
            }}
          />

          <div className=" w-full mx-24 mb-24">
            <div className="relative w-full aspect-[3/4] mt-24">
              {/* 배경 이미지 + 마스크 */}
              <div
                className="w-full h-full "
                style={{
                  WebkitMaskImage: "url('/ConcertTicketMask.svg')",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskImage: "url('/ConcertTicketMask.svg')",
                  maskRepeat: "no-repeat",
                  maskSize: "cover",
                  backgroundImage: `url(${concert.poster})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              {/* 그라데이션 + 마스크 */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-grayScaleBlack100 to-transparent pointer-events-none border border-solid border-grayScaleBlack80"
                style={{
                  WebkitMaskImage: "url('/ConcertTicketMask.svg')",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskImage: "url('/ConcertTicketMask.svg')",
                  maskRepeat: "no-repeat",
                  maskSize: "cover",
                }}
              />

              <div className="absolute bottom-24 left-19 mr-16">
                {nearestSchedule && (
                  <>
                    <p className="text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
                      {nearestSchedule.type === "CONCERT"
                        ? "콘서트"
                        : nearestSchedule.type === "TICKETING"
                          ? "티켓팅"
                          : nearestSchedule.category}
                      {isUpcoming && "까지"}{" "}
                      <span className="text-mainYellow30">{DDayDate},</span>
                    </p>
                    <p className="pt-2 text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
                      {DDayLabel(nearestSchedule)}
                    </p>
                  </>
                )}
                <div className="pt-14 flex items-center">
                  <img src={ConcertDateIcon} className="w-24 h-24" />
                  <p className="pl-4 text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR">
                    {formatDateRange(concert.startDate, concert.endDate)}
                  </p>
                </div>

                <div className="pt-2 flex items-center">
                  <img src={ConcertVenueIcon} className="w-24 h-24" />
                  <p className="pl-4 text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR">
                    {concert.venue}
                  </p>
                </div>

                <div className="pt-16 w-270 border-b border-dashed border-grayScaleBlack50 opacity-50" />
                <p className="pt-24 text-grayScaleBlack50 text-Body3-md font-medium font-NotoSansKR">
                  {concert.title}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Box sx={{ width: "100%" }}>
          <TabContext value={tabValue}>
            <ConcertTabList
              tabs={tabs}
              value={tabValue}
              onChange={handleChange}
              minWidth="50%"
            />
            <TabPanel
              value="1"
              sx={{
                padding: "0",
                paddingBottom: 19,
              }}
            >
              {schedules && schedules.length > 0 ? (
                <ScheduleInfo schedules={schedules} showReportButton={false} />
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
              <InterestConcertSetlist concertId={concertId} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}

export default ConcertSetting;
