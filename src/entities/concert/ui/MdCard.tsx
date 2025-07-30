type MdCardProps = {
  name: string;
  price: string;
  imgUrl: string;
  onClick?: () => void;
};

function MdCard({ name, price, imgUrl, onClick }: MdCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="w-full aspect-[108/158] relative">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt="MD 이미지"
            className="w-full h-full rounded-6 object-cover"
          />
        ) : (
          <div className="w-full bg-grayScaleBlack80 rounded-6" />
        )}
      </div>
      <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR mt-8 line-clamp-2">
        {name}
      </p>
      <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR mt-10 line-clamp-1">
        {price}
      </p>
    </div>
  );
}

export default MdCard;
