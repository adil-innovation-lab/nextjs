import React from "react";
import styles from "./ButtonThree.module.css";

const ButtonThree = () => {
  return <div className="container">
    <button className={styles.composedButton}>Composed CSS</button>
    <p className="textContainer">The CSS applied on this button is component level composed class.</p>
  </div>;
};

export default ButtonThree;
