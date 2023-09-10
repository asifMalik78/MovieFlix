"use client";
import Image from "next/image";
import Rating from "./Rating";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { responsiveHeroCrousel } from "@/utils/responsiveCrousel";
import { formatOverview, getGenresName } from "@/utils/helperFunctions";
import { useRouter } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface HeroType {
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

  type: string;
}
const Hero = ({ popularMovies, popularSeries, type }: HeroType) => {
  const router = useRouter();
  return (
    <Carousel
      responsive={responsiveHeroCrousel}
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      autoPlay={true}
      infinite={true}
      ssr={true}
      autoPlaySpeed={10000}
      swipeable={true}
    >
      {type === "movies"
        ? popularMovies?.map((curr) => {
            return (
              <div className="relative h-[100vh] w-[100vw] z-0" key={curr.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${curr.backdrop_path}`}
                  alt="hero-image"
                  fill={true}
                  className="hidden object-cover md:block"
                  quality={100}
                  priority={true}
                />

                <Image
                  src={`https://image.tmdb.org/t/p/original${curr.poster_path}`}
                  alt="hero-image"
                  fill={true}
                  className="block object-cover md:hidden"
                  quality={100}
                  priority={true}
                />
                <div className="left-gradient"></div>
                <div className="bottom-gradient"></div>
                <div className="absolute px-4 md:px-0  md:left-[10%] z-30 w-full md:w-[55%] bottom-[15%] md:top-1/2 transform md:-translate-y-1/2">
                  <div className="flex flex-col gap-8 ">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      {curr.title}
                    </h1>
                    <div className="flex items-center gap-6">
                      <Rating value={curr.vote_average * 10} />

                      <div className="flex flex-wrap items-center gap-3">
                        {getGenresName(curr).map(
                          (genreName: string, idx: number) => {
                            return (
                              <Badge
                                className="py-1 text-sm bg-primary h-fit"
                                key={idx}
                              >
                                {genreName}
                              </Badge>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <p className=" w-full md:w-[80%]">
                    {formatOverview(curr.overview) + "..."}
                    </p>

                    <Button
                      className="flex items-center gap-2 mt-2 mr-auto font-medium uppercase md:text-lg md:px-5"
                      onClick={() => {
                        router.push(`/movies/${curr.id}`);
                      }}
                    >
                      <PlayArrowIcon />
                      Watch Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        : popularSeries?.map((curr) => {
            return (
              <div className="relative h-[100vh] w-[100vw] z-0" key={curr.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${curr.backdrop_path}`}
                  alt="hero-image"
                  fill={true}
                  className="hidden object-cover md:block"
                  quality={100}
                  priority={true}
                />

                <Image
                  src={`https://image.tmdb.org/t/p/original${curr.poster_path}`}
                  alt="hero-image"
                  fill={true}
                  className="block object-cover md:hidden"
                  quality={100}
                  priority={true}
                />
                <div className="left-gradient"></div>
                <div className="bottom-gradient"></div>
                <div className="absolute px-4 md:px-0  md:left-[10%] z-30 w-full md:w-[55%] bottom-[15%] md:top-1/2 transform md:-translate-y-1/2">
                  <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      {curr.name}
                    </h1>
                    <div className="flex items-center gap-6">
                      <Rating
                        value={parseInt((curr.vote_average * 10).toFixed(1))}
                      />

                      <div className="flex flex-wrap items-center gap-3">
                        {getGenresName(curr).map(
                          (genreName: string, idx: number) => {
                            return (
                              <Badge
                                className="py-1 md:text-sm bg-primary h-fit"
                                key={idx}
                              >
                                {genreName}
                              </Badge>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <p className=" w-full md:w-[80%]">
                      {formatOverview(curr.overview) + "..."}
                    </p>

                    <Button
                      className="flex items-center gap-2 mt-2 mr-auto font-medium uppercase md:text-lg md:px-5"
                      onClick={() => {
                        router.push(`/tvseries/${curr.id}`);
                      }}
                    >
                      <PlayArrowIcon />
                      Watch Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
    </Carousel>
  );
};

export default Hero;