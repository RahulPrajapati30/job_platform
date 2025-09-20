import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import jobReducers from "./jobReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    job: jobReducers,
  },
});