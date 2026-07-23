import { EntryAlertItem } from "../../features/interest/api/notifications";

interface Props {
  alerts: EntryAlertItem[];
}

function AutoRemovedConcert({ alerts }: Props) {
  return (
    <>
      <p className="pt-20 pb-6 text-grayScaleBlack5 text-Body3-sm font-semibold">
        자동 정리된 공연
      </p>

      {alerts.map((item, index) => (
        <div key={index} className="bg-grayScaleBlack80 rounded-10 p-20 mt-10">
          <p className="text-grayScaleWhite text-Body3-sm font-semibold">
            {item.title}
          </p>

          <p className="pt-4 text-grayScaleBlack50 text-Body4-md">
            {item.content}
          </p>
        </div>
      ))}
    </>
  );
}

export default AutoRemovedConcert;
