import React from "react";
import VideoCard from "./VideoCard";

export default function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}
