import { SortFilter } from "../../../entities/concert/types";

interface SortMenuProps {
  sort: SortFilter;
  setSort: (sort: SortFilter) => void;
}

function SortMenu({ sort, setSort }: SortMenuProps) {
  const baseClass = "py-3 text-center rounded-8 font-NotoSansKR cursor-pointer";
  const activeClass =
    "bg-mainYellow30 text-Body4-sm font-semibold text-grayScaleBlack100";
  const inactiveClass = "text-Body4-md font-medium text-grayScaleWhite";

  return (
    <div className="absolute right-3 top-30 w-98 flex flex-col border border-grayScaleBlack80 bg-grayScaleBlack90 rounded-tl-16 rounded-bl-16 rounded-br-16 px-14 py-16 gap-6 z-10">
      <button
        type="button"
        className={`${baseClass} ${sort === SortFilter.LATEST ? activeClass : inactiveClass}`}
        onClick={() => setSort(SortFilter.LATEST)}
      >
        최신순
      </button>
      <button
        type="button"
        className={`${baseClass} ${sort === SortFilter.ALPHABETICAL ? activeClass : inactiveClass}`}
        onClick={() => setSort(SortFilter.ALPHABETICAL)}
      >
        가나다순
      </button>
    </div>
  );
}

export default SortMenu;
