import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCalorie = createAsyncThunk(
  'daily/daily-rate',
  async (params, thunkApi) => {
    try {
      const response = await axios.post('/daily-rate', params);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
