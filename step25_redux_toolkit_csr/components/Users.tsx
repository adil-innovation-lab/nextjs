import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeUser } from "../store/userSlice";
import styles from "../styles/Home.module.css";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.reducer.users);
  return (
    <div>
      <h1>User List</h1>
      <div className={styles.grid}>
        {users.map((user) => (
          <div className={styles.card} onClick={() => dispatch(removeUser(user))}>
            {user}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
