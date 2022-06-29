import { useRouter } from "next/router";
import type { NextComponentType, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

interface Props {}

const Name: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  const { query } = useRouter();
  console.log(query);
  return <h1>Hello, {query.name}</h1>;
};

export default Name;
