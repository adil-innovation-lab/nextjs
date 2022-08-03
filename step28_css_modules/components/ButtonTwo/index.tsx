import React from "react";
import styles from "./ButtonTwo.module.css";

const index = () => {
  return (
    <div className="container">
      <button className={styles.button}>Local CSS</button>
      <p className="textContainer">
        The CSS applied on button two is applied from the component level.
      </p>
    </div>
  );
};

export default index;
