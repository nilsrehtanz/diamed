import classes from "./Cookies.module.css";
import Link from "next/link";

function Cookies() {
  return (
    <div className={classes.container}>
      <p>
        At DiaMed, we respect your right to privacy and we
        understand that, as a visitor to
        https://diamed-seven.vercel.app, you prefer to
        control your own personal preferences when it comes
        to cookies.
      </p>

      <h2>What are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your
        device to help ensure websites function correctly,
        as well as to provide information about users. They
        are used to store and receive identifiers and other
        information on devices. They are not used to store
        your personal information.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We use cookies to understand site usage and to
        improve the content and offerings on our site. For
        example, we may use cookies to personalize your
        experience on our web pages (e.g. to recognize you
        by name when you return to our site), save your
        password in password-protected areas, and enable you
        to use shopping carts on our site.
      </p>
      <p>
        We also may use cookies to offer you products,
        programs, or services tailored to your interests.
      </p>

      <h2>Your Cookie Preferences</h2>
      <p>
        You can review your cookie options and decide what
        types of cookies you want us to use when you visit
        our site. You can change your preferences at any
        time.
      </p>
      <ul>
        <li>
          Essential Cookies: These cookies are strictly
          necessary to provide you with services available
          through our website. You cannot refuse them
          without impacting how our website functions.
        </li>
        <li>
          Performance and Functionality Cookies: These
          cookies are used to enhance the performance and
          functionality of our website but are non-essential
          to their use. However, without these cookies,
          certain functionality may become unavailable.
        </li>
        <li>
          Analytics and Customization Cookies: These cookies
          collect information that is used either in
          aggregate form to help us understand how our
          website is being used or how effective our
          marketing campaigns are, or to help us customize
          our website and application for you.
        </li>
        <li>
          Advertising (Targeting) Cookies: These cookies are
          used to make advertising messages more relevant to
          you and your interests.
        </li>
      </ul>

      <h2>How to Control Cookies</h2>
      <p>
        Most web browsers automatically accept cookies, but
        you can usually modify your browser setting to
        decline cookies if you prefer. Be aware, if you
        choose to decline cookies, you may not be able to
        fully experience the features of our website.
      </p>

      <p>
        For more detailed information about the cookies we
        use, please contact us at diamed.testkit@gmail.com.
      </p>
    </div>
  );
}

export default Cookies;
