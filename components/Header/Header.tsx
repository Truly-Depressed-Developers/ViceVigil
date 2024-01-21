import React from "react";
import styles from "./Header.module.scss";
import {Avatar, CircularProgress} from "@mui/material";
import localFont from 'next/font/local';

const daysOne = localFont({
  src: '../../app/DaysOne-Regular.ttf',
  display: 'swap',
});

export const Header: React.FC = () => {
  return (
    <div className={styles["header"]}>
      <span className={styles['sync']}>
        Synchronized!
      </span>

      <span className={[styles['name'], daysOne.className].join(" ")}>
        ViceVigil
      </span>

      <span className={styles["user-container"]}>
        <Avatar className={styles["user"]} />
      </span>
    </div>
  )
}