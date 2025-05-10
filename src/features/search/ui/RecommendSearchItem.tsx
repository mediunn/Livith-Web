interface RecommendSearchItemProps {
  word: string;
  input: string;
}

function RecommendSearchItem({ word, input }: RecommendSearchItemProps) {
  const index = word.toLowerCase().indexOf(input.toLowerCase());

  const before = word.slice(0, index);
  const match = word.slice(index, index + input.length);
  const after = word.slice(index + input.length);

  return (
    <p className="text-grayScaleBlack5 text-body-sm font-regular font-NotoSansKR mb-24">
      {before}
      <strong className="font-bold">{match}</strong>
      {after}
    </p>
  );
}

export default RecommendSearchItem;
