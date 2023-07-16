import { useState, FormEvent } from "react";
import classes from "./LoginForm.module.css";
import Link from "next/link";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    // add validation here

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
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

    // save the token to the local storage, you might also want to save the user id
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);

    // reset form
    setEmail("");
    setPassword("");

    // do something after successful login like redirecting to a different page
  };

  return (
    <div className={classes.container}>
      <form
        className={classes.form}
        onSubmit={submitHandler}
      >
        <h1>Sign In</h1>
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
        </div>
        <button type="submit">LOGIN</button>
        <p className={classes.seperator}>OR</p>
        <button type="submit">Login with Google</button>
        <p className={classes.termsAndServices}>
          By clicking login you agree to the terms of
          service and privacy policy
        </p>
        <p>Forgot your password?</p>
        <p>
          Dont&apos;t have an account?{" "}
          <Link href="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
