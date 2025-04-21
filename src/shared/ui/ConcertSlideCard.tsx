import "../styles/concert-slide.css";

type ConcertSlideCardProps = {
  title: string;
  date: string;
  status: "prev" | "current" | "next";
};

function ConcertSlideCard({ title, date, status }: ConcertSlideCardProps) {
  const statusText = status === "current" ? "진행중" : "종료";

  return (
    <div className="w-139 h-280">
      <div className="w-139 h-196 bg-grayScaleBlack80 rounded-6 relative">
        <div className="absolute top-10 left-10 inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13">
          <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
            {statusText}
          </p>
        </div>
      </div>
      <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR mt-8 mb-0 line-clamp-2">
        {title}
      </p>
      <p className="text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR mt-6 mb-0 line-clamp-1">
        {date}
      </p>
    </div>
  );
}

export default ConcertSlideCard;
