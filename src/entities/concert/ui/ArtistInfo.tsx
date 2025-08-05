import InstagramIcon from "../../../shared/assets/InstagramIcon.svg";
import { formatBirthDate } from "../utils/formatBirthDate";

interface ArtistInfoProps {
  concertId: number;
  artist: string;
  birthDate: string;
  birthPlace: string;
  category: string;
  detail: string;
  instagramUrl: string;
  keywords: string[];
  imgUrl: string;
}

function ArtistInfo({
  artist,
  birthDate,
  birthPlace,
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
          <div className="bg-grayScaleBlack90 rounded-8 border border-grayScaleBlack80">
            <div className="relative w-full h-142 ">
              <img
                src={imgUrl}
                className="w-full h-full object-cover rounded-t-8"
              ></img>
            </div>

            <div className="pt-16 pr-16 pl-16 pb-24 ">
              <div className="relative">
                <div className="inline-flex items-center justify-center bg-mainYellow30 rounded-24">
                  <p className="px-13 py-4 text-grayScaleBlack100 text-Caption2-sm font-semibold font-NotoSansKR">
                    {category}
                  </p>
                </div>
                <p className="pt-8 text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR">
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
                <p className="pt-12 text-grayScaleWhite text-Caption1-sm font-semibold font-NotoSansKR">
                  {detail}
                </p>
                <div className="flex pt-20">
                  <p className="text-grayScaleWhite text-Caption1-sm font-semibold font-NotoSansKR">
                    출생
                  </p>
                  <p className="pl-16 text-grayScaleBlack30 text-Caption1-re font-regular font-NotoSansKR">
                    {formatBirthDate(birthDate)}, {birthPlace}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-13">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="mr-4 mb-6 inline-flex items-center justify-center bg-grayScaleBlack80 rounded-24"
            >
              <p className="px-13 py-4 text-grayScaleBlack30 text-Caption1-sm font-semibold font-NotoSansKR">
                {keyword}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ArtistInfo;
