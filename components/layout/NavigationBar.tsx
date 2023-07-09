import { useState } from "react";
import Link from "next/link";
import classes from "./NavigationBar.module.css";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const handleShowNavbar = () => {
    console.log(currentRoute);
    setShowNavbar(!showNavbar);
  };

  const disappearNavBar = () => {
    setShowNavbar(false);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div
          className={classes.logo}
          onClick={disappearNavBar}
        >
          <Link href="/">
            <img src="diamedlogo.svg" alt="Logo" />
          </Link>
        </div>
        <div
          className={classes.menu_icon}
          onClick={handleShowNavbar}
        >
          <img src="list.svg" alt="" />
        </div>
        <div
          className={`${classes.nav_elements}  ${
            showNavbar ? classes.active : ""
          }`}
        >
          <ul>
            <li onClick={disappearNavBar}>
              <Link href="/learn">Learn</Link>
            </li>
            <li onClick={disappearNavBar}>
              <Link href="/login">Sign In</Link>
            </li>
            <li onClick={disappearNavBar}>
              <Link href="/register">Register Kit</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
