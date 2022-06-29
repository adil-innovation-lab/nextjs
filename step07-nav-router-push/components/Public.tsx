import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

interface Props {
}

const Public: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div>
      This is a Public Component.
    </div>
  );
};

export default Public;
