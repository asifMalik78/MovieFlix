import Hero from "@/components/shared/Hero";
import Movies from "@/components/shared/Movies";
import { fetchHomeData } from "@/lib/apiCall";
import React from "react";

async function MovieSeriesPage() {
  const allMovies = await fetchHomeData();
  return (
    <section>
        <Hero
        popularSeries={allMovies?.trendingSeries}
        type="tv series"
      />
      <main className="flex flex-col gap-24 px-8 py-10 md:px-24">
        <Movies type="tv series" />
      </main>
    </section>
  );
}

export default MovieSeriesPage;
