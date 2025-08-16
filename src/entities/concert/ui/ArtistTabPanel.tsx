import { ConcertCulture } from "../api/getConcertCulture";
import ArtistInfo from "./ArtistInfo";
import FanCultureInfo from "./FanCultureInfo";

interface ArtistTabPanelProps {
  concertId: number;
  artist: string;
  DebutDate: string;
  DebutPlace: string;
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
  DebutDate,
  DebutPlace,
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
          DebutDate={DebutDate}
          DebutPlace={DebutPlace}
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
