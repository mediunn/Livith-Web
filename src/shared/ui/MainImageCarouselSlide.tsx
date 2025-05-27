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
    <div className="relative w-full h-365">
      <div className="h-365 absolute inset-0 bg-gradient-to-t from-grayScaleBlack100 to-transparent opacity-50"></div>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-214 left-16 inline-flex items-center justify-cente px-13 py-8 rounded-24 bg-grayScaleBlack90">
        <p className="text-grayScaleWhite text-caption-lg font-semibold font-NotoSansKR mz-0">
          {category}
        </p>
      </div>
      <p className="absolute top-257 left-19 text-grayScaleWhite text-title font-bold font-NotoSansKR m-0">
        {title}
      </p>
    </div>
  );
}

export default MainImageCarouselSlide;
