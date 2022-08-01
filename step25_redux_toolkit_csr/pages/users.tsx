import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Users from "../components/Users";
import { addUser } from "../store/userSlice";
import styles from "../styles/Home.module.css";

const users = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const addNewUser = () => {
    if (name) {
      dispatch(addUser(name));
      setName("");
    }
  };
  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Users</h1>
        <div>
          <input
            className={styles.card}
            type="text"
            value={name}
            onChange={nameChange}
          />
          <button className={styles.card} onClick={addNewUser}>
            Add User
          </button>
        </div>
        <Users />
      </main>
    </div>
  );
};

export default users;
