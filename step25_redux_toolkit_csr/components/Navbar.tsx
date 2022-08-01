import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <div>
      <ul className={styles.nav}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/users">Users</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
