import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.slimDaddy';

export const slimDaddy = createSlice({
  name: 'slimDaddySlice',
  initialState,
  reducers: {
    changeTheme: (state, actions) => {
      state.slimDaddy = !state.slimDaddy;
    },
  },
});

export const slimDaddyReduser = slimDaddy.reducer;
export const { changeTheme } = slimDaddy.actions;
