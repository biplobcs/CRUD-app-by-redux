import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    { id: uuidv4(), name: "padma nodir maji", author: "jasim uddin" },
    {
      id: uuidv4(),
      name: "Obagir Sorgo",
      author: "Sorot Chandro Chattopadday",
    },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    // ShowBook: (state) => state,
    addbook: (state, action) => {
      console.log(current(state));
      // state.books.push(action.payload);
      state.books = [...state.books, action.payload];
      console.log(current(state));
    },
    updatebook: (state, action) => {
      const updateBook = action.payload;
      const { id, title, author } = updateBook;
      const existBook = state.books.filter((book) => book.id === id);
      existBook[0].name = title;
      existBook[0].author = author;
    },
    deletebook: (state, action) => {
      const filteredBooks = state.books.filter(
        (book) => book.id !== action.payload
      );
      state.books = filteredBooks;
    },
  },
});

export const { addbook, deletebook, updatebook } = bookSlice.actions;
export default bookSlice.reducer;
