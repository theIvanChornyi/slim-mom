import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postDaylyRate = createAsyncThunk(
  'daily/dailyRate',
  async (params, thunkApi) => {
    try {
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const postUserDaylyRate = createAsyncThunk(
  'daily/userDailyRate',
  async (params, thunkApi) => {
    try {
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const postDayProduct = createAsyncThunk(
  'daily/userDailyRate',
  async (params, thunkApi) => {
    try {
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteDayProduct = createAsyncThunk(
  'daily/userDailyRate',
  async (params, thunkApi) => {
    try {
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getDayProductInfo = createAsyncThunk(
  'daily/userDailyRate',
  async (params, thunkApi) => {
    try {
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
