import { configureStore } from "@reduxjs/toolkit";
// API Reducers
import authReducer from "./api/authSlice";
import searchReducer from "./api/searchSlice";
import basketReducer from "./api/basketSlice";
import bookReducer from "./slice/bookSlice";

export default configureStore({
  reducer: {
    book: bookReducer,
    // Reducers with API
    auth: authReducer,
    basket: basketReducer,
    search: searchReducer,
  },
});
