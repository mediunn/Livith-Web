import { cssTransition, ToastContainer, toast } from "react-toastify";
import { useRef } from "react";

function CustomToastContainer() {
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;

    if (diffY > 50) toast.dismiss(); // 위로 50px 이상 스와이프하면 닫기
    touchStartY.current = null;
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <ToastContainer
        transition={cssTransition({
          enter: "animate-toast-in",
          exit: "animate-toast-out",
          collapse: true,
        })}
        hideProgressBar
        closeButton={false}
        toastClassName="shadow-custom-toast rounded-8 bg-grayScaleBlack80 w-343 mt-[15%] mx-auto z-50"
      />
    </div>
  );
}

export default CustomToastContainer;
