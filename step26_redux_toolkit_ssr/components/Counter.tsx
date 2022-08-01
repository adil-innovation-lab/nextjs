import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";

const Counter = () => {
  const { count } = useSelector((state: AppState) => state.counter);
  return <div>Count: {count}</div>;
};

export default Counter;
