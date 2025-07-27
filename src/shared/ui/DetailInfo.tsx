import { ConcertFilter } from "../../entities/concert/types";
import WebSiteEarthIcon from "../../shared/assets/WebSiteEarthIcon.svg";
import WebSiteArrowIcon from "../../shared/assets/WebSiteArrowIcon.svg";

interface DetailInfoProps {
  imageUrl: string;
  status: ConcertFilter | string;
  title: string;
  date: string;
  artist: string;
}

function DetailInfo({
  imageUrl,
  status,
  title,
  date,
  artist,
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
          올림픽공원 올림픽홀
        </p>
        <button className="w-327 h-37 mt-16 flex items-center justify-center gap-4 text-grayScaleBlack100 text-body-sm font-semibold font-NotoSansKR bg-mainYellow30 rounded-6 border-none cursor-pointer">
          <img
            src={WebSiteEarthIcon}
            alt="web site earth"
            className="w-18 h-18"
          />
          Gen Hoshino presents MAD HOPE Asia Tour ...
          <img
            src={WebSiteArrowIcon}
            alt="web site arrow"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* <div className="absolute top-180 left-16 mr-16 ">
        <div className="inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13">
          <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR m-0">
            {status}
          </p>
        </div>
        <p className=" my-6 text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR">
          {title}
        </p>
        <p className="mb-2 text-grayScaleWhite text-body-sm font-ragular font-NotoSansKR">
          {date}
        </p>
        <p className="m-0 text-grayScaleWhite text-body-sm font-ragular font-NotoSansKR">
          {artist}
        </p>
      </div> */}
    </div>
  );
}

export default DetailInfo;
