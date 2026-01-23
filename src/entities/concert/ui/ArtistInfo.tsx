import InstagramIcon from "../../../shared/assets/InstagramIcon.svg";
import { formatDebutDate } from "../utils/formatDebutDate";
import EmptyArtistImageIcon from "../../../shared/assets/EmptyArtistImageIcon.svg";

interface ArtistInfoProps {
  concertId: number;
  artist: string;
  debutDate: string;
  category: string;
  detail: string;
  instagramUrl: string;
  keywords: string[];
  imgUrl: string;
}

function ArtistInfo({
  artist,
  debutDate,
  category,
  detail,
  instagramUrl,
  keywords,
  imgUrl,
}: ArtistInfoProps) {
  const handleClick = () => {
    window.amplitude.track("click_report_artist_info");
    window.location.href = "https://forms.gle/aMj5C4LhDcMzueWz5";
  };

  return (
    <>
      <div className="mx-16">
        <div className="pt-30 pb-20 flex justify-between items-end">
          <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
            아티스트 정보
            <br />
            함께 알아볼까요?
          </p>

          <div
            onClick={handleClick}
            className="bg-grayScaleBlack100 rounded-24 border border-solid border-grayScaleBlack80 cursor-pointer"
          >
            <p className="px-13 py-4 text-grayScaleBlack50 text-Caption1-Bold font-bold font-NotoSansKR">
              정보 제보
            </p>
          </div>
        </div>

        <div>
          <div className="bg-grayScaleBlack90 rounded-8">
            {imgUrl && (
              <div className="relative w-full h-188">
                <img
                  src={imgUrl}
                  className="w-full h-full object-cover rounded-t-8"
                  onError={(e) => {
                    e.currentTarget.src = EmptyArtistImageIcon;
                  }}
                ></img>
              </div>
            )}

            <div className="px-16 py-16 ">
              <div className="relative">
                {category && (
                  <div className="inline-flex items-center justify-center bg-grayScaleBlack100 rounded-24">
                    <p className="px-13 py-4 text-grayScaleBlack50 text-Caption1-Bold font-bold font-NotoSansKR">
                      {category}
                    </p>
                  </div>
                )}
                <p className="pt-8 text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR">
                  {artist}
                </p>
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    className="absolute right-0 bottom-0 border-none cursor-pointer"
                  >
                    <img src={InstagramIcon} className="w-30 h-30" />
                  </a>
                )}
              </div>

              <div className="pt-12 w-full border-b border-dashed border-grayScaleBlack50" />

              <div>
                <p className="pt-12 text-grayScaleBlack30 text-Body4-md font-medium font-NotoSansKR">
                  {detail}
                </p>
                {debutDate && (
                  <div className="flex pt-20">
                    <p className="w-37 text-grayScaleBlack30 text-Body4-md font-medium font-NotoSansKR">
                      데뷔
                    </p>
                    <p className="text-grayScaleBlack50 text-Body4-md font-medium font-NotoSansKR">
                      {debutDate ? formatDebutDate(debutDate) : ""}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-13">
          {keywords.map(
            (keyword, index) =>
              keyword && (
                <div
                  key={index}
                  className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24"
                >
                  <p className="px-13 py-8 text-grayScaleBlack30 text-Caption1-Bold font-bold font-NotoSansKR">
                    {keyword}
                  </p>
                </div>
              ),
          )}
        </div>
      </div>
    </>
  );
}

export default ArtistInfo;
