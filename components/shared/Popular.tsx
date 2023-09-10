"use client";
import { responsiveCards } from "@/utils/responsiveCrousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

interface PopularType {
  type: string;
  popularMovies?: [
    {
      adult: boolean;
      backdrop_path: string;
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
  ];

  topRatedMovies?: [
    {
      adult: boolean;
      backdrop_path: string;
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
  ];

  popularSeries?: [
    {
      backdrop_path: string;
      first_air_date: string;
      genre_ids: number[];
      id: number;
      name: string;
      origin_country: string[];
      original_language: string;
      original_name: string;
      overview: string;
      popularity: number;
      poster_path: string;
      vote_average: number;
      vote_count: number;
    }
  ];

  topRatedSeries?: [
    {
      backdrop_path: string;
      first_air_date: string;
      genre_ids: number[];
      id: number;
      name: string;
      origin_country: string[];
      original_language: string;
      original_name: string;
      overview: string;
      popularity: number;
      poster_path: string;
      vote_average: number;
      vote_count: number;
    }
  ];

  link: "movies" | "tvseries";
}

const Popular = ({
  type,
  popularMovies,
  topRatedMovies,
  popularSeries,
  topRatedSeries,
  link,
}: PopularType) => {
  
  if (
    type === "Popular Movies" ||
    type === "Similar Movies" ||
    type === "Recomendations Movies"
  ) {
    return (
      <section className="pl-3 md:pl-0">
        <div className="flex flex-col gap-2 w-fit">
          <h1 className="text-2xl text-white uppercase md:text-3xl">
            {type === "Similar Movies" ||
            ("Recomendations Movies" && type !== "Popular Movies")
              ? type.split(" ")[0]
              : type}
          </h1>
          <div className="md:h-2 w-[60%] bg-primary rounded-sm h-1"></div>
        </div>
        <div className="w-full mt-6">
          <Carousel
            ssr={true}
            responsive={responsiveCards}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={true}
            infinite={true}
            partialVisible={true}
            
          
          >
            {popularMovies?.map((curr, idx) => {
              return (
                <MovieCard
                  key={idx}
                  id={curr.id}
                  imagePath={curr.poster_path}
                  name={curr.title}
                  date={curr.release_date}
                  rating={curr.vote_average}
                  link={link}
                />
              );
            })}
          </Carousel>
        </div>
      </section>
    );
  }

  if (
    type === "Popular Series" ||
    type === "Similar Series" ||
    type === "Recomendations Series"
  ) {
    return (
      <section className="pl-3 md:pl-0">
        <div className="flex flex-col gap-2 w-fit">
          <h1 className="text-2xl text-white uppercase md:text-3xl">
            {type === "Similar Series" ||
            ("Recomendations Series" && type !== "Popular Series")
              ? type.split(" ")[0]
              : type}
          </h1>
          <div className="md:h-2 w-[60%] bg-primary rounded-sm h-1"></div>
        </div>
        <div className="w-full mt-6">
          <Carousel
            ssr={true}
            responsive={responsiveCards}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={true}
            infinite={true}
            partialVisible={true}
 
          >
            {popularSeries?.map((curr, idx) => {
             
              return (
                <MovieCard
                  key={idx}
                  id={curr.id}
                  imagePath={curr.poster_path}
                  name={curr.name}
                  date={curr.first_air_date}
                  rating={curr.vote_average}
                  link="tvseries"
                />
              );
            })}
          </Carousel>
        </div>
      </section>
    );
  }

  if (type === "Top Rated Movies") {
    return (
      <section className="pl-3 md:pl-0">
        <div className="flex flex-col gap-2 w-fit">
          <h1 className="text-2xl text-white uppercase md:text-3xl"> {type}</h1>
          <div className="md:h-2 w-[60%] bg-primary rounded-sm h-1"></div>
        </div>
        <div className="w-full mt-6">
          <Carousel
            ssr={true}
            responsive={responsiveCards}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={true}
            infinite={true}
            partialVisible={true}
          >
            {topRatedMovies?.map((curr, idx) => {
              return (
                <MovieCard
                  key={idx}
                  id={curr.id}
                  imagePath={curr.poster_path}
                  name={curr.original_title}
                  date={curr.release_date}
                  rating={curr.vote_average}
                  link="movies"
                />
              );
            })}
          </Carousel>
        </div>
      </section>
    );
  }

  if (type === "Top Rated Series") {
    return (
      <section className="pl-3 md:pl-0">
        <div className="flex flex-col gap-2 w-fit">
          <h1 className="text-2xl text-white uppercase md:text-3xl"> {type}</h1>
          <div className="md:h-2 w-[60%] bg-primary rounded-sm h-1"></div>
        </div>
        <div className="w-full mt-6">
          <Carousel
            ssr={true}
            responsive={responsiveCards}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={true}
            infinite={true}
            partialVisible={true}
          >
            {topRatedSeries?.map((curr, idx) => {
              return (
                <MovieCard
                  key={idx}
                  id={curr.id}
                  imagePath={curr.poster_path}
                  name={curr.name}
                  date={curr.first_air_date}
                  rating={curr.vote_average}
                  link="tvseries"
                />
              );
            })}
          </Carousel>
        </div>
      </section>
    );
  }
};

export default Popular;
