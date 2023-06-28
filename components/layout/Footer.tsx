import classes from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={classes.backgroundContainer}>
      <footer className={classes.footer}>Footer</footer>
    </div>
  );
}

export default Footer;
