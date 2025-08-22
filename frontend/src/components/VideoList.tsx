import React from "react";
import { Video } from "../types/Video";

interface VideoListProps {
  videos: Video[];
}

export const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  if (!videos.length) return <p>No videos found</p>;

  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <p>Duration: {video.duration} sec</p>
        </li>
      ))}
    </ul>
  );
};
