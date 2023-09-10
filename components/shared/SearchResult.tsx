import MovieCard from "./MovieCard";
import PeopleCard from "./PeopleCard";

interface MovieType {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface PersonType {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  known_for: KnownForType[];
}

interface KnownForType {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface SeriesType {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

interface SearchResultType {
  movie?: [MovieType];
  tv?: [SeriesType];
  person?: [PersonType];
  type: "movie" | "person" | "tv";
}

function SearchResult({ movie, tv, person, type }: SearchResultType) {
  return (
    <section className="mt-14">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 grid-col gap-14">
        {type === "movie" &&
          movie?.map((curr: MovieType) => {
            return (
              <MovieCard
                key={curr.id}
                id={curr.id}
                imagePath={curr.poster_path}
                rating={curr.vote_average}
                date={curr.release_date}
                name={curr.title}
                link="movies"
              />
            );
          })}

        {type === "tv" &&
          tv?.map((curr: SeriesType) => {
            return (
              <MovieCard
                key={curr.id}
                id={curr.id}
                imagePath={curr.poster_path}
                rating={curr.vote_average}
                date={curr.first_air_date}
                name={curr.name}
                link="tvseries"
              />
            );
          })}

        {type === "person" &&
          person?.map((curr: PersonType) => {
            return <PeopleCard people={curr} key={curr.id} />;
          })}
      </div>
    </section>
  );
}

export default SearchResult;
