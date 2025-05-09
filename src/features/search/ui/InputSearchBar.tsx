import SearchIcon from "../../../shared/assets/SearchIcon.tsx";
import BackArrow from "../../../widgets/BackArrow.tsx";

function InputSearchBar() {
  return (
    <div className="flex pt-13 pb-12 pl-16 pr-16">
      <BackArrow />
      <div className="flex items-center relative w-full ml-2 py-7 pl-16 bg-grayScaleWhite rounded-10">
        <input
          type="text"
          placeholder="찾고 있는 콘서트는 무엇인가요?"
          className="w-full my-9 text-grayScaleBlack80 text-body-sm font-regular font-NotoSansKR border-none outline-none"
        />
        <SearchIcon color="black" />
      </div>
    </div>
  );
}

export default InputSearchBar;
