import classes from "./ShippingInformation.module.css";
import Link from "next/link";

function ShippingInformation() {
  return (
    <div className={classes.container}>
      <h1>Shipping Information</h1>
      <p>
        At DiaMed, we are committed to deliver your order
        with good quality packaging within given time frame.
        We ship throughout the week, except on Sundays and
        public holidays. To ensure that your order reaches
        you in good condition, in the shortest span of time,
        we ship through reputed courier agencies only.
      </p>

      <h2>Processing Your Order</h2>
      <p>
        Once your order has been processed and we have
        received cleared payment, your item will be
        dispatched as soon as possible. Generally,
        processing time is 24-48 hours for your order. We
        will keep you updated every step of the way - you
        will receive emails from us when your order is
        confirmed, and then when it&apos;s shipped.
      </p>

      <h2>Shipping Rates</h2>
      <p>
        The shipping charges are based on the weight of the
        product and the location to which it will be
        shipped. These charges will be shown at checkout. We
        offer free shipping for orders above a certain value
        - details will be provided during the checkout
        process.
      </p>

      <h2>Delivery Time</h2>
      <p>
        The approximate delivery time is between 3 to 7
        business days after dispatch for domestic orders and
        between 7 to 15 business days for international
        orders. However, these timelines might be affected
        due to current COVID-19 pandemic, we appreciate your
        understanding and patience.
      </p>

      <h2>Tracking Your Order</h2>
      <p>
        Once your order has been shipped, we will provide
        you with a tracking number through email so you can
        track the status of your order at any time.
      </p>

      <h2>Damaged / Defective Items</h2>
      <p>
        If you believe your package was damaged in shipping,
        we require that you contact us within 5 days of
        delivery and we will work with you to resolve the
        issue quickly.
      </p>

      <h2>Returns</h2>
      <p>
        Please review our{" "}
        <Link href="/return">
          Return Policy
        </Link>{" "}
        for more information.
      </p>

      <p>
        For any further clarification, please contact our
        customer support team at diamed.testkit@gmail.com.
        Thank you for choosing Diamed. We value your trust
        and pledge to do everything we can to make your
        shopping experience safe, convenient and
        hassle-free.
      </p>
    </div>
  );
}

export default ShippingInformation;
