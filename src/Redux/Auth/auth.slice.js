import { createSlice } from "@reduxjs/toolkit";
import { postAuthReducer } from "./reducers/postAuth.reducer.js";

const INITAL_STATE = JSON.parse(window.localStorage.getItem("auth")) || {
  isAuth: false,
  idUser: 0,
  name: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: INITAL_STATE,
  reducers: {
    postAuth: postAuthReducer,
  },
});

export default authSlice.reducer;
export const { postAuth } = authSlice.actions;
