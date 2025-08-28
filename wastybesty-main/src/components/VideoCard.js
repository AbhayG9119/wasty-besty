import React from "react";

export default function VideoCard({ video }) {
  return (
    <div className="video-card">
      <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">
        <img src={video.thumbnail} alt={video.title} style={{ borderRadius: "8px", width: "100%" }} />
        <h3 style={{ marginTop: "0.5rem", fontSize: "1rem" }}>{video.title}</h3>
      </a>
    </div>
  );
}
