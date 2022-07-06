import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/Home.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const usersReq = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users: User[] = usersReq.data;

  const paths = users.map((user) => ({
    params: {
      username: user.username,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { username } = context.params!;

  const allUsers = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const user = allUsers.data.find((user: User) => user.username === username);

  const userReq = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${user.id}`
  );

  if (userReq.status === 404) {
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
  id: string;
  username: string;
  profile_picture: string;
  name: string;
  email: string;
}

interface Props {
  user: User;
}

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
            <div>
              <div>
                <b>Username:</b> {user.username}
              </div>
              <div>
                <b>Full name:</b>
                {user.name}
              </div>
              <div>
                <b>Email:</b> {user.email}
              </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default UserPage;
