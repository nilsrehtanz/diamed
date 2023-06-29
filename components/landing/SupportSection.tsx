import Button from "../ui/Button";
import classes from "./SupportSection.module.css";
import Link from "next/link";

function SupportSection() {
  return (
    <div className={classes.container}>
      <div className={classes.bar}></div>
      <div className={classes.divider}>
        <img src="HIVDonate.svg" alt="" />
        <div>
          <h2>Support our HIV and AIDS research</h2>
          <p>
            Via the following website you can directly
            donate to Deutsche Aidshilfe:
            https://www.aidshilfe.de/spenden?hilf-uns-helfen-kopie/spende
          </p>
        </div>
      </div>
      <div className={classes.bar}></div>
    </div>
  );
}

export default SupportSection;
