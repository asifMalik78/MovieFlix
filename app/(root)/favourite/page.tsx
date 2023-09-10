"use client";
import MovieCard from "@/components/shared/MovieCard";
import { getFavourites } from "@/utils/helperFunctions";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Favourite() {
  const [data, setData] = useState([]);

  const filterData = (movieId: number, name: string) => {
    setData((prev: any) => {
      return prev.filter((curr: any) => curr.movieId !== movieId);
    });

    toast.success(`${name.slice(0, 10)}.. Removed Successfully`);
  };

  useEffect(() => {
    setData(getFavourites());
   
  }, []);

  return (
    <div className="px-10 mt-28">
      {data.length === 0 ? (
        <div className="w-full h-[55vh] md:h-[60vh] mt-16 relative z-0">
          <h1 className="absolute text-2xl w-[90%] font-bold text-center text-gray-500 transform -translate-x-1/2 -translate-y-1/2 md:text-3xl left-1/2 top-1/2">
            No movies/tvseries added
          </h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2 mb-6 w-fit">
            <h1 className="text-2xl text-white uppercase md:text-3xl">
              Favourites
            </h1>
            <div className="md:h-2 w-[60%] bg-primary rounded-sm h-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-col gap-14 justify-items-center">
            {data?.map((curr: any) => {
              return (
                <MovieCard
                  key={curr.movieId}
                  id={curr.movieId}
                  imagePath={curr.imagePath}
                  rating={curr.rating}
                  date={curr.date}
                  name={curr.name}
                  link={curr.link}
                  favourite={true}
                  filterData={filterData}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Favourite;
