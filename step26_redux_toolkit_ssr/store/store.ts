import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import counter from "./counterSlice";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  counter,
});

const store = () =>
  configureStore({
    reducer: combinedReducer,
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export const wrapper = createWrapper<AppStore>(store);
