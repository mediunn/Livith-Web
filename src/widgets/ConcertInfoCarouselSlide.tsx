import ConcertInfoCarouselArrow from "../shared/assets/ConcertInfoCarouselArrow.svg";

type MainImageCarouselSlideProps = {
  category: string;
  title: string;
  imageUrl: string;
};

function ConcertInfoCarouselSlide({
  category,
  title,
  imageUrl,
}: MainImageCarouselSlideProps) {
  return (
    <div className="relative w-full h-274">
      <div className="h-365 absolute inset-0 bg-gradient-to-t from-grayScaleBlack100 to-transparent opacity-50"></div>
      <img
        src={imageUrl}
        alt={title}
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
          <p className="text-grayScaleBlack30 text-caption-ssm font-regular font-NotoSansKR">
            {category}
          </p>
        </div>
        <p className="pt-10 text-grayScaleWhite text-body-sm font-semibold font-NotoSansKR">
          {title}
        </p>
      </div>
    </div>
  );
}

export default ConcertInfoCarouselSlide;
