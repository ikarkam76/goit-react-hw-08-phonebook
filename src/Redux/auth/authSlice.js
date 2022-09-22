import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperation";

const initialState = {
    user: {
        name: null,
        email: null,
        password: null,
    },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
    extraReducers: {
    [register](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
