import CardSkeleton from "./CardSkeleton";

function CardListSkeleton({ num }: { num: number }) {
  return (
    <div className="grid grid-cols-3 gap-10 max-w-md">
      {new Array(num).fill(0).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export default CardListSkeleton;
