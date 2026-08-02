import AlarmArrowIcon from "../assets/AlarmArrowIcon.svg";

interface Props {
  success: boolean;
  title: string;
  description: string;
  actionText: string;
  onClick: () => void;
}

export default function EntryAlertCard({
  success,
  title,
  description,
  actionText,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-grayScaleBlack80 rounded-8 mt-10 px-20 py-16 cursor-pointer"
    >
      <div className="flex justify-between">
        <div
          className={`inline-flex rounded-24 ${
            success ? "bg-grayScaleBlack100" : "bg-lyricsTranslation"
          }`}
        >
          <p
            className={`px-10 py-4 text-Caption1-sm font-semibold ${
              success ? "text-grayScaleBlack5" : "text-grayScaleBlack80"
            }`}
          >
            {success ? "추가 완료" : "추가 실패"}
          </p>
        </div>

        <div className="flex items-center">
          <p className="text-grayScaleBlack50 text-Caption1-Bold font-bold">
            {actionText}
          </p>
          <img src={AlarmArrowIcon} className="w-24 h-24" />
        </div>
      </div>

      <p className="pt-6 text-grayScaleWhite text-Body3-sm font-semibold truncate">
        {title}
      </p>

      <p className="pt-6 text-grayScaleBlack50 text-Body4-md font-medium">
        {description}
      </p>
    </div>
  );
}
