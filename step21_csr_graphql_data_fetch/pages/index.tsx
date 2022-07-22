import Link from "next/link";
import { useQuery } from "@apollo/client";
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

function HomePage() {
  const { loading, data } = useQuery<RocketsInterface>(GET_ROCKETS, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return (
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Loading...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>SpaceX Rockets</h1>
        <div className={styles.grid}>
          {data?.rockets.map((rocket, index) => (
            <a href={`/rocket/${rocket.id}`} className={styles.card}>
              {rocket.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
