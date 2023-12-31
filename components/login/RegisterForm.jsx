import { useState, FormEvent } from "react";
import classes from "./RegisterForm.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function RegisterForm() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();

    // add validation here, especially for the password and confirm password fields

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        firstName,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Please try again with different information!");
      setName("");
      setFirstName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    // reset form
    setName("");
    setFirstName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    alert("Successfully created your account!");
    router.push("/login");
  };

  return (
    <div className={classes.container}>
      <img src="DiamedTestKit.svg" alt="Test kit" />
      <form
        className={classes.form}
        onSubmit={submitHandler}
      >
        <h1>Sign up</h1>
        <p>Create an account to view and link your kit.</p>
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
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
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />
        </div>
        <button type="submit">CREATE ACCOUNT</button>
        <p className={classes.seperator}>OR</p>
        <p>
          Already have an account?{" "}
          <Link href="/login">Log in</Link>
        </p>
        <p className={classes.termsAndServices}>
          By clicking login you agree to the terms of
          service and privacy policy
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
