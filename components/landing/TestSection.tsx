import Button from "../ui/Button";
import classes from "./TestSection.module.css";
import Link from "next/link";

function TestSection() {
  return (
    <div className={classes.container}>
      <div>
        <h2>
          Test yourself for the most common <br />
          <span>sexually transmitted diseases - STDs.</span>
        </h2>
        <ul>
          <li>
            Increased accuracy and faster results thanks to
            quantum technology
          </li>
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
