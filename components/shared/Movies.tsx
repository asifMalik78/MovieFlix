"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { sortFilter, movieGenres, seriesGenres } from "@/utils/constants";
import Card from "./MovieCard";
import { Button } from "../ui/button";
import { fetchAllMovies, fetchAllTvSeries } from "@/lib/apiCall";
import {
  popularityAscending,
  popularityDescending,
  ratingAscending,
  ratingDescending,
  sorAToZ,
} from "@/utils/helperFunctions";

interface filterType {
  genreVal: string;
  sortVal: string;
}

interface MovieType {
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

interface SeriesType {
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

const Movies = ({ type }: { type: string }) => {
  const [data, setData] = useState<MovieType[] | SeriesType[] | any[]>([]);
  const [filterData, setfilterData] = useState<
    MovieType[] | SeriesType[] | any[]
  >([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<filterType>({
    genreVal: "",
    sortVal: "",
  });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      const response =
        type === "movies"
          ? await fetchAllMovies(page, { signal })
          : await fetchAllTvSeries(page, { signal });

      setData((prev) => [...prev, ...response?.allMovies]);
      setfilterData((prev) => [...prev, ...response?.allMovies]);
    };

    fetchData();
    return () => {
      abortController.abort(); // Abort the API request when the component unmounts
    };
  }, [page, type]);

  useEffect(() => {
    let filteredAndSortedArray = [...data];

    // Apply filtering
    if (filters.genreVal !== "") {
      filteredAndSortedArray = filteredAndSortedArray.filter((curr: any) => {
        return curr.genre_ids.includes(parseInt(filters.genreVal));
      });
    }

    // Apply sorting
    if (filters.sortVal === "0") {
      filteredAndSortedArray = popularityDescending(filteredAndSortedArray);
    } else if (filters.sortVal === "1") {
      filteredAndSortedArray = popularityAscending(filteredAndSortedArray);
    } else if (filters.sortVal === "2") {
      filteredAndSortedArray = ratingDescending(filteredAndSortedArray);
    } else if (filters.sortVal === "3") {
      filteredAndSortedArray = ratingAscending(filteredAndSortedArray);
    } else if (filters.sortVal === "4") {
      filteredAndSortedArray = sorAToZ(filteredAndSortedArray, type);
    }

    setfilterData(filteredAndSortedArray);
  }, [filters.genreVal, filters.sortVal, data, type]);

  const handleFilterChange = (val: string, name: string): void => {
    setFilters((prev) => {
      return {
        ...prev,
        [name]: val,
      };
    });
  };

  return (
    <section className="flex flex-col w-full gap-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <h3 className="text-3xl font-bold text-gray-100 capitalize">{type}</h3>
        <div className="flex flex-col items-start gap-5 md:gap-10 md:items-center md:flex-row ">
          <Select
            onValueChange={(val: string) => {
              handleFilterChange(val, "genreVal");
            }}
          >
            <SelectTrigger className="w-full md:w-[11.8rem]  border-2">
              <SelectValue
                className="text-white"
                placeholder="Select a Genres"
              />
            </SelectTrigger>
            <SelectContent className="max-h-[14rem] bg-glass">
              <SelectGroup>
                <SelectLabel>Genres</SelectLabel>
                {type === "movies"
                  ? movieGenres.map((curr) => {
                      return (
                        <SelectItem
                          value={curr.id.toString()}
                          key={curr.id}
                          className="cursor-pointer hover:bg-primary"
                        >
                          {curr.name}
                        </SelectItem>
                      );
                    })
                  : seriesGenres.map((curr) => {
                      return (
                        <SelectItem
                          value={curr.id.toString()}
                          key={curr.id}
                          className="cursor-pointer hover:bg-primary"
                        >
                          {curr.name}
                        </SelectItem>
                      );
                    })}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(val: string) => {
              handleFilterChange(val, "sortVal");
            }}
          >
            <SelectTrigger className="w-[14rem] border-2">
              <SelectValue className="text-white" placeholder="Sort" />
            </SelectTrigger>
            <SelectContent className="max-h-[14rem] bg-glass">
              <SelectGroup>
                <SelectLabel>Sort</SelectLabel>
                {sortFilter.map((curr, idx) => {
                  return (
                    <SelectItem
                      value={idx.toString()}
                      key={idx}
                      className="cursor-pointer hover:bg-primary"
                    >
                      {curr}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-col gap-14 justify-items-center">
        {type === "movies" ? (
          filterData.length > 0 ? (
            filterData?.map((curr: any) => {
              return (
                <Card
                  key={curr.id}
                  id={curr.id}
                  imagePath={curr.poster_path}
                  rating={curr.vote_average}
                  date={curr.release_date}
                  name={curr.title}
                  link="movies"
                />
              );
            })
          ) : (
            <div className="w-full px-6 py-12 mx-auto text-2xl text-gray-50">
              No {type} found
            </div>
          )
        ) : filterData.length > 0 ? (
          filterData?.map((curr: any) => {
            return (
              <Card
                key={curr.id}
                id={curr.id}
                imagePath={curr.poster_path}
                rating={curr.vote_average}
                date={curr.first_air_date}
                name={curr.name}
                link="tvseries"
              />
            );
          })
        ) : (
          <div className="w-full px-6 py-12 mx-auto text-2xl text-gray-50">
            No {type} found
          </div>
        )}
      </div>

      <div className="flex items-center justify-center mt-12">
        <div className="flex items-center gap-8">
          <Button
            disabled={false}
            onClick={() => {
              page + 1 > 450 ? setPage(1) : setPage(page + 1);
            }}
          >
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Movies;
