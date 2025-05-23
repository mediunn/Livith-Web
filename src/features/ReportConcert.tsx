function ReprotConcert() {
  const handleClick = () => {
    window.location.href = "https://forms.gle/q7uQEr4XSiQmoVkM6";
  };

  return (
    <>
      <div className="flex justify-between">
        <p className="ml-16 mt-172 mb-30 text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
          더 빛나는 콘서트를 <br />
          위한 정보를 알고 있다면
        </p>
        <button
          onClick={handleClick}
          className="mr-16 mt-172 w-130 h-44 bg-mainYellow30 rounded-30 text-grayScaleBlack100 text-body-md font-medium font-NotoSansKR "
        >
          콘서트 제보하기
        </button>
      </div>
      <div className="w-full h-5 bg-[#29303C]"></div>
    </>
  );
}

export default ReprotConcert;
