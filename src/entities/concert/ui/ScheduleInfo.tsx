import { Schedule } from "../api/getSchedule";
import dayjs from "../../../shared/lib/dayjs";
import {
  getFormatDday,
  getFormatDateTime,
} from "../../../features/concert/utils/formatScheduleDate.ts";
import ChipState from "../../../shared/ui/ChipState/ChipState.tsx";
import SmallReportBtn from "../../../shared/ui/SmallReportBtn.tsx";


type ScheduleInfoProps = {
  schedules: Schedule[];
  showReportButton?: boolean;
};

function ScheduleInfo({ schedules, showReportButton }: ScheduleInfoProps) {
  const upcomingSchedules = schedules
    .filter((s) => dayjs(s.scheduledAt).isSameOrAfter(dayjs(), "day"))
    .sort((a, b) => dayjs(a.scheduledAt).unix() - dayjs(b.scheduledAt).unix());

  const pastSchedules = schedules
    .filter((s) => dayjs(s.scheduledAt).isBefore(dayjs(), "day"))
    .sort((a, b) => dayjs(a.scheduledAt).unix() - dayjs(b.scheduledAt).unix());

  const sortedSchedules = [...upcomingSchedules, ...pastSchedules];

  const handleClick = () => {
    window.amplitude.track("click_report_schedule");
    window.location.href = "https://forms.gle/aMj5C4LhDcMzueWz5";
  };

  return (
    <div className="pl-16 pr-16">
      <div className="pt-24 pb-8 flex justify-between items-end">
        <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          날짜와 시간을
          <br />
          잊지 말고 확인해요
        </p>

        {showReportButton && (
          <SmallReportBtn
            onClick={handleClick}
            className="border border-solid border-grayScaleBlack80"
            label="정보 제보"
          />
        )}
      </div>
      <div className="flex flex-col">
        {sortedSchedules.map((schedule) => {
          const isPast = dayjs(schedule.scheduledAt).isBefore(dayjs(), "day");
          const dday = getFormatDday(schedule.scheduledAt);
          const date = getFormatDateTime(schedule.scheduledAt);

          return (
            <div
              key={schedule.id}
              className={`flex items-center justify-between w-full h-64  ${
                isPast ? "opacity-30" : ""
              }`}
            >
              <div className="flex items-center">
                <ChipState label={dday} variant="dday" />

                <p className="pl-8 text-grayScaleBlack30 text-Body3-md font-medium font-NotoSansKR">
                  {schedule.category}
                </p>
              </div>
              <p className="text-grayScaleBlack30 text-Body3-md font-medium font-NotoSansKR shrink-0">
                {date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScheduleInfo;
