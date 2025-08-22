import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const VideoList = ({ videos }) => {
    if (!videos.length)
        return _jsx("p", { children: "No videos found" });
    return (_jsx("ul", { children: videos.map((video) => (_jsxs("li", { children: [_jsx("h3", { children: video.title }), _jsx("p", { children: video.description }), _jsxs("p", { children: ["Duration: ", video.duration, " sec"] })] }, video.id))) }));
};
