import CastCrousel from "@/components/shared/CastCrousel";
import DetailsHero from "@/components/shared/DetailsHero";
import Popular from "@/components/shared/Popular";
import VideoCrousel from "@/components/shared/VideoCrousel";

import { fetchMovieById } from "@/lib/apiCall";

async function page({ params }: { params: { id: string } }) {
  const data = await fetchMovieById(params.id);
  return (
    <section>
      <DetailsHero
         link="movies"
        movieId = {Number(params.id)}
        bgImagePath={data.result.bgImagePath}
        imagePath={data.result.imagePath}
        title={data.result.title}
        overview={data.result.overview}
        rating={data.result.rating}
        genres={data.result.genres}
        date={data.result.date}
        video={data.result.videos[0]}
      />

      <div className="flex flex-col gap-24 py-6 md:px-24">
        <CastCrousel cast={data.result.cast} />
        <VideoCrousel video={data.result.videos} />
        {data?.result?.similar.length > 0 && (
          <Popular
            type="Similar Movies"
            link="movies"
            popularMovies={data.result.similar}
          />
        )}

        {data.result.recomended?.length > 0 && (
          <Popular
            type="Recomendations Movies"
            link="movies"
            popularMovies={data.result.recomended}
          />
        )}
      </div>
    </section>
  );
}

export default page;
