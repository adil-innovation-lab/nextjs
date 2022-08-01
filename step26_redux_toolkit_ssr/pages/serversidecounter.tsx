import { GetServerSideProps, NextPage } from "next";
import Counter from "../components/Counter";
import { incrementByAmount } from "../store/counterSlice";
import { wrapper } from "../store/store";

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    store.dispatch(incrementByAmount(1));
    return { props: {} };
  });

const serverSideCounter: NextPage = (props) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default serverSideCounter;
