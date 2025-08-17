import InstagramIcon from "../../../shared/assets/InstagramIcon.svg";
import { formatDebutDate } from "../utils/formatDebutDate";
import EmptyArtistImageIcon from "../../../shared/assets/EmptyArtistImageIcon.svg";

interface ArtistInfoProps {
  concertId: number;
  artist: string;
  debutDate: string;
  debutPlace: string;
  category: string;
  detail: string;
  instagramUrl: string;
  keywords: string[];
  imgUrl: string;
}

function ArtistInfo({
  artist,
  debutDate,
  debutPlace,
  category,
  detail,
  instagramUrl,
  keywords,
  imgUrl,
}: ArtistInfoProps) {
  return (
    <>
      <div className="mx-16">
        <div className="pt-24 pb-17">
          <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
            가수에 대한
            <br />
            정보를 필독해요
          </p>
        </div>

        <div>
          <div className="bg-grayScaleBlack90 rounded-8">
            {imgUrl && (
              <div className="relative w-full h-141">
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
                    <img
                      src={InstagramIcon}
                      alt="instagram"
                      className="w-30 h-30"
                    />
                  </a>
                )}
              </div>

              <div className="pt-12 w-full border-b border-dashed border-grayScaleBlack50" />

              <div>
                <p className="pt-12 text-grayScaleBlack30 text-Body4-md font-medium font-NotoSansKR">
                  {detail}
                </p>
                {(debutDate || debutPlace) && (
                  <div className="flex pt-20">
                    <p className="w-37 text-grayScaleBlack30 text-Body4-md font-medium font-NotoSansKR">
                      데뷔
                    </p>
                    <p className="text-grayScaleBlack50 text-Body4-md font-medium font-NotoSansKR">
                      {debutDate ? formatDebutDate(debutDate) : ""}
                      {debutDate && debutPlace ? ", " : ""} {debutPlace}
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
              )
          )}
        </div>
      </div>
    </>
  );
}

export default ArtistInfo;
