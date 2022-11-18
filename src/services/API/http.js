import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
});

export const privateApi = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
});

export const setToken = token => {
  privateApi.defaults.headers.Authorization = `Bearer ${token}`;
};

export const unsetToken = () => {
  privateApi.defaults.headers.Authorization = '';
};
