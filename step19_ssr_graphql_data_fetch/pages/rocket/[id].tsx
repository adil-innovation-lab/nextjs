import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Rocket } from "..";
import { initApollo } from "../../lib/apollo";
import GET_ROCKET from "../../lib/apollo/queries/getRocket";
import styles from "../../styles/Home.module.css";

const client = initApollo();

interface RokcetInterface {
  rocket: Rocket;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const rocketId = context!.params!.id;

  const { data } = await client.query<RokcetInterface>({
    query: GET_ROCKET,
    variables: { rocketId },
  });

  return {
    props: {
      rocket: data.rocket,
    },
  };
};

const Rocket: NextPage<RokcetInterface> = (props) => {
  const rocket = props.rocket;
  console.log("props", rocket);
  return (
    <div>
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>{rocket.name}</h1>
          <div className={styles.grid}>
            <div>
              <h2>Rocket Detail</h2>
              <p>ID: {rocket.id}</p>
              <p>Name: {rocket.name}</p>
              <p>Comapany: {rocket.company}</p>
              <p>Country: {rocket.country}</p>
              <p>Status: {rocket.active}</p>
              <p>Description: {rocket.description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rocket;
