type MainImageCarouselSlideProps = {
  category: string;
  title: string;
  imageUrl: string;
};

function MainImageCarouselSlide({
  category,
  title,
  imageUrl,
}: MainImageCarouselSlideProps) {
  return (
    <div className="relative w-375 h-365">
      <div className="absolute top-214 left-16 inline-flex items-center justify-center h-14 px-10 py-10 rounded-12 bg-grayScaleBlack90">
        <p className="text-grayScaleWhite text-caption-lg font-semibold font-NotoSansKR m-0">
          {category}
        </p>
      </div>
      <p className="absolute top-257 left-19 text-grayScaleWhite text-title font-bold font-NotoSansKR m-0">
        {title}
      </p>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
  );
}

export default MainImageCarouselSlide;
