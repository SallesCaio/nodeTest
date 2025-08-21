import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { api } from '../api';
export function VideoForm({ onCreate }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await api.post('/videos', { title, description, duration });
        onCreate({ id: '', title, description, duration }); // id vazio porque o backend não retorna ainda
        setTitle('');
        setDescription('');
        setDuration(0);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { placeholder: "Title", value: title, onChange: e => setTitle(e.target.value) }), _jsx("input", { placeholder: "Description", value: description, onChange: e => setDescription(e.target.value) }), _jsx("input", { type: "number", placeholder: "Duration", value: duration, onChange: e => setDuration(Number(e.target.value)) }), _jsx("button", { type: "submit", children: "Create Video" })] }));
}
