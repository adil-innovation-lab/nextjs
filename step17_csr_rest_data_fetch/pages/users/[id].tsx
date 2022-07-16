import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

//https://nextjs.org/docs/basic-features/typescript
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
};

interface User {
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}

function UserData({ user }: { user: User }) {
  return (
    <div style={{ display: "flex" }}>
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
        <div>
          <b>Phone:</b> {user.phone}
        </div>
        <div>
          <b>Website:</b> {user.website}
        </div>
      </div>
    </div>
  );
}

interface Props {
  id: number;
}

const UserPage: NextPage<Props> = (props: Props) => {
  const id = props.id;
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<User | null>(null);

  const getUserData = async () => {
    const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await req.json();
    console.log(req);
    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/" passHref>
      <h4>&larr; Back to home</h4>
      </Link>
      <main className={styles.main}>
        <div className={styles.grid}>
          {loading && <div>Loading User Data...</div>}
          {data && <UserData user={data} />}
        </div>
      </main>
    </div>
  );
};

export default UserPage;
