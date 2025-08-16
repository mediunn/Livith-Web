import { Schedule } from "../api/getSchedule";
import dayjs from "../../../shared/lib/dayjs";
import {
  getFormatDday,
  getFormatDateTime,
} from "../../../features/concert/utils/formatScheduleDate";

type ScheduleInfoProps = {
  schedules: Schedule[];
};

function ScheduleInfo({ schedules }: ScheduleInfoProps) {
  const concertSchedules = schedules.filter((s) => s.category === "공연");

  const upcomingSchedules = schedules
    .filter((s) => dayjs(s.scheduledAt).isSameOrAfter(dayjs(), "day"))
    .sort((a, b) => dayjs(a.scheduledAt).unix() - dayjs(b.scheduledAt).unix());

  const pastSchedules = schedules
    .filter((s) => dayjs(s.scheduledAt).isBefore(dayjs(), "day"))
    .sort((a, b) => dayjs(a.scheduledAt).unix() - dayjs(b.scheduledAt).unix());

  const sortedSchedules = [...upcomingSchedules, ...pastSchedules];

  return (
    <div className="pl-16 pr-16">
      <div className="pt-24 pb-20">
        <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          다가온 콘서트 일정을
          <br />
          확인해 보세요
        </p>
      </div>
      <div className="flex flex-col gap-12">
        {sortedSchedules.map((schedule) => {
          const isPast = dayjs(schedule.scheduledAt).isBefore(dayjs(), "day");
          const dday = getFormatDday(schedule.scheduledAt);
          const date = getFormatDateTime(schedule.scheduledAt);

          return (
            <div
              key={schedule.id}
              className={`flex items-center justify-between pl-15 pr-16 w-full h-64 bg-grayScaleBlack90 rounded-8 ${
                isPast ? "opacity-30" : ""
              }`}
            >
              <div className="flex items-center">
                <div className="h-30 px-13 py-8 bg-mainYellow30 rounded-24 text-grayScaleBlack100 text-Caption1-Bold font-bold font-NotoSansKR shrink-0">
                  {dday}
                </div>
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
