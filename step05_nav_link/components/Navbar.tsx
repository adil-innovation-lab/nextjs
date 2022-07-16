import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar: NextComponentType<NextPageContext> = () => {
  return (
    <div>
      <ul className={styles.nav}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/about" prefetch={false}>
            About
          </Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/contact" prefetch={false}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
