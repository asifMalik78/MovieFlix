"use client"
import { responsiveCasts } from "@/utils/responsiveCrousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CastCard from "./CastCard";

interface CasteType {
  cast: [
    {
      name: string;
      characterName: string;
      profileImagePath: string;
      id: number;
    }
  ];
}
function CastCrousel({ cast }: CasteType) {
  return (
    <div className="px-3 cursor-pointer md:px-0">
      <div className="flex flex-col justify-start gap-2 mb-10 w-fit">
        <h1 className="text-2xl text-white uppercase md:text-3xl">Top Cast</h1>
        <div className="md:h-2 w-[60%] bg-primary rounded-sm h-1"></div>
      </div>
      <Carousel
        responsive={responsiveCasts}
        removeArrowOnDeviceType={["mobile"]}
        infinite={true}
        ssr={true}
        partialVisbile={false}
      >
        {cast.map((curr: any) => {
          return (
            <CastCard
              key={curr.id}
              name={curr.name}
              characterName={curr.characterName}
              profileImagePath={curr.profileImagePath}
              id={curr.id}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default CastCrousel;
