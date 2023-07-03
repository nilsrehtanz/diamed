import { useState } from "react";
import Link from "next/link";
import classes from "./NavigationBar.module.css";
import { useRouter } from "next/router";

const NavigationBar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <a href="/">
          <img src="diamedlogo.svg" alt="Logo" />
        </a>
        <div className={classes.CTA}>
          <a href="/learn" className={classes.item}>
            Learn
          </a>
          <a href="/signIn" className={classes.item}>
            Sign In
          </a>
          <a href="/registerKit" className={classes.item}>
            Register Kit
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
