function ConcertInsideInfo() {
  return (
    <div className="w-375 h-390">
      <img
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202503/30/1e59b28f-017b-40e2-b3a3-db9bb4f7bfaf.jpg"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-240 left-16 ">
        <div className="inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13">
          <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR m-0">
            진행중
          </p>
        </div>
        <p className=" my-20 text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR">
          World Tour Korea
          <br />[ LIVE FULL EVENUNG ]
        </p>
        <p className="m-0 text-grayScaleWhite text-body-sm font-ragular font-NotoSansKR">
          2025.4.7~4.9
        </p>
        <p className="m-0 text-grayScaleWhite text-body-sm font-ragular font-NotoSansKR">
          G-Dragon
        </p>
      </div>
    </div>
  );
}

export default ConcertInsideInfo;
