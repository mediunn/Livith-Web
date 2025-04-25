function SetListCard() {
  return (
    <div className="w-108 h-188">
      <div className="w-108 h-158 bg-grayScaleBlack80 rounded-6 relative">
        <div className="absolute top-10 left-10 inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13">
          <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
            1회차
          </p>
        </div>
      </div>
      <p className="text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR mt-8 mb-0 line-clamp-1">
        2024.04.08
      </p>
    </div>
  );
}

export default SetListCard;
