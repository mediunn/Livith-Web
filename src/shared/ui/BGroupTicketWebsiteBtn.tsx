import { useEffect, useRef } from "react";
import WebSiteEarthIcon from "../assets/WebSiteEarthIcon.svg";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../app/firebase";

interface BGroupTicketWebsiteBtnProps {
  ticketUrl: string;
  onClick?: () => void;
  group: "A" | "B";
}

function BGroupTicketWebsiteBtn({
  ticketUrl,
  onClick,
  group,
}: BGroupTicketWebsiteBtnProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const recordedRef = useRef(false); // 이벤트 기록 여부

  const handleClick = () => {
    if (onClick) onClick();
    else if (ticketUrl) window.open(ticketUrl, "_blank");
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // 스크롤하여 섹션 도달시 이벤트 기록
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !recordedRef.current) {
          logEvent(analytics, "B_Button_section_reached", {
            section: "B_Button",
            group,
            debug_mode: true,
          });

          window.amplitude.track("B_Button_section_reached");

          recordedRef.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // 섹션이 10% 이상 노출시 도달로 판단
    );

    const frameId = requestAnimationFrame(() => observer.observe(el));

    // 스크롤 전 초기 화면에서 섹션이 노출되는 경우 즉시 이벤트 기록
    const rect = el.getBoundingClientRect();
    if (
      !recordedRef.current &&
      rect.top < window.innerHeight &&
      rect.bottom > 0
    ) {
      logEvent(analytics, "B_Button_section_reached", {
        section: "B_Button",
        group,
        debug_mode: true,
      });

      window.amplitude.track("B_Button_section_reached");

      recordedRef.current = true;
      observer.disconnect();
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [group]);

  return (
    <>
      <div
        ref={sectionRef}
        onClick={handleClick}
        className="flex px-16 py-10 w-full inline-flex items-center bg-grayScaleBlack80 rounded-8 cursor-pointer"
      >
        <img src={WebSiteEarthIcon} className="w-18 h-18 mr-10" />
        <div>
          <p className="text-grayScaleBlack5 text-Body2-sm font-semibold font-NotoSansKR">
            티켓 웹사이트 바로가기
          </p>
          <p className="pt-2 text-grayScaleBlack50 text-Body4-sm font-semibold font-NotoSansKR">
            다시 방문하여 콘서트 소식을 한 눈에 확인해요
          </p>
        </div>
      </div>
    </>
  );
}

export default BGroupTicketWebsiteBtn;
