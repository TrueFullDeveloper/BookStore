import { configureStore } from "@reduxjs/toolkit";
// API Reducers
import authReducer from "./api/authSlice";
import profileReducer from "./api/profileSlice";
import searchReducer from "./api/searchSlice";
import basketReducer from "./api/basketSlice";
import bookReducer from "./slice/bookSlice";

export default configureStore({
  reducer: {
    book: bookReducer,
    // Reducers with API
    auth: authReducer,
    profile: profileReducer,
    basket: basketReducer,
    search: searchReducer,
  },
});
