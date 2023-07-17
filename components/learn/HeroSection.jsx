import classes from "./HeroSection.module.css";
import Link from "next/link";

function HeroSection() {
  return (
    <div className={classes.container}>
      <Link
        href="/learn/quantum"
        className={classes.quantum}
      >
        <div className={classes.quantum}>
          <h2>Quantum</h2>
        </div>
      </Link>

      <div className={classes.symptomsAndTreatments}>
        <Link href="/learn/symptoms">
          <div className={classes.symptoms}>
            <h2>Symptoms</h2>
          </div>
        </Link>
        <Link
          href="/learn/treatments"
          className={classes.treatments}
        >
          <div className={classes.treatments}>
            <h2>Treatments</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
