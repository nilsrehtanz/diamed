import classes from "./RegisterForm.module.css";
import Link from "next/link";

function RegisterForm() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h1>Sign Up</h1>
        <div className={classes.inputContainer}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
        </div>
        <button>CREATE ACCOUNT</button>
        <p className={classes.seperator}>OR</p>
        <button type="submit">Login with Google</button>
        <p className={classes.termsAndServices}>
          By clicking login you agree to the terms of service and privacy policy
        </p>
        <p>Forgot your password?</p>
        <p>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
