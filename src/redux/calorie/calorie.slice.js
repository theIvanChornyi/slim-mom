import { createSlice } from '@reduxjs/toolkit';
import { dailyCalorie } from './calorie.initialState';

const dailyCalorieSlice = createSlice({
  name: 'daily',
  initialState: dailyCalorie,
});

export const dailyCalorieReducer = dailyCalorieSlice.reducer;
