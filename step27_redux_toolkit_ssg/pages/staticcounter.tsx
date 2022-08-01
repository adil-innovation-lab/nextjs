import { GetStaticProps, NextPage } from "next";
import Counter from "../components/Counter";
import { incrementByAmount } from "../store/counterSlice";
import { wrapper } from "../store/store";
import styles from "../styles/Home.module.css";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(incrementByAmount(1));
    return { props: {} };
  }
);

const staticCounter: NextPage = (props) => {
  return (
    <main className={styles.main}>
      <h1><Counter /></h1>
    </main>
  );
};

export default staticCounter;
