interface IntroProps {
  introduction: string;
}

function Intro({ introduction }: IntroProps) {
  return (
    <>
      <div className="mt-20 mx-16 p-20 bg-grayScaleBlack80 rounded-12">
        <p className="text-grayScaleBlack50 text-Body4-sm font-semibold font-NotoSansKR">
          한 줄 소개
        </p>
        <p className="pt-4 text-grayScaleWhite text-Body3-sm font-semibold font-NotoSansKR">
          {introduction}
        </p>
      </div>
    </>
  );
}

export default Intro;
