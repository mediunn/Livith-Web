import { InterestSortFilter } from "../../../entities/concert/types";

interface Props {
  sort: InterestSortFilter;
  setSort: (sort: InterestSortFilter) => void;
}

function InterestListSortMenu({ sort, setSort }: Props) {
  const baseClass = "py-3 text-center rounded-8 font-NotoSansKR cursor-pointer";
  const activeClass =
    "bg-mainYellow30 text-Body4-sm font-semibold text-grayScaleBlack100";
  const inactiveClass = "text-Body4-md font-medium text-grayScaleWhite";

  return (
    <div className="absolute right-3 top-10 w-98 flex flex-col border border-grayScaleBlack80 bg-grayScaleBlack90 rounded-tl-16 rounded-bl-16 rounded-br-16 px-14 py-16 gap-6 z-10">
      <button
        className={`${baseClass} ${
          sort === InterestSortFilter.TICKET_DATE ? activeClass : inactiveClass
        }`}
        onClick={() => setSort(InterestSortFilter.TICKET_DATE)}
      >
        예매일
      </button>
      <button
        className={`${baseClass} ${
          sort === InterestSortFilter.PERFORMANCE_DATE
            ? activeClass
            : inactiveClass
        }`}
        onClick={() => setSort(InterestSortFilter.PERFORMANCE_DATE)}
      >
        공연 일정
      </button>
    </div>
  );
}

export default InterestListSortMenu;
