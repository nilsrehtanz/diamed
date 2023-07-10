import classes from "./HeroSection.module.css";
import Link from "next/link";

function HeroSection() {
  return (
    <div className={classes.container}>
      <Link
        href="/learn/quantum"
        className={classes.quantum}
      >
        <h2>Quantum</h2>
      </Link>

      <div className={classes.symptomsAndTreatments}>
        <Link
          href="/learn/symptoms"
          className={classes.symptoms}
        >
          <h2>Symptoms</h2>
        </Link>
        <Link
          href="/learn/treatments"
          className={classes.treatments}
        >
          <h2>Treatments</h2>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
