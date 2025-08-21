import { Video } from '../types/Video';
import { api } from '../api';

interface VideoListProps {
  videos: Video[];
  fetchVideos: () => void;
  setEditingVideo: (video: Video | null) => void;
}

export function VideoList({ videos, fetchVideos, setEditingVideo }: VideoListProps) {
  const handleDelete = async (id: string) => {
    await api.delete(`/videos/${id}`);
    fetchVideos();
  };

  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <strong>{video.title}</strong> - {video.description} ({video.duration}s)
          <button onClick={() => setEditingVideo(video)}>Edit</button>
          <button onClick={() => handleDelete(video.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
