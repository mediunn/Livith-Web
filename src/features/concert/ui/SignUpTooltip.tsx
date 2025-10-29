import TooltipCloseIcon from "../../../shared/assets/TooltipCloseIcon.svg";
import TooltipArrowIcon from "../../../shared/assets/TooltipArrowIcon.svg";

interface SignUpTooltipProps {
  group: "A" | "B" | "C";
  isOpen: boolean;
  onClose: () => void;
}

function SignUpTooltip({ group, isOpen, onClose }: SignUpTooltipProps) {
  if (!isOpen) return null;

  const tooltipContent =
    group === "B"
      ? "30초 가입하고, 원하는 티켓팅 정보 빠르게!"
      : "30초 가입하고, 관심 공연 디데이 ON!";

  return (
    <>
      {isOpen && (
        <>
          {(group === "B" || group === "C") && (
            <div className="absolute top-170 right-23">
              <img
                src={TooltipArrowIcon}
                className="w-13 absolute right-20 -top-4"
              />

              <div className="flex items-center bg-mainYellow30 rounded-26 px-12 py-5 relative">
                <p className="text-grayScaleBlack80 text-Caption1-Bold font-bold font-NotoSansKR">
                  {tooltipContent}
                </p>
                <button
                  className="w-20 h-20 cursor-pointer ml-4"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <img src={TooltipCloseIcon} className="w-full h-full" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default SignUpTooltip;
