import { createSlice } from "@reduxjs/toolkit";
import { fetchCalorie } from "./calorie.operations";
import { dailyCalorie } from "./calorie.initialState";

const dailyCalorieSlice = createSlice({
    name: 'daily',
    initialState: dailyCalorie,
    extraReducers: {
        [fetchCalorie.pending](state) {
            state.isLoading = true;
        },
        [fetchCalorie.fulfilled](state, action) {
            state.isLoading = false;
            state.dailyRate = action.payload.dailyRate;
            state.notAllowedProducts = action.payload.notAllowedProducts;
        },
        [fetchCalorie.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
});

export const dailyCalorieReducer = dailyCalorieSlice.reducer;




