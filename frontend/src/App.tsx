import React, { useEffect, useState } from 'react';
import type { Video } from './types/Video';
import { VideoForm } from './components/VideoForm';
import { VideoList } from './components/VideoList';
import { api } from './api';

export default function App() {
  const [videos, setVideos] = useState<Video[]>([]);

  const fetchVideos = async () => {
    const response = await api.get<Video[]>('/videos');
    setVideos(response.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleCreate = (video: Video) => {
    setVideos(prev => [...prev, video]);
  };

  return (
    <div>
      <h1>Video CRUD</h1>
      <VideoForm onCreate={handleCreate} />
      <VideoList videos={videos} />
    </div>
  );
}
