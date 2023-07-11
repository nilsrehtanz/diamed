import classes from "./ReturnPolicy.module.css";
import Link from "next/link";

function ReturnPolicy() {
  return (
    <div className={classes.container}>
      <h1>Return Policy</h1>
      <p>
        At DiaMed, we prioritise your satisfaction. If for
        any reason, you are not completely satisfied with
        your purchase, we have outlined the following
        guidelines to help make your return process as
        smooth as possible.
      </p>

      <h2>Return Window</h2>
      <p>
        You can return most items for a refund or store
        credit within 30 days of delivery. Return shipping
        costs apply, and the item must be in its original
        condition, unused and in its original packaging to
        be eligible for a return.
      </p>

      <h2>Non-Returnable Items</h2>
      <p>Some items cannot be returned, including:</p>
      <ul>
        <li>Clearance items</li>
        <li>Gift cards</li>
        <li>Personalised items</li>
        <li>
          Bundled items at discounted rates, e.g. “5 for
          $25” (unless the entire bundle is returned)
        </li>
        <li>
          Items marked “Non-Returnable” on the product page
        </li>
      </ul>

      <h2>How to Initiate a Return</h2>
      <p>
        To start a return, you can contact us at [Your
        Company Support Email or Phone Number]. If your
        return is accepted, we&apos;ll send you a return shipping
        label, as well as instructions on how and where to
        send your package.
      </p>

      <h2>Refunds</h2>
      <p>
        We will notify you once we&apos;ve received and
        inspected your return, and let you know if the
        refund was approved or not. If approved, you&apos;ll
        be automatically refunded on your original payment
        method. Please remember it can take some time for
        your bank or credit card company to process and post
        the refund.
      </p>

      <h2>Exchanges</h2>
      <p>
        The fastest way to ensure you get what you want is
        to return the item you have, and once the return is
        accepted, make a separate purchase for the new item.
      </p>

      <h2>Damages and Issues</h2>
      <p>
        Please inspect your order upon reception and contact
        us immediately if the item is defective, damaged or
        if you receive the wrong item, so that we can
        evaluate the issue and make it right.
      </p>

      <p>
        We always aim to ensure our customers love our
        products, but if you do need to return an order,
        we&apos;re happy to help. Just email us directly and
        we&apos;ll guide you through the process.
      </p>
    </div>
  );
}

export default ReturnPolicy;
