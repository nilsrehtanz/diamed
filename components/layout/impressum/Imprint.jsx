import classes from "./Imprint.module.css";
import Link from "next/link";

function Imprint() {
  return (
    <div className={classes.container}>
      <h1>Imprint</h1>
      <p>This website is provided by:</p>
      <p>
        Nils Rehtanz
        <br />
        Amalienstraße 81
        <br />
        DE 80799 München
        <br />
        Germany
      </p>

      <h2>Disclaimer</h2>

      <h3>1. Content</h3>
      <p>
        The author reserves the right not to be responsible
        for the topicality, correctness, completeness or
        quality of the information provided. Liability
        claims regarding damage caused by the use of any
        information provided, including any kind of
        information which is incomplete or incorrect, will
        therefore be rejected. All offers are not-binding
        and without obligation. Parts of the pages or the
        complete publication including all offers and
        information might be extended, changed or partly or
        completely deleted by the author without separate
        announcement.
      </p>

      <h3>2. Referrals and links</h3>
      <p>
        The author is not responsible for any contents
        linked or referred to from his pages – unless he has
        full knowledge of illegal contents and would be able
        to prevent the visitors of his site from viewing
        those pages. If any damage occurs by the use of
        information presented there, only the author of the
        respective pages might be liable, not the one who
        has linked to these pages. Furthermore the author is
        not liable for any postings or messages published by
        users of discussion boards, guestbooks or
        mailinglists provided on his page.
      </p>

      <h3>3. Copyright</h3>
      <p>
        The author intended not to use any copyrighted
        material for the publication or, if not possible, to
        indicate the copyright of the respective object. The
        copyright for any material created by the author is
        reserved. Any duplication or use of objects such as
        images, diagrams, sounds or texts in other
        electronic or printed publications is not permitted
        without the author’s agreement.
      </p>

      <h3>4. Legal validity of this disclaimer</h3>
      <p>
        This disclaimer is to be regarded as part of the
        internet publication which you were referred from.
        If sections or individual terms of this statement
        are not legal or correct, the content or validity of
        the other parts remain uninfluenced by this fact.
      </p>

      <p>
        Online Dispute Resolution in accordance with Article
        14, Section 1 ODR-VO: The European Commission is
        providing a platform for online dispute resolution
        (OS), details can be found here:{" "}
        <Link href="http://ec.europa.eu/consumers/odr/">
          http://ec.europa.eu/consumers/odr/
        </Link>
      </p>
    </div>
  );
}

export default Imprint;
