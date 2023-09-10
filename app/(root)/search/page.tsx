"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { getSearchResult } from "@/lib/apiCall";

import SearchResult from "@/components/shared/SearchResult";
import { useSession } from "next-auth/react";

interface Select {
  movie: boolean;
  tv: boolean;
  people: boolean;
}


const SearchPage = () => {
  const {data} = useSession();
  console.log(data);
  const [selected, setSelected] = useState<Select>({
    movie: true,
    tv: false,
    people: false,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState<any>([]);

  const debouncedInputValue = useDebounce(searchQuery, 500);
  function selectHandler(value: string, select: boolean) {
    setSelected({ movie: false, tv: false, people: false, [value]: select });
  }

  async function fetchSearchResults(query: string) {
    const type = selected.movie ? "movie" : selected.tv ? "tv" : "person";
    const page = 1;
    const res = await getSearchResult(type, query, page);
    setSearchData(res.result);
  }

  // Fetch search results when debouncedInputValue changes
  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery);
    } else {
      setSearchData([]);
    }
  }, [debouncedInputValue , selected]);

  return (
    <section className="min-h-screen px-6 md:px-24">
      <div className="flex justify-center w-full mt-24 ml-auto">
        <div className="flex items-center gap-8">
          <Button
            className={`${selected.tv === false && "text-md"} px-6 text-md`}
            variant={`${selected.movie ? "default" : "ghost"}`}
            onClick={() => selectHandler("movie", !selected.movie)}
          >
            Movie
          </Button>
          <Button
            className={`${selected.tv === false && "text-md"} px-6 text-md`}
            variant={`${selected.tv ? "default" : "ghost"}`}
            onClick={() => selectHandler("tv", !selected.tv)}
          >
            TV
          </Button>
          <Button
            className={`${selected.tv === false && "text-md"} px-6 text-md`}
            variant={`${selected.people ? "default" : "ghost"}`}
            onClick={() => selectHandler("people", !selected.people)}
          >
            People
          </Button>
        </div>
      </div>

      <div>
        <input
          type="search"
          value={searchQuery}
          placeholder={`Search for ${
            selected.movie ? "Movie" : selected.tv ? "Tv" : "People"
          }`}
          className="w-full px-3 py-3 mt-10 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-green-600"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
        <SearchResult
          movie={searchData}
          tv={searchData}
          person={searchData}
          type={selected.movie ? "movie" : selected.tv ? "tv" : "person"}
        />
      </div>
    </section>
  );
};

export default SearchPage;
