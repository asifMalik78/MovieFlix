import Hero from "@/components/shared/Hero";
import Popular from "@/components/shared/Popular";
import { fetchHomeData } from "@/lib/apiCall";

export default async function Home() {
  const allMovies = await fetchHomeData();
  return (
    <section>
      <Hero popularMovies={allMovies?.trendingMovies} type="movies" />
      <main className="flex flex-col gap-24 px-1 md:py-10 md:px-24">
        <Popular
          type="Popular Movies"
          link="movies"
          popularMovies={allMovies?.popularMovies}
        />
        <Popular
          type="Popular Series"
          link="tvseries"
          popularSeries={allMovies?.popularSeries}
        />
        <Popular
          type="Top Rated Movies"
          link="movies"
          topRatedMovies={allMovies?.topRatedMovies}
        />
        <Popular
          type="Top Rated Series"
          link="tvseries"
          topRatedSeries={allMovies?.topRatedSeries}
        />
      </main>
    </section>
  );
}
