import CloseIcon from "../../../shared/assets/CloseIcon.svg";
import { StateWithSetter } from "../../../shared/types/props";

interface RecentSearchItemProps {
  word: string;
  recentState: StateWithSetter<string[]>;
}

const STORAGE_KEY = "recentSearches";

function RecentSearchItem({ word, recentState }: RecentSearchItemProps) {
  const { value: recent, setValue: setRecent } = recentState;
  const handleDeleteRecent = () => {
    const updated = recent.filter((item) => item !== word);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setRecent(updated);
  };

  return (
    <div
      className="w-fit border-1 border-solid border-grayScaleBlack30 rounded-26 flex items-center px-10 py-3"
      // 클릭 이벤트 추가 예정
      // onClick={() => console.log(word)}
    >
      <p className="text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR mr-4 ">
        {word}
      </p>
      <img src={CloseIcon} alt="삭제 아이콘" onClick={handleDeleteRecent} />
    </div>
  );
}

export default RecentSearchItem;
