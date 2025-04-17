type CarouselSlideProps = {
  category: string;
  title: string;
  imageUrl: string;
};

function CarouselSlide({ category, title, imageUrl }: CarouselSlideProps) {
  return (
    <div className="relative w-[375px] h-[365px]">
      <div className="absolute top-[214px] left-[16px] flex w-[96px] h-[14px] px-[7px] py-[5px] justify-center items-center gap-[10px] shrink-0 rounded-[12px] bg-grayScaleBlack90">
        <p className="text-grayScaleWhite text-caption-lg font-semibold font-NotoSansKR m-0">
          {category}
        </p>
      </div>
      <p className="font-bold font-NotoSansKR text-grayScaleWhite absolute top-[257px] left-[19px] m-0">
        {title}
      </p>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
  );
}

export default CarouselSlide;
