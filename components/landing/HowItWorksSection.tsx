import Button from "../ui/Button";
import classes from "./HowItWorksSection.module.css";
import Link from "next/link";

function HowItWorksSection() {
  return (
    <div className={classes.container}>
      <h2>How it works</h2>
      <h3>1. Test yourself at home</h3>
      <p>
        Our test kits contain everything you need to collect a small saliva
        sample, and mail them to our lab for free. You should be familiar with
        the process as it is very similar to a COVID-19 test. Follow the simple
        instructions given in the test kit and you&apos;re good to go.
      </p>
      <h3>2. Take a sample at home & send it to us</h3>
      <p>Hassle-free prepaid return shipping. Simply collect, pack & send!</p>
      <h3>3. Get your results digitally</h3>
      <p>
        With us, there&apos;s no complicated technical jargon. Just log in on
        www.diamed.online and review your results online.
      </p>
    </div>
  );
}

export default HowItWorksSection;
