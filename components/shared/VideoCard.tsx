import ReactPlayer from "react-player";
function VideoCard({ videoKey }: { videoKey: string }) {
  return (
    <>
    <div className="hidden md:block">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoKey}`}
        light={true}
        width={380}
        height={225}
        style={{borderRadius: ".5rem" , overflow:"hidden"}}
        pip={true}
        controls={true}
      />
    </div>
    
    <div className="block md:hidden">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoKey}`}
        light={true}
        width={300}
        height={190}
        style={{borderRadius: ".5rem" , overflow:"hidden"}}
        pip={true}
        controls={true}
      />
    </div>
    </>
  );
}

export default VideoCard;
