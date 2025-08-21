import { useEffect, useState } from 'react';
import { api } from './api';
import { Video } from './types/Video';
import { VideoForm } from './components/VideoForm';
import { VideoList } from './components/VideoList';

export default function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);

  const fetchVideos = async () => {
    const response = await api.get('/videos');
    setVideos(response.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Video CRUD</h1>
      <VideoForm fetchVideos={fetchVideos} editingVideo={editingVideo} setEditingVideo={setEditingVideo} />
      <VideoList videos={videos} fetchVideos={fetchVideos} setEditingVideo={setEditingVideo} />
    </div>
  );
}
