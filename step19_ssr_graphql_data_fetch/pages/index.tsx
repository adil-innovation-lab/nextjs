import Link from "next/link";
import { GetServerSideProps, NextPage } from "next";
import { initApollo } from "../lib/apollo";
import GET_ROCKETS from "../lib/apollo/queries/getRockets";
import styles from "../styles/Home.module.css";

export interface Rocket {
  id: string;
  name: string;
  country: string;
  description: string;
  active: string;
  company: string;
}

export interface RocketsInterface {
  rockets: Rocket[];
}

const client = initApollo();

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<RocketsInterface>({ query: GET_ROCKETS });
  return {
    props: {
      rockets: data.rockets,
    },
  };
};

const HomePage: NextPage<RocketsInterface> = (props) => {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>
          SpaceX Rockets
        </h1>
        <div className={styles.grid}>
          {props?.rockets.map((rocket, index) => (
            <a href={`/rocket/${rocket.id}`} className={styles.card}>
              {rocket.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
