"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import ReactPlayer from "react-player";

function VideoModal({
  children,
  video,
}: {
  children: ReactNode;
  video: { key: string };
}) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="p-0 bg-black border-none w-fit h-fit max-w-fit">
        <DialogHeader>
          <DialogDescription>
            <div className="hidden md:block">
              
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video?.key}`}
              light={true}
              playing={true}
              style={{
                borderRadius: ".5rem",
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
              pip={false}
              controls={true}
            />
            </div>
            <div className="block md:hidden">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video?.key}`}
                light={true}
                width={350}
                height={240}
                style={{ borderRadius: ".5rem", overflow: "hidden" }}
                pip={true}
                controls={true}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default VideoModal;
