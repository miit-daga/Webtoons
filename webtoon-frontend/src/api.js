import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchWebtoons = async () => {
    const response = await axios.get(`${API_URL}/webtoons`);
    return response.data;
};

export const addWebtoon = async (webtoonData) => {
    const response = await axios.post(`${API_URL}/webtoons`, webtoonData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const fetchCharacters = async () => {
    const response = await axios.get(`${API_URL}/characters`);
    return response.data;
};

export const addCharacter = async (characterData) => {
    const response = await axios.post(`${API_URL}/characters`, characterData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};
export const deleteWebtoon = async (webtoonId) => {
    const response = await axios.delete(`${API_URL}/webtoons/${webtoonId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};
