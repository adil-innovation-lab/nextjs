import React, { useState } from "react";
import type { NextComponentType, NextPage, NextPageContext } from "next";
import styles from "../styles/Home.module.css";

interface Props {
  initCount?: number;
}

const Counter: NextComponentType<NextPageContext> = ({
  initCount = 0,
}: Props) => {
  const [count, setCount] = useState(initCount);

  return (
    <div>
      <p className={styles.description}>
        Current Count <code className={styles.code}>{count}</code>
      </p>

      <div className={styles.grid}>
        <button className={styles.card} onClick={() => setCount(count - 1)}>
          <h2>&larr; Decrement</h2>
        </button>
        <button className={styles.card} onClick={() => setCount(count + 1)}>
          <h2>Increment &rarr;</h2>
        </button>
      </div>
    </div>
  );
};

export default Counter;
