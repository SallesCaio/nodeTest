import React, { useState } from "react";
import { Video } from "../types/Video";
import { api } from "../api";

interface VideoFormProps {
  onCreate: (video: Video) => void;
}

export const VideoForm: React.FC<VideoFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await api.post<Video>("/videos", {
      title,
      description,
      duration,
    });

    onCreate(response.data);

    setTitle("");
    setDescription("");
    setDuration(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />
      <button type="submit">Create Video</button>
    </form>
  );
};
