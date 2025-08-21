import React, { useState } from 'react';
import type { Video } from '../types/Video';
import { api } from '../api';

type Props = {
  onCreate: (video: Video) => void;
};

export function VideoForm({ onCreate }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await api.post('/videos', { title, description, duration });
    onCreate({ id: '', title, description, duration }); // id vazio porque o backend não retorna ainda
    setTitle('');
    setDescription('');
    setDuration(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="number" placeholder="Duration" value={duration} onChange={e => setDuration(Number(e.target.value))} />
      <button type="submit">Create Video</button>
    </form>
  );
}
