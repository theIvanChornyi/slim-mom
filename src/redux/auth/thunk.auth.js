import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const signUpThunk = createAsyncThunk(
  'auth/signUpThunk',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/logInThunk',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUserThunk',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState();
    const persistedToken = savedToken.auth.token;
    if (persistedToken === '') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOutThunk',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      token.unSet();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
