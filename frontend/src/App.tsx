// src/App.tsx
import React, { useEffect, useState } from "react";
import { Video } from "./types/Video";
import { api } from "./api";
import { VideoForm } from "./components/VideoForm";
import { VideoList } from "./components/VideoList";

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const fetchVideos = async () => {
    const response = await api.get<Video[]>("/videos");
    setVideos(response.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleCreate = (video: Video) => {
    setVideos((prev) => [...prev, video]);
  };

  return (
    <div>
      <h1>Video CRUD</h1>
      <VideoForm onCreate={handleCreate} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App; // ✅ export default
