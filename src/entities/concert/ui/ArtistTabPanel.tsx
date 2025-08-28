import { ConcertCulture } from "../api/getConcertCulture";
import Intro from "./Intro";
import ArtistInfo from "./ArtistInfo";
import FanCultureInfo from "./FanCultureInfo";

interface ArtistTabPanelProps {
  introduction: string;
  concertId: number;
  artist: string;
  debutDate: string;
  debutPlace: string;
  category: string;
  detail: string;
  instagramUrl: string;
  keywords: string[];
  imgUrl: string;
  concertCulture: ConcertCulture[];
}

function ArtistTabPanel({
  introduction,
  concertId,
  artist,
  debutDate,
  debutPlace,
  category,
  detail,
  instagramUrl,
  keywords,
  imgUrl,
  concertCulture,
}: ArtistTabPanelProps) {
  return (
    <>
      <Intro introduction={introduction} />
      {artist && (
        <ArtistInfo
          concertId={concertId}
          artist={artist}
          debutDate={debutDate}
          debutPlace={debutPlace}
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
