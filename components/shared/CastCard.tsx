import Image from "next/image";
import React from "react";

interface CasteType {
  name: string;
  characterName: string;
  profileImagePath: string;
  id: number;
}
function CastCard({ name, characterName, profileImagePath, id }: CasteType) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[16rem] h-[16rem] md:w-[10rem] md:h-[10rem] rounded-full overflow-hidden">
        {profileImagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${profileImagePath}`}
            alt="profile-photo"
            fill={true}
            className="object-center"
            quality={70}
          />
        ) : (
          <Image
            src="/assets/no-poster-af8294eb.png"
            alt="profile-photo"
            fill={true}
            className="object-center"
            quality={70}
          />
        )}
      </div>
      <h1 className="mt-4 text-2xl font-bold text-center md:text-xl">{name}</h1>
      <h1 className=" text-xl md:text-md text-zinc-500 md:w-[80%] text-center">
        {characterName}
      </h1>
    </div>
  );
}

export default CastCard;
