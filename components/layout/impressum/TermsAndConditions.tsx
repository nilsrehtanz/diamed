import classes from "./TermsAndConditions.module.css";
import Link from "next/link";

function TermsAndConditions() {
  return (
   <div className={classes.container}>
      <h1>Terms and Conditions</h1>
      <p>Welcome to Diamed! These terms and conditions outline the rules and regulations for the use of [Your Company's Name]'s Website.</p>

      <h2>1. Terms</h2>
      <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Your Website Name] if you do not agree to take all of the terms and conditions stated on this page.</p>

      <h2>2. Intellectual Property Rights</h2>
      <p>Unless otherwise stated, [Your Company's Name] and/or its licensors own the intellectual property rights for all material on [Your Website Name]. All intellectual property rights are reserved.</p>

      <h2>3. Restrictions</h2>
      <p>You are specifically restricted from all of the following:</p>
      <ul>
        <li>Republishing material from [Your Website Name]</li>
        <li>Selling, renting or sub-licensing material from [Your Website Name]</li>
        <li>Reproducing, duplicating or copying material from [Your Website Name]</li>
      </ul>

      <h2>4. User Comments</h2>
      <p>Parts of this website offer an opportunity for users to post and exchange opinions and information. [Your Company's Name] does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of [Your Company's Name], its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.</p>

      <h2>5. Hyperlinking to our Content</h2>
      <p>You may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</p>

      <h2>6. Disclaimer</h2>
      <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.</p>

      <h2>7. Governing Law and Jurisdiction</h2>
      <p>These terms and conditions will be governed by and interpreted in accordance with the laws of [Your Location], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your Location] for the resolution of any disputes.</p>

      <h2>Contact Information</h2>
      <p>If you have any queries regarding any of our terms, please contact us at [Your Company Support Email].</p>
   </div>
  );
}

export default TermsAndConditions;
