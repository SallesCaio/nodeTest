import { useState, useEffect } from 'react';
import { api } from '../api';
import { Video } from '../types/Video';

interface VideoFormProps {
  fetchVideos: () => void;
  editingVideo: Video | null;
  setEditingVideo: (video: Video | null) => void;
}

export function VideoForm({ fetchVideos, editingVideo, setEditingVideo }: VideoFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState<number | ''>('');

  useEffect(() => {
    if (editingVideo) {
      setTitle(editingVideo.title);
      setDescription(editingVideo.description);
      setDuration(editingVideo.duration);
    } else {
      setTitle('');
      setDescription('');
      setDuration('');
    }
  }, [editingVideo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const videoData = {
      title,
      description,
      duration: Number(duration),
    };

    if (editingVideo) {
      await api.put(`/videos/${editingVideo.id}`, videoData);
      setEditingVideo(null);
    } else {
      await api.post('/videos', videoData);
    }

    setTitle('');
    setDescription('');
    setDuration('');
    fetchVideos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (seconds)"
        value={duration}
        onChange={e => setDuration(e.target.value === '' ? '' : Number(e.target.value))}
        required
      />
      <button type="submit">{editingVideo ? 'Update' : 'Create'}</button>
    </form>
  );
}
