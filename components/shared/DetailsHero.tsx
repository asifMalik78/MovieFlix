"use client";
import Image from "next/image";
import Rating from "./Rating";
import { Badge } from "../ui/badge";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button } from "../ui/button";
import VideoModal from "../modals/VideoModal";
import { useState } from "react";
import {
  addFavourite,
  formatOverview,
  isSaved,
  removeFavourite,
} from "@/utils/helperFunctions";
import toast from "react-hot-toast";

interface DetailPropTypes {
  link: string;
  movieId: number;
  bgImagePath: string;
  imagePath: string;
  title: string;
  overview: string;
  rating: number;
  genres: {
    id: number;
    name: string;
  }[];

  date: string;
  video: {
    key: string;
  };
}
function DetailsHero({
  movieId,
  bgImagePath,
  imagePath,
  title,
  overview,
  rating,
  genres,
  date,
  video,
  link,
}: DetailPropTypes) {
  
  const [showMore, setShowMore] = useState(false);
  const [saved, setSaved] = useState(isSaved(movieId));

  const saveHandler = async () => {
    if (!saved) {
      addFavourite({ movieId, name: title, imagePath, date, rating, link });
      toast.success(`${title.slice(0, 10)}.. Added Successfully`);
    } else {
      removeFavourite({ movieId });
      toast.success(`${title.slice(0, 10)}.. Removed Successfully`);
    }

    setSaved((prev : boolean) => !prev);
  };
  return (
    <section>
      <div className="h-[100vh] w-[100vw] z-0 relative overflow-hidden md:mb-0 mb-12">
        <Image
          src={`https://image.tmdb.org/t/p/original${bgImagePath}`}
          alt="hero-image"
          fill={true}
          className="object-cover md:object-fill opacity-40"
          quality={100}
          priority={true}
        />

        <div className="bottom-gradient"></div>
        <div className="absolute z-30 w-full px-5 md:px-36 transform md:-translate-y-1/2 bottom-[12%] md:top-[55%] flex flex-col md:flex-row md:gap-14 items-center gap-6">
          <Image
            src={`https://image.tmdb.org/t/p/original${imagePath}`}
            alt="hero-image"
            width={350}
            height={490}
            quality={100}
            priority={true}
            className="hidden md:block object-fill rounded-xl border-2 border-[#292929]"
          />

          <Image
            src={`https://image.tmdb.org/t/p/original${bgImagePath}`}
            alt="hero-image"
            width={380}
            height={170}
            quality={100}
            priority={true}
            className="block object-fill md:hidden rounded-xl"
          />

          <div className="flex flex-col justify-start gap-3 md:gap-7">
            <h1 className="text-3xl font-bold leading-tight md:text-6xl">
              {title}
            </h1>

            <div className="flex items-center gap-6">
              <div>
                <Rating value={parseInt((rating * 10).toFixed(1))} />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {genres.map((curr: any) => {
                  return (
                    <Badge
                      className="py-1 text-sx md:text-sm bg-primary h-fit"
                      key={curr.id}
                    >
                      {curr.name}
                    </Badge>
                  );
                })}
              </div>
            </div>

            <p className="hidden md:block">{overview}</p>
            <p className="block md:hidden">
              {!showMore ? formatOverview(overview) : overview}
              {!showMore && (
                <span
                  className="font-bold text-primary"
                  onClick={() => setShowMore(!showMore)}
                >
                  {" "}
                  read more
                </span>
              )}
            </p>

            {video ? (
              <div className="flex items-center gap-6">
                <VideoModal video={video}>
                  <Button className="flex items-center gap-2 px-5 text-lg font-medium">
                    <PlayArrowIcon />
                    Watch Now
                  </Button>
                </VideoModal>

                {saved ? (
                  <Image
                    src="/assets/save-solid-icon.svg"
                    alt="heart-icon"
                    height={32}
                    width={32}
                    quality={100}
                    className="cursor-pointer"
                    onClick={saveHandler}
                  />
                ) : (
                  <Image
                    src="/assets/save-icon.svg"
                    alt="heart-icon"
                    height={32}
                    width={32}
                    quality={100}
                    className="cursor-pointer"
                    onClick={saveHandler}
                  />
                )}
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <Button
                  className="flex items-center gap-2 px-5 text-lg font-medium"
                  disabled
                >
                  <PlayArrowIcon />
                  Watch Now
                </Button>

                {saved ? (
                  <Image
                    src="/assets/save-solid-icon.svg"
                    alt="heart-icon"
                    height={32}
                    width={32}
                    quality={100}
                    className="cursor-pointer"
                    onClick={saveHandler}
                  />
                ) : (
                  <Image
                    src="/assets/save-icon.svg"
                    alt="heart-icon"
                    height={32}
                    width={32}
                    quality={100}
                    className="cursor-pointer"
                    onClick={saveHandler}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsHero;
