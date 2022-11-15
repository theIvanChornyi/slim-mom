import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};
