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

// User registration
export const registrationRequest = async user => {
  return await axios.post('/auth/register', user);
};

// User authentication
export const logInRequest = async user => {
  return await axios.post('/auth/login', user);
};

// Logout;
export const logOutRequest = async () => {
  return await axios.post('/auth/logout');
};

// Get new pair of tokens (use Bearer {refreshToken} instead of accessToken)
export const refreshtRequest = async token => {
  return await axios.post('/auth/refresh', token);
};

// Get daily rate information based on your characteristics
export const calculateDaylyRequest = async params => {
  return await axios.post('/daily-rate', params);
};

// Post your characteristics to the website and get daily rate information
export const calculateDaylyAuthRequest = async (id, params) => {
  return await axios.post(`/daily-rate/${id}`, params);
};

// Search and get a list of products by query
export const searchingProductRequest = async search => {
  return await axios.get(`/daily-rate/?=${search}`);
};

// Post an eaten product
export const addEatenProductRequest = async params => {
  return await axios.post('/day', params);
};

// Delete eaten product
export const deleteEatenProductRequest = async params => {
  return await axios.delete('/day', params);
};

// Get info for day
export const getInfoForDayRequest = async date => {
  return await axios.post('/day/info', date);
};

// Get user info
export const getUserInfoRequest = async date => {
  return await axios.post('/user', date);
};
