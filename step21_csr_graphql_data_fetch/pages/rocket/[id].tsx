import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Rocket } from "..";
import GET_ROCKET from "../../lib/apollo/queries/getRocket";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

interface RokcetInterface {
  rocket: Rocket;
}

const Rocket: NextPage = () => {
  const { query } = useRouter();

  const { loading, data } = useQuery<RokcetInterface>(GET_ROCKET, {
    fetchPolicy: "no-cache",
    variables: { rocketId: query.id },
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
    <div>
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>{data!.rocket.name}</h1>
          <div className={styles.grid}>
            <div>
              <h2>Rocket Detail</h2>
              {data && data.rocket && (
                <>
                  <p>ID: {data.rocket.id}</p>
                  <p>Name: {data.rocket.name}</p>
                  <p>Comapany: {data.rocket.company}</p>
                  <p>Country: {data.rocket.country}</p>
                  <p>Status: {data.rocket.active}</p>
                  <div>Description: {data.rocket.description}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rocket;
