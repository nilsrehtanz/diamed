import { useState, FormEvent } from "react";
import classes from "./RegisterKitForm.module.css";
import Link from "next/link";

function RegisterKitForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [testKitNumber, setTestKitNumber] = useState("");

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    alert(
      "Login or test kit number is wrong. Please try again!"
    );
    // reset form
    setEmail("");
    setPassword("");
    setTestKitNumber("");

    // do something after successful signup, like redirecting to a different page
  };

  return (
    <div className={classes.container}>
      <img src="DiamedTestKit.svg" alt="Test kit" />
      <form
        className={classes.form}
        onSubmit={submitHandler}
      >
        <h1>Register Kit</h1>
        <p>
          Enter your email, password, and kit number to
          register your kit.
        </p>
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Test Kit Number"
            value={testKitNumber}
            onChange={(e) =>
              setTestKitNumber(e.target.value)
            }
          />
        </div>
        <button type="submit">REGISTER KIT</button>
        <p className={classes.seperator}>OR</p>
        <p>
          Already have an account?{" "}
          <Link href="/login">Log in</Link>
        </p>
        <p className={classes.termsAndServices}>
          By clicking Register Kit, you agree to the terms
          of service and privacy policy
        </p>
      </form>
    </div>
  );
}

export default RegisterKitForm;
