import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    bookTitle: "Some Shit",
    bookCost: null,
    pageNumber: null,
    bookISBN: null,
    pubData: null,
    bookEdition: null,
    bookWeight: null,
    bookStatus: false,
    bookAuthor: null,
    bookGenre: null,
    bookRating: null,
    bookPublisher: null,
    bookDescription: null,
  },

  reducers: {
    setBook(
      state,
      {
        payload: {
          bookTitle,
          bookCost,
          pageNumber,
          bookISBN,
          pubData,
          bookEdition,
          bookWeight,
          bookStatus,
          bookAuthor,
          bookGenre,
          bookRating,
          bookPublisher,
          bookDescription,
        },
      }
    ) {
      state.bookTitle = bookTitle;
      state.bookCost = bookCost;
      state.pageNumber = pageNumber;
      state.bookISBN = bookISBN;
      state.pubData = pubData;
      state.bookEdition = bookEdition;
      state.bookWeight = bookWeight;
      state.bookStatus = bookStatus;
      state.bookAuthor = bookAuthor;
      state.bookGenre = bookGenre;
      state.bookRating = bookRating;
      state.bookPublisher = bookPublisher;
      state.bookDescription = bookDescription;
    },
  },
});

export const { setBook } = bookSlice.actions;

export const selectBook = state => ({
  bookTitle: state.book.bookTitle,
  bookCost: state.book.bookCost,
  pageNumber: state.book.pageNumber,
  bookISBN: state.book.bookISBN,
  pubData: state.book.pubData,
  bookEdition: state.book.bookEdition,
  bookWeight: state.book.bookWeight,
  bookStatus: state.book.bookStatus,
  bookAuthor: state.book.bookAuthor,
  bookGenre: state.book.bookGenre,
  bookRating: state.book.bookRating,
  bookPublisher: state.book.bookPublisher,
  bookDescription: state.book.bookDescription,
});

export default bookSlice.reducer;
