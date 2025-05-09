function RecommendSearchItem({ word }: { word: string }) {
  return (
    <div>
      <p className="text-grayScaleBlack5 text-body-sm font-regular font-NotoSansKR  mb-24">
        {word}
      </p>
    </div>
  );
}

export default RecommendSearchItem;
