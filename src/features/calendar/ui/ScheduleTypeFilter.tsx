import { ScheduleType } from "../model/types";

interface Props {
  value: ScheduleType[];
  onChange: (value: ScheduleType[]) => void;
}

export function ScheduleTypeFilter({ value, onChange }: Props) {
  const toggle = (type: ScheduleType) => {
    if (value.includes(type)) {
      onChange(value.filter((v) => v !== type));
    } else {
      onChange([...value, type]);
    }
  };

  return (
    <div className="flex gap-6">
      <button
        type="button"
        onClick={() => {
          toggle(ScheduleType.TICKETING);
          window.amplitude.track("click_chip_booking_date");
        }}
        className={[
          "flex items-center rounded-24 border px-13 py-6 text-Caption1-Bold font-bold bg-grayScaleBlack90 ",
          value.includes(ScheduleType.TICKETING)
            ? "text-grayScaleBlack30"
            : "border-grayScaleBlack80 text-grayScaleBlack50",
        ].join(" ")}
      >
        <div className="w-4 h-4 rounded-full bg-lyricsTranslation mr-4" />
        <span>예매일</span>
      </button>

      <button
        type="button"
        onClick={() => {
          toggle(ScheduleType.CONCERT);
          window.amplitude.track("click_chip_concert_date");
        }}
        className={[
          "flex items-center rounded-24 border px-13 py-6 text-Caption1-Bold font-bold bg-grayScaleBlack90",
          value.includes(ScheduleType.CONCERT)
            ? "text-grayScaleBlack30"
            : "border-grayScaleBlack80 text-grayScaleBlack50",
        ].join(" ")}
      >
        <div className="w-4 h-4 rounded-full bg-lyricsOriginal mr-4" />
        <span>공연일</span>
      </button>
    </div>
  );
}
