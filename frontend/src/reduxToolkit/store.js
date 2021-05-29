import { configureStore } from "@reduxjs/toolkit";
// API Reducers
import authReducer from "./api/authSlice";
import searchReducer from "./api/searchSlice";

export default configureStore({
  reducer: {
    // Reducers with API
    auth: authReducer,
    search: searchReducer,
  },
});
