import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import { useEffect, useState } from "react";
import { api } from "./api";
import { VideoForm } from "./components/VideoForm";
import { VideoList } from "./components/VideoList";
const App = () => {
    const [videos, setVideos] = useState([]);
    const fetchVideos = async () => {
        const response = await api.get("/videos");
        setVideos(response.data);
    };
    useEffect(() => {
        fetchVideos();
    }, []);
    const handleCreate = (video) => {
        setVideos((prev) => [...prev, video]);
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Video CRUD" }), _jsx(VideoForm, { onCreate: handleCreate }), _jsx(VideoList, { videos: videos })] }));
};
export default App; // ✅ export default
