import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function VideoList({ videos }) {
    return (_jsx("ul", { children: videos.map(video => (_jsxs("li", { children: [_jsx("strong", { children: video.title }), " - ", video.description, " (", video.duration, " min)"] }, video.id))) }));
}
