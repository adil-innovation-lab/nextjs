import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

interface Props {
}

const Login: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <main className={styles.main}>
    <h1 className={styles.title}>Login Page</h1>
  </main>
);
};

export default Login;
