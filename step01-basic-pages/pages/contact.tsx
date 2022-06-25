import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Step 01 - Contact</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This is the Contact Page</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Adil Altaf &rarr;</h2>
            <li>email: khanadilaltaf@gmail.com</li>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Contact;
