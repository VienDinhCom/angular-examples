import { createSlice } from "@reduxjs/toolkit";

export const counterSlide = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => {
      return state + 1;
    },
    decrement: state => {
      return state - 1;
    },
    reset: state => {
      return state;
    }
  }
});
