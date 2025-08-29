import WebSiteEarthIcon from "../assets/WebSiteEarthIcon.svg";

interface AGroupTicketWebsiteBtnProps {
  ticketUrl: string;
}
function AGroupTicketWebsiteBtn({ ticketUrl }: AGroupTicketWebsiteBtnProps) {
  const handleClick = () => {
    if (ticketUrl) {
      window.open(ticketUrl, "_blank");
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex p-16 w-full h-84 bg-grayScaleBlack80 rounded-8 cursor-pointer"
      >
        <img
          src={WebSiteEarthIcon}
          alt="web site earth"
          className="w-18 h-18 mr-16"
        />
        <div>
          <p className="text-grayScaleBlack5 text-Body2-sm font-semibold font-NotoSansKR">
            티켓 웹사이트 바로가기
          </p>
          <p className="pt-4 text-grayScaleBlack50 text-Body4-sm font-semibold font-NotoSansKR">
            다시 방문하여 콘서트 소식을 한 눈에 확인해요
          </p>
        </div>
      </div>
    </>
  );
}

export default AGroupTicketWebsiteBtn;
