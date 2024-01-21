import React from "react";
import styles from "./Header.module.scss";
import {Avatar, CircularProgress} from "@mui/material";

export const Header: React.FC = () => {
  return (
    <div className={styles["header"]}>
      <span className={styles['sync']}>
        <CircularProgress size={12} className={styles["spinner"]}/>
        Synchronizing...
      </span>

      <span className={styles['name']}>
        NAME
      </span>

      <span className={styles["user-container"]}>
        <Avatar className={styles["user"]} />
      </span>
    </div>
  )
}