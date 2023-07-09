import { useState } from "react";
import Link from "next/link";
import classes from "./NavigationBar.module.css";
import { useRouter } from "next/router";

const NavigationBar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <Link href="/">
          <img src="diamedlogo.svg" alt="Logo" />
        </Link>
        <div className={classes.CTA}>
          <Link href="/learn" className={classes.item}>
            Learn
          </Link>
          <Link href="/login" className={classes.item}>
            Sign In
          </Link>
          <Link href="/register" className={classes.item}>
            Register Kit
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
