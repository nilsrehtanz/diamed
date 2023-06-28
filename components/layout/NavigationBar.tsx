import { useState } from "react";
import Link from "next/link";
import classes from "./NavigationBar.module.css";
import { useRouter } from "next/router";

const NavigationBar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <p>Logo</p>
        <ul>
            <li>Learn</li>
            <li>Sign In</li>
            <li>Register Kit</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
