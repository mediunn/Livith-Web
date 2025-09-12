type MainImageCarouselSlideProps = {
  category: string;
  title: string;
  imageUrl: string;
  content: string;
};

function MainImageCarouselSlide({
  category,
  title,
  imageUrl,
  content,
}: MainImageCarouselSlideProps) {
  return (
    <div className="relative w-full h-365">
      {/* 배경 */}
      <img src={imageUrl} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-grayScaleBlack100 to-transparent opacity-100"></div>

      <div className="absolute bottom-30 left-0 p-16 w-full flex flex-col gap-8">
        <div className="inline-flex items-center justify-center px-13 py-4 rounded-24 bg-grayScaleBlack90 w-fit">
          <p className="text-grayScaleWhite text-Caption1-sm font-semibold font-NotoSansKR m-0">
            {category}
          </p>
        </div>

        <p
          className="text-grayScaleWhite text-Title font-bold font-NotoSansKR m-0"
          dangerouslySetInnerHTML={{
            __html: title.replace(/\n/g, "<br />"),
          }}
        />

        <p
          className="text-grayScaleBlack50 text-Body3-md font-medium font-NotoSansKR m-0"
          dangerouslySetInnerHTML={{
            __html: content.replace(/\n/g, "<br />"),
          }}
        />
      </div>
    </div>
  );
}

export default MainImageCarouselSlide;
