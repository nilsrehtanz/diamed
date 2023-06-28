import classes from "./Layout.module.css";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div>
      <NavigationBar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
