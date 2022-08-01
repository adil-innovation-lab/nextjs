import type { NextPage } from "next";
import { useState } from "react";
import { selectCount, useAppDispatch, useAppSelector } from "../store/hooks";
import { decrement, increment, incrementByAmount } from "../store/counterSlice";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const buttonStyle = { width: "200px", marginRight: "5px" };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>NextJS Counter with Redux</h1>
        <h2>The current number is {count}</h2>

        <div className={styles.grid}>
          <button className={styles.card} onClick={() => dispatch(increment())}>
            <h2>+ 1</h2>
          </button>

          <button className={styles.card} onClick={() => dispatch(decrement())}>
            <h2>- 1</h2>
          </button>
        </div>

        <div>
          <input
            className={styles.card}
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            type="number"
          />
          <button
            className={styles.card}
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          >
            Increment by amount
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
