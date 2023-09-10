"use client";
import { responsiveVideo } from "@/utils/responsiveCrousel";
import VideoCard from "./VideoCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface VideoType {
  video: [key: string];
}
function VideoCrousel({ video }: VideoType) {
  return (
    <div className="pl-3 md:pl-0">
      <div className="flex flex-col gap-2 mb-10 w-fit">
        <h1 className="text-2xl text-white uppercase md:text-3xl">Videos</h1>
        <div className="md:h-2 w-[60%] bg-primary rounded-sm h-1"></div>
      </div>
      <Carousel
        ssr={true}
        partialVisible={true}
        responsive={responsiveVideo}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        swipeable={true}
        infinite={true}
        partialVisbile={true}
      >

        {
          video.length > 0 ? (
            video.map((curr: any, idx) => {
              return <VideoCard key={idx} videoKey={curr.key} />;
            })
          ) : (
             <div className="text-2xl text-zinc-500">No videos available</div>
          )
        }
    
    
      </Carousel>
    </div>
  );
}

export default VideoCrousel;
