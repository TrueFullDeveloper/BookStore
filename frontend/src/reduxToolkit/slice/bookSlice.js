import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    bookTitle: null,
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
    },

    hideLabel(state) {
      state.visible = false;
    },
  },
});

export const { setBook } = bookSlice.actions;

export const selectBook = state => ({
  bookTitle: state.bookTitle,
  bookCost: state.bookCost,
  pageNumber: state.pageNumber,
  bookISBN: state.bookISBN,
  pubData: state.pubData,
  bookEdition: state.bookEdition,
  bookWeight: state.bookWeight,
  bookStatus: state.bookStatus,
  bookAuthor: state.bookAuthor,
  bookGenre: state.bookGenre,
  bookRating: state.bookRating,
});

export default bookSlice.reducer;
