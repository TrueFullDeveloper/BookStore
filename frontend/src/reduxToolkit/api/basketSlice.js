import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasket = createAsyncThunk("basket/getBasket", async userId => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5"
    );

    const payload = [
      {
        bookTitle: "Python",
        bookAuthor: "Марк Луц",
        bookCost: 312,
        id: 1,
      },
      {
        bookTitle: "Python",
        bookAuthor: "Марк Луц",
        bookCost: 312,
        id: 2,
      },
      {
        bookTitle: "Python",
        bookAuthor: "Марк Луц",
        bookCost: 312,
        id: 3,
      },
    ];

    return payload;
  } catch (err) {
    console.log(err.message);
  }
});

export const deleteBasketItem = createAsyncThunk(
  "basket/deleteBasketItem",
  async basketItemId => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${basketItemId}`
      );

      return basketItemId;
    } catch (err) {
      console.log(err.message);
    }
  }
);

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketList: [
      {
        bookTitle: null,
        bookAuthor: null,
        bookCost: null,
        id: null,
      },
    ],
    loading: false,
  },

  extraReducers: {
    [getBasket.pending]: state => {
      state.loading = true;
    },

    [getBasket.fulfilled]: (state, { payload }) => {
      state.basketList = payload;
      state.loading = false;
    },

    [deleteBasketItem.pending]: state => {
      state.loading = true;
    },

    [deleteBasketItem.fulfilled]: (state, { payload: basketItemId }) => {
      state.basketList = state.basketList.filter(
        basketItem => basketItem.id !== basketItemId
      );
      state.loading = false;
    },
  },
});

export const selectBasketLoading = state => state.basket.loading;

export const selectBasket = state => state.basket.basketList;

export default basketSlice.reducer;
