import ConcertCardSkeleton from "./ConcertCardSkeleton";

function ConcertCardListSkeleton({ num }: { num: number }) {
  return (
    <div className="grid grid-cols-3 gap-10 max-w-md">
      {new Array(num).fill(0).map((_, index) => (
        <ConcertCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default ConcertCardListSkeleton;
