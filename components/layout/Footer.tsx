import classes from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>
          <img src="diamedlogo.svg" alt="Logo"></img>
          <p>2023 diamed. All rights reserved.</p>
        </div>
        <div className={classes.gridItem}>
          <Link href="/shipping">
            <p>Shipping information</p>
          </Link>

          <p>FAQ</p>
          <Link href="mailto:diamed.testkit@gmail.com">
            <p>Contact</p>
          </Link>
        </div>
        <div className={classes.gridItem}>
          <Link href="/return">
            <p>Return policy</p>
          </Link>
          <Link href="/terms">
            <p>Terms & conditions</p>
          </Link>
          <Link href="/cookies">
            <p>Cookie preferences</p>
          </Link>
        </div>
      </div>

      <hr />

      <div className={classes.lowerPart}>
        <div className={classes.socialMedia}>
          <div className={classes.location}>
            <img
              src="GermanFlag.svg"
              alt="German Flag"
            ></img>
            <p>Germany</p>
          </div>

          <div>
            <img
              src="InstagramIcon.svg"
              alt="Instagram"
            ></img>
            <img
              src="LinkedInIcon.svg"
              alt="Linkedin"
            ></img>
          </div>
        </div>

        <div className={classes.partners}>
          <Link href="https://www.tum.de/">
            <img src="TUMLogo.svg" alt="TUM" />
          </Link>
          <Link href="https://www.unternehmertum.de/">
            <img
              src="UNTERNEHMERTUMLogo.svg"
              alt="UnternehmerTUM"
            />
          </Link>
          <Link href="https://www.quantumdiamonds.de/">
            <img
              src="quantum_diamonds_logo.png"
              alt="Quantum diamonds"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
