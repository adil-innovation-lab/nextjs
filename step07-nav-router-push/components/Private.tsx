import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

interface Props {
}

const Private: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div>
      This is a Private Component.
    </div>
  );
};

export default Private;
