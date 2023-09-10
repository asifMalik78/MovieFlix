import { genres } from "./constants";

export function getGenresName(curr: any) {
  const genresArray = curr.genre_ids.map((currId: any) => {
    const idx = genres.findIndex((temp) => temp.id === currId);
    return genres[idx].name;
  });

  return genresArray;
}

export function getRatingColor(rating: number) {
  if (rating >= 1 && rating <= 3) {
    return "error"; // Low rating
  } else if (rating <= 6) {
    return "warning"; // Moderate rating
  } else {
    return "success"; // High rating
  }
}

export function formatOverview(str: string) {
  let arr: string[] = str.split(" ");
  if (arr.length < 35) {
    return str;
  }

  let formatedStr = arr.slice(0, 39).join(" ");
  return formatedStr;
}

export function popularityDescending(movies: any[]) {
  return movies.sort((a, b) => b.popularity - a.popularity);
}

export function popularityAscending(movies: any[]) {
  return movies.sort((a, b) => a.popularity - b.popularity);
}

export function ratingDescending(movies: any[]) {
  return movies.sort((a, b) => b.vote_average - a.vote_average);
}

export function ratingAscending(movies: any[]) {
  return movies.sort((a, b) => a.vote_average - b.vote_average);
}

export function sorAToZ(movies: any[], type: string) {
  if (type === "movies") {
    return movies.sort((a, b) => {
      const firstLetterA = a.title.charAt(0).toLowerCase();
      const firstLetterB = b.title.charAt(0).toLowerCase();

      if (firstLetterA < firstLetterB) {
        return -1;
      }
      if (firstLetterA > firstLetterB) {
        return 1;
      }
      return 0;
    });
  } else {
    return movies.sort((a, b) => {
      const firstLetterA = a.original_name.charAt(0).toLowerCase();
      const firstLetterB = b.original_name.charAt(0).toLowerCase();

      if (firstLetterA < firstLetterB) {
        return -1;
      }
      if (firstLetterA > firstLetterB) {
        return 1;
      }
      return 0;
    });
  }
}

export function formatDate(dateStr: string): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Date(dateStr).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
}

export function generateRandomPassword() {
  const length = 6;
  const charset = "0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

export function isSaved(movieId: number) {
  const isDataSaved = localStorage?.getItem("Favourites");
  if (isDataSaved) {
    const parsedData = JSON.parse(isDataSaved);
    return parsedData.find((curr: any) => curr.movieId === movieId);
  }

  return false;
}

export async function addFavourite({
  movieId,
  name,
  imagePath,
  date,
  rating,
  link,
}: {
  movieId: number;
  name: string;
  imagePath: string;
  date: string;
  rating: number;
  link: string;
}) {
  const data = { movieId, name, imagePath, date, rating, link };
  const isDataSaved = localStorage?.getItem("Favourites");
  if (!isDataSaved) {
    localStorage?.setItem("Favourites", JSON.stringify([data]));
  } else {
    const parsedData = JSON.parse(isDataSaved);
    localStorage?.setItem("Favourites", JSON.stringify([...parsedData, data]));
  }
}

export async function removeFavourite({ movieId }: { movieId: number }) {
  const isDataSaved = localStorage?.getItem("Favourites");
  if (isDataSaved) {
    const savedData = JSON.parse(isDataSaved);
    const filteredData = savedData.filter(
      (curr: any) => curr.movieId !== movieId
    );
    localStorage?.setItem("Favourites", JSON.stringify([...filteredData]));
  }
}


export  function getFavourites(){
  const isDataSaved = localStorage?.getItem("Favourites");
  if(isDataSaved){
    return JSON.parse(isDataSaved);
  }

  return [];
}