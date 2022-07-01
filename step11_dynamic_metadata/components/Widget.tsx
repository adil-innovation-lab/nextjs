import { useState } from "react";
import Head from "next/head";
import { NextComponentType, NextPageContext } from "next";

interface Props {
  pageName: string;
}

const Widget: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [isActive, setActive] = useState(false);
  if (isActive) {
    return (
      <>
        <Head>
          <title>{props.pageName}</title>
        </Head>
        <div>
          <button onClick={() => setActive(false)}>Reset Title</button>
        </div>
      </>
    );
  }
  return (
    <>
        <button onClick={() => setActive(true)}>Update Title</button>
    </>
  )
};

export default Widget;
