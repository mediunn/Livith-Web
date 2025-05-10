import NavPrev from "../shared/assets/NavPrevIcon.svg";

function MusicTitleBar() {
  return (
    <div className="relative flex items-center w-full h-60">
      <button className="absolute left-0 ml-16 mt-20 w-38 h-38 p-0 bg-transparent border-none cursor-pointer">
        <img src={NavPrev} alt="prev" className="w-full h-full" />
      </button>
      <p className="mx-auto pt-20 text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
        Hello (FEAT. TaeYang)
      </p>
    </div>
  );
}

export default MusicTitleBar;
