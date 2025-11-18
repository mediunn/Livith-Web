import { cssTransition, ToastContainer, toast } from "react-toastify";
import { useRef, useEffect, useState } from "react";

function CustomToastContainer() {
  const touchStartY = useRef<number | null>(null);
  const [topOffset, setTopOffset] = useState(0);

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

  // visualViewport 기반 top offset 업데이트
  useEffect(() => {
    const updateTopOffset = () => {
      if (window.visualViewport) {
        setTopOffset(window.visualViewport.offsetTop);
      } else {
        setTopOffset(20);
      }
    };

    updateTopOffset();

    window.visualViewport?.addEventListener("resize", updateTopOffset);
    window.visualViewport?.addEventListener("scroll", updateTopOffset);

    return () => {
      window.visualViewport?.removeEventListener("resize", updateTopOffset);
      window.visualViewport?.removeEventListener("scroll", updateTopOffset);
    };
  }, []);

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <ToastContainer
        transition={cssTransition({
          enter: "animate-toast-in",
          exit: "animate-toast-out",
          collapse: true,
        })}
        draggable={false}
        hideProgressBar
        closeButton={false}
        style={{
          position: "fixed",
          top: `${topOffset}px`,
          zIndex: 9999,
        }}
        toastClassName="shadow-custom-toast rounded-8 bg-grayScaleBlack80 w-343 mt-[15%] mx-auto z-50"
      />
    </div>
  );
}

export default CustomToastContainer;
