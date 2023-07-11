import Button from "../ui/Button";
import classes from "./TestSection.module.css";
import Link from "next/link";

function TestSection() {
  return (
    <div className={classes.container}>
      <div>
        <h2>
          Benefits of Our Unique Quantum Sensing Technology{" "}
          <br />
          <span>
            to test you for sexually transmitted diseases -
            STDs.
          </span>
        </h2>
        <ul>
          <li>Increased accuracy</li>
          <li>
            100.000 times more sensitive tests enabling much
            earlier diagnosis
          </li>
          <li>Faster results (&lt;1 day)</li>
          <li>
            Test yourself from the comfort of your home
          </li>
          <li>Painless & simple procedure</li>
        </ul>
      </div>
      <img src="injection.svg" alt="Injection" />
    </div>
  );
}

export default TestSection;
