import { useState, FormEvent } from "react";
import classes from "./NewsletterSection.module.css";

function NewsletterSection() {
  const [email, setEmail] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    // add validation here

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Something went wrong."
      );
    }

    // reset email field
    setEmail("");

    alert("Successfully signed up for the newsletter!");
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h2>
          Be the first to get updates <br /> to your inbox.
        </h2>
        <form
          className={classes.inputSection}
          onSubmit={submitHandler}
        >
          <p>
            Keep up-to-date with new discoveries and
            exclusive promotions on our HIV and STD testing
            kits and services.
          </p>
          <div className={classes.inputFields}>
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsletterSection;
