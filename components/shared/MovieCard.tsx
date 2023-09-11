import Image from "next/image";
import React from "react";
import Rating from "./Rating";
import { formatDate, removeFavourite } from "@/utils/helperFunctions";
import Link from "next/link";
import { Button } from "../ui/button";

interface CardType {
  id: number;
  name: string;
  imagePath: string;
  date: string;
  rating: number;
  link : "movies" | "tvseries";
  favourite?:boolean;
  filterData?: (movieId: number , name : string) => void;
}
function MovieCard({ id, name, imagePath, date, rating , link , favourite , filterData }: CardType) {
  
  const removeHandler = () => {
   filterData && filterData(id , name);
   removeFavourite({movieId : id});
  }
  return (
    <div className="flex flex-col">
    <Link href={`/${link}/${id}`} className="select-none">
      <div className="card relative w-[14.5rem] h-[22rem] sm:w-[17.8rem] md:w-[17.5rem] sm:h-[26rem] md:h-[26.25rem] border-2 border-[#292929] rounded-xl  shadow-sm overflow-hidden">
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${imagePath}`}
            alt="card-image"
            fill={true}
            loading="lazy"
            quality={70}
            className="select-none"
          />
        ) : (
          <Image
            src="/assets/no-poster-af8294eb.png"
            alt="card-image"
            fill={true}
            quality={70}
            className="select-none"
          />
        )}

        <div className="card-overlay">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 flex flex-col w-full gap-2 px-3 pb-2">
              <div>
                <Rating value={rating * 10} />
              </div>
              <p className="text-gray-100">{formatDate(date)}</p>
              <h3 className="text-white truncate w-[100%]  text-lg font-bold">
                {name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
      {favourite && <Button className="w-full mt-4 bg-primary" onClick={removeHandler}>Remove</Button>}
    </div>
  );
}

export default MovieCard;
