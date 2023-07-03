import classes from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>
          <img src="diamedlogo.svg"></img>
          <p>2023 diamed. All rights reserved.</p>
        </div>
        <div className={classes.gridItem}>
          <p>Shipping information</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className={classes.gridItem}>
          <p>Return policy</p>
          <p>Terms & conditions</p>
          <p>Cookie preferences</p>
        </div>
      </div>

      <hr />

      <div className={classes.lowerPart}>
        <div className={classes.socialMedia}>
          <div className={classes.location}>
            <img src="GermanFlag.svg"></img>
            <p>Germany</p>
          </div>

          <div>
            <img src="InstagramIcon.svg"></img>
            <img src="LinkedInIcon.svg"></img>
          </div>
        </div>

        <div className={classes.partners}>
          <img src="TUMLogo.svg"></img>
          <img
            src="UNTERNEHMERTUMLogo.svg"
            className={classes.unternehmerLogo}
          ></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
