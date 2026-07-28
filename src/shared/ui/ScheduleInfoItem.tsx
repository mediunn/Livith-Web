import CalenderInfoArrowIcon from "../assets/CalenderInfoArrowIcon.svg";

interface ScheduleInfoItemProps {
  concertId: number;
  indicatorColor: string;
  time: string;
  badgeText: string;
  title: string;
  description: string;
  isCanceled?: boolean;
  onClick?: (concertId: number) => void;
}

function ScheduleInfoItem({
  concertId,
  indicatorColor,
  time,
  badgeText,
  title,
  description,
  isCanceled = false,
  onClick,
}: ScheduleInfoItemProps) {
  return (
    <div className="flex flex-col pt-16">
      <div className="flex items-center">
        <div className={`w-4 h-12 rounded-1 mr-6 ${indicatorColor}`} />
        <p className="text-grayScaleBlack5 text-Body4-md font-medium font-NotoSansKR">
          {time}
        </p>
      </div>

      <div
        onClick={() => {
          if (!isCanceled) {
            onClick?.(concertId);
          }
        }}
        className={`flex items-center justify-between rounded-8 mt-10 px-12 py-12 bg-grayScaleBlack80 ${
          isCanceled
            ? "opacity-30"
            : "hover:bg-grayScaleBlack100 cursor-pointer"
        }`}
      >
        <div>
          <div className="inline-flex items-center justify-center rounded-24 bg-grayScaleBlack90">
            <p className="px-10 py-4 text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR line-clamp-1">
              {badgeText}
            </p>
          </div>

          <p className="pt-6 text-grayScaleWhite text-Body3-sm font-semibold font-NotoSansKR line-clamp-2">
            {title}
          </p>

          <p className="pt-6 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR line-clamp-1">
            {description}
          </p>
        </div>

        <img src={CalenderInfoArrowIcon} className="ml-16 w-24 h-24" />
      </div>
    </div>
  );
}

export default ScheduleInfoItem;
