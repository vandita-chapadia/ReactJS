import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
