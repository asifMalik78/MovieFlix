import Image from "next/image";
import React from "react";

interface PersonType {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  known_for: KnownForType[];
}

interface KnownForType {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function PeopleCard({ people }: { people: PersonType }) {
  return (
    // <Link href={`/person/${people.id}`} className="select-none">
      <div className="card relative w-[17.5rem] h-[26.25rem] border-2 border-[#292929] rounded-xl  shadow-sm overflow-hidden">
        {people.profile_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${people.profile_path}`}
            alt="card-image"
            fill={true}
            loading="lazy"
            quality={100}
            className="select-none"
          />
        ) : (
          <Image
            src="/assets/no-poster-af8294eb.png"
            alt="card-image"
            fill={true}
            quality={100}
            className="select-none"
          />
        )}

        <div className="absolute bottom-0 flex flex-col w-full gap-2 px-1 py-2 people-nameBg">
          <h3 className="text-white truncate w-[100%] text-center  text-lg font-bold">
            {people.name}
          </h3>
        </div>
      </div>
    // </Link>
  );
}

export default PeopleCard;
