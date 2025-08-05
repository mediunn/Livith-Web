import ConcertInfoCarouselArrow from "../shared/assets/ConcertInfoCarouselArrow.svg";

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
    <div className="relative w-full h-274" onClick={handleClick}>
      <div className="h-365 absolute inset-0 bg-gradient-to-t from-grayScaleBlack100 to-transparent opacity-50"></div>
      <img
        src={imageUrl}
        alt={content}
        className="w-full h-full object-cover rounded-8"
      />
      <button className="absolute top-26 left-26 w-30 h-30 w-30 bg-transparent border-none cursor-pointer">
        <img
          src={ConcertInfoCarouselArrow}
          alt="concert info carousel arrow"
          className="w-full h-full"
        />
      </button>
      <div className="absolute bottom-53 px-26">
        <div className="px-13 py-4 inline-flex items-center justify-cente bg-grayScaleBlack90 rounded-24">
          <p className="text-grayScaleBlack30 text- Caption2-re font-regular font-NotoSansKR">
            {category}
          </p>
        </div>
        <p className="pt-10 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
          {content}
        </p>
      </div>
    </div>
  );
}

export default ConcertInfoCarouselSlide;
