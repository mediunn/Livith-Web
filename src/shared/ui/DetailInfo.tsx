import { ConcertStatus } from "../../entities/concert/types";

interface DetailInfoProps {
  imageUrl: string;
  status: ConcertStatus | string;
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
    <div className="w-full h-390 relative ">
      <div className="h-390 absolute inset-0 bg-gradient-to-t from-grayScaleBlack100 to-transparent opacity-100"></div>
      <img src={imageUrl} className="w-full h-full object-cover" />
      <div className="absolute top-180 left-16 mr-16 ">
        <div className="inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13">
          <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR m-0">
            {status}
          </p>
        </div>
        <p className=" my-20 text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR">
          {title}
        </p>
        <p className="m-0 text-grayScaleWhite text-body-sm font-ragular font-NotoSansKR">
          {date}
        </p>
        <p className="m-0 text-grayScaleWhite text-body-sm font-ragular font-NotoSansKR">
          {artist}
        </p>
      </div>
    </div>
  );
}

export default DetailInfo;
