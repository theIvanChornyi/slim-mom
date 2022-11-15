import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.auth';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
});

export const authReduser = authSlice.reducer;
