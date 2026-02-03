import { genreMap } from "../../concert/constants/filterMaps";
import { Genre } from "../types";
import { StateWithSetter } from "../../../shared/types/props";
import PreferenceCard from "../../../features/preference/ui/PreferenceCard";

interface GenreListProps {
  genres: Genre[];
  preferredState: StateWithSetter<{ id: number; label: string }[]>;
}

function GenreList({ genres, preferredState }: GenreListProps) {
  return (
    <div className="w-full grid grid-cols-3 gap-10">
      {genres.map((genre) => (
        <PreferenceCard
          key={genre.id}
          id={genre.id}
          label={genreMap[genre.name]}
          imgUrl={genre.imgUrl}
          preferredState={preferredState}
        />
      ))}
    </div>
  );
}

export default GenreList;
