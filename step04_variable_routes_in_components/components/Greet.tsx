import { useRouter } from "next/router";
import type { NextComponentType, NextPageContext } from "next";

const Name: NextComponentType<NextPageContext> = () => {
  const { query } = useRouter();
  console.log(query);
  return <h1>Hello, {query.name}</h1>;
};

export default Name;
