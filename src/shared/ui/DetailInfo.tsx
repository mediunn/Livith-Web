import WebSiteEarthIcon from "../../shared/assets/WebSiteEarthIcon.svg";
import WebSiteArrowIcon from "../../shared/assets/WebSiteArrowIcon.svg";

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
      <img src={imageUrl} className="w-full h-full object-cover" />
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
          href={ticketUrl}
          target="_blank"
          className="w-327 h-37 mt-16 flex items-center justify-center gap-4 text-grayScaleBlack100 text-body-sm font-semibold font-NotoSansKR bg-mainYellow30 rounded-6 border-none cursor-pointer"
        >
          <img
            src={WebSiteEarthIcon}
            alt="web site earth"
            className="w-18 h-18"
          />
          {ticketSite}
          <img
            src={WebSiteArrowIcon}
            alt="web site arrow"
            className="w-8 h-8"
          />
        </a>
      </div>
    </div>
  );
}

export default DetailInfo;
