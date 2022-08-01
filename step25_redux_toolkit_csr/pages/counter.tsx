import React from "react";
import { useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { decrement, increment } from "../store/counterSlice";
import styles from "../styles/Home.module.css";

const counter = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Counter />
        </h1>
        <div className={styles.grid}>
          <button className={styles.card} onClick={() => dispatch(increment())}>
            <h2>+ 1</h2>
          </button>

          <button className={styles.card} onClick={() => dispatch(decrement())}>
            <h2>- 1</h2>
          </button>
        </div>
      </main>
    </div>
  );
};

export default counter;
