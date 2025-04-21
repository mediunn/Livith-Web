import "../styles/concert-slide.css";

type ConcertSlideCardProps = {
  title: string;
  date: string;
};

function ConcertSlideCard({ title, date }: ConcertSlideCardProps) {
  return (
    <div className="w-139 h-280">
      <div className="w-139 h-196 bg-grayScaleBlack80 rounded-6 relative">
        <div className="absolute top-[10px] left-[10px] flex items-center justify-center w-56 h-32 bg-grayScaleBlack90 rounded-24">
          <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
            진행중
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
