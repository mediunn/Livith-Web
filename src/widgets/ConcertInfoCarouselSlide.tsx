import ConcertInfoCarouselArrow from "../shared/assets/ConcertInfoCarouselArrow.svg";
import EmptyConcertInfoIcon from "../shared/assets/EmptyConcertInfoIcon.svg";

type MainImageCarouselSlideProps = {
  category: string;
  content: string;
  imageUrl: string;
  ticketUrl: string;
};

function ConcertInfoCarouselSlide({
  category,
  content,
  imageUrl,
  ticketUrl,
}: MainImageCarouselSlideProps) {
  const handleClick = () => {
    if (ticketUrl) {
      window.open(ticketUrl, "_blank");
    }
  };

  return (
    <div className="relative w-full h-274 rounded-8" onClick={handleClick}>
      <div className="h-274 absolute inset-0 bg-gradient-to-t from-grayScaleBlack100 to-transparent opacity-90"></div>
      {imageUrl ? (
        <img
          src={imageUrl}
          className="w-full h-full object-cover rounded-8"
          onError={(e) => {
            e.currentTarget.src = EmptyConcertInfoIcon;
          }}
        />
      ) : (
        <img
          src={EmptyConcertInfoIcon}
          className="w-full h-full object-cover rounded-8"
        />
      )}

      <div className="absolute bottom-53 px-26">
        <div className="px-13 py-4 inline-flex items-center justify-cente bg-grayScaleBlack90 rounded-24">
          <p className="text-grayScaleBlack50 text-Caption1-Bold font-bold font-NotoSansKR">
            {category}
          </p>
        </div>
        <p className="pt-10 text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR">
          {content}
        </p>
      </div>
    </div>
  );
}

export default ConcertInfoCarouselSlide;
