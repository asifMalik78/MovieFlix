import CastCrousel from "@/components/shared/CastCrousel";
import DetailsHero from "@/components/shared/DetailsHero";
import Popular from "@/components/shared/Popular";
import VideoCrousel from "@/components/shared/VideoCrousel";

import { fetchTvSeriesById } from "@/lib/apiCall";

async function page({ params }: { params: { id: string } }) {
  const data = await fetchTvSeriesById(params.id);
  return (
    <section>
      <DetailsHero
        link="tvseries"
        movieId={Number(params.id)}
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
        {data.result.similar?.length > 0 && (
          <Popular
            type="Similar Series"
            link="tvseries"
            popularSeries={data.result.similar}
          />
        )}

        {data.result.recomended?.length > 0 && (
          <Popular
            type="Recomendations Series"
            link="tvseries"
            popularSeries={data.result.recomended}
          />
        )}
      </div>
    </section>
  );
}

export default page;
