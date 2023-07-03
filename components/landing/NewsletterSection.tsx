import Button from "../ui/Button";
import classes from "./NewsletterSection.module.css";
import Link from "next/link";

function NewsletterSection() {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h2>
          Be the first to get updates <br /> to your inbox.
        </h2>
        <div className={classes.inputSection}>
          <p>
            Keep up-to-date with new discoveries and
            exclusive promotions on our HIV and STD testing
            kits and services.
          </p>
          <div className={classes.inputFields}>
            <input
              type="text"
              placeholder="Email Address"
            />
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
