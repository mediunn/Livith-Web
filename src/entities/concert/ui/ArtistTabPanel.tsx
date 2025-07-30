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
}: ArtistTabPanelProps) {
  return (
    <>
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
      <FanCultureInfo concertId={concertId} />
    </>
  );
}

export default ArtistTabPanel;
