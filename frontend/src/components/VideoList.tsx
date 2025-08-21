import React from 'react';
import type { Video } from '../types/Video';

type Props = {
  videos: Video[];
};

export function VideoList({ videos }: Props) {
  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <strong>{video.title}</strong> - {video.description} ({video.duration} min)
        </li>
      ))}
    </ul>
  );
}
