import WebSiteEarthIcon from "../../shared/assets/WebSiteEarthIcon.svg";
import WebSiteArrowIcon from "../../shared/assets/WebSiteArrowIcon.svg";
import EmptyConcertImageIcon from "../../shared/assets/EmptyConcertImageIcon.svg";

interface DetailInfoProps {
  imageUrl: string;
  artist: string;
  title: string;
  date: string;
  venue: string;
  ticketSite: string;
  ticketUrl: string;
}

function DetailInfo({
  imageUrl,
  artist,
  title,
  date,
  venue,
  ticketSite,
  ticketUrl,
}: DetailInfoProps) {
  return (
    <div className="w-full h-337 relative ">
      <div className="h-337 absolute inset-0 bg-grayScaleBlack100 opacity-70"></div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="concert image"
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={EmptyConcertImageIcon}
          alt="empty concert image"
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute bottom-24 left-19 pr-19">
        <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
          {artist}
        </p>
        <p className="pt-8 text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR">
          {title}
        </p>

        <div className="pt-18 w-324 border-b border-dashed border-grayScaleBlack50" />

        <p className="pt-18 text-grayScaleBlack30 text-body-lgs font-regular font-NotoSansKR">
          {date}
        </p>
        <p className="pt-4 text-grayScaleBlack30 text-body-lgs font-regular font-NotoSansKR">
          {venue}
        </p>
        <a
          href={ticketSite ? ticketUrl : "#"}
          target="_blank"
          className={`w-327 h-37 mt-16 pl-8 pr-8 flex items-center justify-between text-grayScaleBlack100 text-body-sm font-semibold font-NotoSansKR rounded-6 border-none cursor-pointer ${
            ticketSite ? "bg-mainYellow30" : "bg-grayScaleBlack50"
          }`}
        >
          <div className="flex items-center">
            <img
              src={WebSiteEarthIcon}
              alt="web site earth"
              className="w-18 h-18 mr-4"
            />
            <p>{ticketSite || "콘서트 관련 웹사이트가 없어요"}</p>
          </div>
          {ticketSite && (
            <img
              src={WebSiteArrowIcon}
              alt="web site arrow"
              className="w-8 h-8 ml-4"
            />
          )}
        </a>
      </div>
    </div>
  );
}

export default DetailInfo;
