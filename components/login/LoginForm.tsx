import classes from "./LoginForm.module.css";
import Link from "next/link";

function LoginForm() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h1>Sign In</h1>
        <div className={classes.inputContainer}>
          <input type="text" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>LOGIN</button>
        <p className={classes.seperator}>OR</p>
        <button type="submit">Login with Google</button>
        <p className={classes.termsAndServices}>
          By clicking login you agree to the terms of service and privacy policy
        </p>
        <p>Forgot your password?</p>
        <p>
          Dont&apos;t have an account? <Link href="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
