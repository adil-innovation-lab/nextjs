import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.info("HYDRATE", state.count, action.payload.counter.count);
      state.count = state.count + action.payload.counter.count;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
