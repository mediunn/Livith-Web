import { ConcertCulture } from "../api/getConcertCulture";
import ArtistInfo from "./ArtistInfo";
import FanCultureInfo from "./FanCultureInfo";

interface ArtistTabPanelProps {
  concertId: number;
  artist: string;
  birthDate: string;
  birthPlace: string;
  category: string;
  detail: string;
  instagramUrl: string;
  keywords: string[];
  imgUrl: string;
  concertCulture: ConcertCulture[];
}

function ArtistTabPanel({
  concertId,
  artist,
  birthDate,
  birthPlace,
  category,
  detail,
  instagramUrl,
  keywords,
  imgUrl,
  concertCulture,
}: ArtistTabPanelProps) {
  return (
    <>
      {artist && (
        <ArtistInfo
          concertId={concertId}
          artist={artist}
          birthDate={birthDate}
          birthPlace={birthPlace}
          category={category}
          detail={detail}
          instagramUrl={instagramUrl}
          keywords={keywords}
          imgUrl={imgUrl}
        />
      )}
      {concertCulture.length > 0 && (
        <FanCultureInfo
          concertCulture={concertCulture}
          cultureCount={concertCulture.length}
        />
      )}
    </>
  );
}

export default ArtistTabPanel;
