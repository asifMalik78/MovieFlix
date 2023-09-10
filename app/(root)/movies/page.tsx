import Hero from "@/components/shared/Hero";
import Movies from "@/components/shared/Movies";
import { fetchHomeData } from "@/lib/apiCall";

async function MoviesPage() {
  const allMovies = await fetchHomeData();
  return (
    <section>
      <Hero popularMovies={allMovies?.popularMovies} type="movies" />
      <main className="flex flex-col gap-24 px-8 py-10 md:px-24">
        <Movies type="movies" />
      </main>
    </section>
  );
}

export default MoviesPage;
