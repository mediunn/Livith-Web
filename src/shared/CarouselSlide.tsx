type CarouselSlideProps = {
  category: string;
  title: string;
  imageUrl: string;
};

function CarouselSlide({ category, title, imageUrl }: CarouselSlideProps) {
  return (
    <div className="relative w-375 h-365">
      <div className="absolute top-214 left-16 flex w-96 h-14 px-7 py-5 justify-center items-center gap-10 shrink-0 rounded-12 bg-grayScaleBlack90">
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

export default CarouselSlide;
