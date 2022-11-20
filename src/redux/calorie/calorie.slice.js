import { createSlice } from '@reduxjs/toolkit';
import { dailyCalorie } from './calorie.initialState';

const dailyCalorieSlice = createSlice({
  name: 'daily',
  initialState: dailyCalorie,
});

export const dailyCalorieReducer = dailyCalorieSlice.reducer;


export const filterSlice = createSlice({
  name: 'filter',
  initialState: dailyCalorie,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
     
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
