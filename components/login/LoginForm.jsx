import { useState } from "react";
import classes from "./LoginForm.module.css";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook
import { useUser } from "../../contexts/UserContext"; // Import the useUser hook

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUser(); // Destructure setUser from useUser
  const router = useRouter(); // Instantiate the router

  const submitHandler = async (event) => {
    event.preventDefault();

    // Add validation here

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
      alert("Username or password is wrong!");
      setEmail("");
      setPassword("");
      return;
    }

    // Save the token to the local storage, you might also want to save the user id
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);

    // Update the global user state
    setUser({ token: data.token, userId: data.userId });

    // Reset form
    setEmail("");
    setPassword("");

    // Navigate to a different page after successful login
    router.push("/profile");
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
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/register">Sign up</Link>
        </p>
        <p className={classes.termsAndServices}>
          By clicking Sign up, you agree to the terms of
          service and privacy policy
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
