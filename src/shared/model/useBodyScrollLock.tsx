import { useEffect } from "react";

export function useBodyScrollLock(isOpen: boolean) {
  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingLeft = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingLeft = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingLeft = "";
    };
  }, [isOpen]);
}
