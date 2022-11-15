import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

/*<----------------------------------------------->*/

// User registration
const registrationRequest = async user => {
  return await axios.post('/auth/register', user);
};

// User authentication
const logInRequest = async user => {
  return await axios.post('/auth/login', user);
};

// Logout;
const logOutRequest = async () => {
  return await axios.post('/auth/logout');
};

// Get new pair of tokens (use Bearer {refreshToken} instead of accessToken)
const refreshtRequest = async sid => {
  return await axios.post('/auth/refresh', { sid });
};

/*<----------------------------------------------->*/

// Get daily rate information based on your characteristics
const calculateDaylyRequest = async params => {
  return await axios.post('/daily-rate', params);
};

// Post your characteristics to the website and get daily rate information
const calculateDaylyAuthRequest = async (id, params) => {
  return await axios.post(`/daily-rate/${id}`, params);
};

/*<----------------------------------------------->*/

// Search and get a list of products by query
const searchingProductRequest = async search => {
  return await axios.get(`/daily-rate/?=${search}`);
};

// Post an eaten product
const addEatenProductRequest = async params => {
  return await axios.post('/day', params);
};

// Delete eaten product
const deleteEatenProductRequest = async params => {
  return await axios.delete('/day', params);
};

/*<----------------------------------------------->*/

// Get info for day
const getInfoForDayRequest = async date => {
  return await axios.post('/day/info', date);
};

// Get user info
const getUserInfoRequest = async date => {
  return await axios.post('/user', date);
};

/*<----------------------------------------------->*/

const APIs = {
  registrationRequest,
  logInRequest,
  logOutRequest,
  refreshtRequest,
  calculateDaylyRequest,
  calculateDaylyAuthRequest,
  searchingProductRequest,
  addEatenProductRequest,
  deleteEatenProductRequest,
  getInfoForDayRequest,
  getUserInfoRequest,
};
export default APIs;
