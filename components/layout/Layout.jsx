import classes from "./Layout.module.css";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <NavigationBar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
