import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Private from "../components/Private";
import Public from "../components/Public";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // setLoggedIn(true);
    if (!loggedIn) {
      router.push("/login");
    }
  }, [loggedIn]);

  return loggedIn ? <Private /> : <Public />;
};

export default Home;
