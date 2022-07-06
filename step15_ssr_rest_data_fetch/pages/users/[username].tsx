import type { NextPage } from "next";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/Home.module.css";

//https://nextjs.org/docs/basic-features/typescript
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

declare var process: {
  env: {
    API_TOKEN: string;
    API_ENDPOINT: string;
  };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.query;
  const userReq = await axios.get(
    `${process.env.API_ENDPOINT}/04/users/${username}`,
    {
      headers: {
        authorization: process.env.API_TOKEN,
      },
    }
  );

  if (userReq.status === 404) {
    //console.log("ERROR");
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: userReq.data,
    },
  };
};

interface User {
  username: string;
  profile_picture: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  job_title: string;
}

interface Props {
  user: User;
}

//https://stackoverflow.com/questions/69560905/how-to-type-a-page-component-with-props-in-next-js
//https://nextjs.org/docs/api-reference/data-fetching/get-initial-props#typescript
//https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
const UserPage: NextPage<Props> = (props: Props) => {
  const user: User = props.user;
  return (
    <div className={styles.container}>
      <Link href="/">
        <h3>&larr; Back</h3>
      </Link>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <img
              src={user.profile_picture}
              alt={user.username}
              width={150}
              height={150}
            />
            <div>
              <div>
                <b>Username:</b> {user.username}
              </div>
              <div>
                <b>Full name:</b>
                {user.first_name} {user.last_name}
              </div>
              <div>
                <b>Email:</b> {user.email}
              </div>
              <div>
                <b>Company:</b> {user.company}
              </div>
              <div>
                <b>Job title:</b> {user.job_title}
              </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default UserPage;