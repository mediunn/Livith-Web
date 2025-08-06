function ReprotConcert() {
  const handleClick = () => {
    window.location.href = "https://forms.gle/q7uQEr4XSiQmoVkM6";
  };

  return (
    <>
      <div className="flex justify-between h-297 inset-0 bg-gradient-to-b from-grayScaleBlack80 to-transparent opacity-100">
        <p className="ml-16 mt-217 mb-30 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          더 즐거운 콘서트 경험을 <br />
          위해 피드백을 남겨주세요
        </p>
        <button
          onClick={handleClick}
          className="mr-16 mt-217 w-130 h-44 bg-mainYellow30 rounded-30 text-grayScaleBlack100 text-Body2-md font-medium font-NotoSansKR "
        >
          피드백 남기기
        </button>
      </div>
      <div className="w-full h-5 bg-[#29303C]"></div>
    </>
  );
}

export default ReprotConcert;
