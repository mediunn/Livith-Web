type MdSlideCardProps = {
  name: string;
  price: string;
  imageUrl?: string;
};

function MdSlideCard({ name, price, imageUrl }: MdSlideCardProps) {
  return (
    <div className="w-108 h-214 cursor-pointer">
      <div className="w-108 h-158 relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full rounded-6 object-cover"
          />
        ) : (
          <div className="w-full h-full bg-grayScaleBlack80 rounded-6" />
        )}
      </div>
      <p className="mt-8 mb-0 text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR line-clamp-1">
        {name}
      </p>
      <p className="mt-10 mb-0 text-grayScaleBlack30 text-Caption1-sm font-semibold font-NotoSansKR line-clamp-1">
        {price}
      </p>
    </div>
  );
}

export default MdSlideCard;
