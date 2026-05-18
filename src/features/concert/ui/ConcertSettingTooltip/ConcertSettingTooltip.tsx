import TooltipArrowIcon from "../../../../shared/assets/TooltipArrowIcon.svg";

interface ConcertSettingTooltipProps {
  isOpen: boolean;
}

function ConcertSettingTooltip({ isOpen }: ConcertSettingTooltipProps) {
  if (!isOpen) return null;

  const tooltipContent =
    "관심 콘서트 설정하고 공연 일정 • 셋리스트 정보 빠르게";

  return (
    <>
      {isOpen && (
        <div className="absolute top-160 right-23">
          <img
            src={TooltipArrowIcon}
            className="w-13 absolute right-20 -top-4"
          />

          <div className="flex items-center bg-mainYellow30 rounded-26 px-15 py-7 relative">
            <p className="text-grayScaleBlack80 text-Caption1-Bold font-bold font-NotoSansKR">
              {tooltipContent}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
export default ConcertSettingTooltip;
