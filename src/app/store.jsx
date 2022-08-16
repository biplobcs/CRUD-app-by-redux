import { configureStore } from "@reduxjs/toolkit/";
import BookReducer from "../features/books/BookSlice";

const store = configureStore({
  reducer: {
    booksReducer: BookReducer,
  },
});
export default store;
