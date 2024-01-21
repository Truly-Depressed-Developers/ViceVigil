"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles["navbar"]}>
      <Button disableRipple disableElevation style={{ backgroundColor: 'transparent' }} variant="text" href="/">
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingTop={0.5}
        >
          <Image
            src={"/menuIcons/home" + (pathname == "/" ? "-blue" : "") + ".png"}
            width={26}
            height={26}
            alt="Home"
          />
          <span className={(pathname == "/" ? styles.blue : styles.text)}>Home</span>
        </Box>
      </Button>
      <Button disableRipple disableElevation style={{ backgroundColor: 'transparent' }} variant="text" href="/add">
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingTop={0.5}
        >
          <Image
            src={"/menuIcons/iconamoon" + (pathname == "/add" ? "-blue" : "") + ".png"}
            width={26}
            height={26}
            alt="Add"
          />
          <span className={(pathname == "/add" ? styles.blue : styles.text)}>Add</span>
        </Box>
      </Button>
      <Button disableRipple disableElevation style={{ backgroundColor: 'transparent' }} variant="text" href="/articles">
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingTop={0.5}
        >
          <Image
            src={"/menuIcons/news" + (pathname == "/articles" ? "-blue" : "") + ".png"}
            width={26}
            height={26}
            alt="Articles"
          />
          <span className={(pathname == "/articles" ? styles.blue : styles.text)}>Aritcles</span>
        </Box>
      </Button>
      <Button disableRipple disableElevation style={{ backgroundColor: 'transparent' }} variant="text" href="/settings">
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingTop={0.5}
        >
          <Image
            src={"/menuIcons/settings" + (pathname == "/settings" ? "-blue" : "") + ".png"}
            width={26}
            height={26}
            alt="Settings"
          />
          <span className={(pathname == "/settings" ? styles.blue : styles.text)}>Settings</span>
        </Box>
      </Button>
    </div >
  )
}