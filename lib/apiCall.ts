const fetchOptions = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
};

export async function fetchHomeData() {
  try {
    const popularMoviesResponse = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      fetchOptions
    );
    const popularMovies = await popularMoviesResponse.json();

    const topRatedMoviesResponse = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      fetchOptions
    );
    const topRatedMovies = await topRatedMoviesResponse.json();

    const trendingMoviesResponse = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1",
      fetchOptions
    );
    const trendingMovies = await trendingMoviesResponse.json();

    const popularSeriesResponse = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      fetchOptions
    );
    const popularSeries = await popularSeriesResponse.json();

    const topRatedSeriesResponse = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      fetchOptions
    );
    const topRatedSeries = await topRatedSeriesResponse.json();

    const trendingSeriesResponse = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1",
      fetchOptions
    );
    const trendingSeries = await trendingSeriesResponse.json();

    return {
      popularMovies: popularMovies.results,
      topRatedMovies: topRatedMovies.results,
      popularSeries: popularSeries.results,
      topRatedSeries: topRatedSeries.results,
      trendingSeries: trendingSeries.results,
      trendingMovies: trendingMovies.results,
    };
  } catch (error: any) {
    throw new Error("Error fetching home data: " + error.message);
  }
}

export async function fetchAllMovies(
  page: number,
  options: { signal: AbortSignal }
) {
  try {
    const { signal } = options;

    const allMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${page}`,
      { ...fetchOptions, signal, method: "GET" }
    );
    const allMovies = await allMoviesResponse.json();
    return { allMovies: allMovies.results };
  } catch (error: any) {
    throw new Error("Error fetching all movies: " + error.message);
  }
}

export async function fetchMovieById(id: string) {
  try {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      fetchOptions
    );
    const creditsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      fetchOptions
    );
    const videosResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      fetchOptions
    );
    const similarResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      fetchOptions
    );
    const recomendedResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      fetchOptions
    );

    const movie = await movieResponse.json();
    const credits = await creditsResponse.json();
    const videos = await videosResponse.json();
    const similar = await similarResponse.json();
    const recomended = await recomendedResponse.json();

    const filteredCredits = credits.cast.map((curr: any) => {
      return {
        name: curr.name,
        characterName: curr.character,
        profileImagePath: curr.profile_path,
        id: curr.id,
      };
    });

    const filteredVideos = videos.results.map((curr: any) => {
      return {
        key: curr.key,
      };
    });

    const result = {
      bgImagePath: movie.backdrop_path,
      imagePath: movie.poster_path,
      title: movie.title,
      overview: movie.overview,
      rating: movie.vote_average,
      genres: movie.genres,
      cast: filteredCredits,
      date: movie.release_date,
      videos: filteredVideos,
      similar: similar.results,
      recomended: recomended.results,
    };

    return { result };
  } catch (error: any) {
    throw new Error("Error fetching movie by ID: " + error.message);
  }
}

export async function fetchTvSeriesById(id: string) {
  console.log("i am called");
  try {
    const tvSeriesResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
      fetchOptions
    );
    const tvSeries = await tvSeriesResponse.json();

    const creditsResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
      fetchOptions
    );
    const credits = await creditsResponse.json();

    const videosResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
      fetchOptions
    );
    const videos = await videosResponse.json();

    const similarResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`,
      fetchOptions
    );
    const similar = await similarResponse.json();

    const recomendedResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`,
      fetchOptions
    );
    const recomended = await recomendedResponse.json();

    const filteredCredits = credits.cast.map((curr: any) => {
      return {
        name: curr.name,
        characterName: curr.character,
        profileImagePath: curr.profile_path,
        id: curr.id,
      };
    });

    const filteredVideos = videos.results.map((curr: any) => {
      return {
        key: curr.key,
      };
    });
  
    const result = {
      bgImagePath: tvSeries.backdrop_path,
      imagePath: tvSeries.poster_path,
      title: tvSeries.name,
      overview: tvSeries.overview,
      rating: tvSeries.vote_average,
      genres: tvSeries.genres,
      cast: filteredCredits,
      date: tvSeries.first_air_date,
      videos: filteredVideos,
      similar: similar.results,
      recomended: recomended.results,
    };

    return { result };
  } catch (error: any) {
    throw new Error("Error fetching TV series by ID: " + error.message);
  }
}

export async function fetchAllTvSeries(
  page: number,
  options: { signal: AbortSignal }
) {
  try {
    const { signal } = options;
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?page=${page}`,
      {
        ...fetchOptions,
        method: "GET",
        signal,
      }
    );

    const allMovies = await response.json();

    return { allMovies: allMovies.results };
  } catch (error: any) {
    throw new Error("Error fetching all TV series: " + error.message);
  }
}

export async function getSearchResult(
  type: string,
  query: string,
  page: number = 1
) {
  try {
    const searchResultResponse = await fetch(
      `https://api.themoviedb.org/3/search/${type}?query=${query}&language=en-US&page=${page}&include_adult=false`,
      fetchOptions
    );
    const searchResult = await searchResultResponse.json();

    return { result: searchResult.results };
  } catch (error: any) {
    throw new Error("Error fetching search results: " + error.message);
  }
}

export async function registerUser({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    return res;
  } catch (err: any) {
    console.log("Error is", err.message);
  }
}

