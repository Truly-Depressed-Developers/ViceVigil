import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <div className={styles["navbar"]}>
      <Link className={styles["item"]} href="/">1</Link>
      <Link className={styles["item"]} href="/add">2</Link>
      <Link className={styles["item"]} href="/articles">3</Link>
      <Link className={styles["item"]} href="/settings">4</Link>
    </div>
  )
}