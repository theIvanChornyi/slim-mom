import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AuthApi from 'services/API/API';

const token = {
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
      const { data } = await AuthApi.registrationRequest(user);
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
      const { data } = await AuthApi.logInRequest(user);
      token.set(data.accessToken);
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
    const persistedToken = savedToken.auth.refreshToken;
    const sid = savedToken.auth.sid;

    if (persistedToken === '') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);

    try {
      const { data } = await AuthApi.refreshtRequest(sid);
      token.set(data.newAccessToken);

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
      await AuthApi.logOutRequest();
      token.unSet();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
