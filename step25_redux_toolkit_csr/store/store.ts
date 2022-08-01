import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice";
import users from "./userSlice";

const combinedReducer = combineReducers({
  counter,
  users,
});

export const store = configureStore({
  reducer: {
    reducer: combinedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
