import Button from "../ui/Button";
import classes from "./OfferBanner.module.css";

function OfferBanner() {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <p>
          Exclusive Offer: Buy one kit, get 20% OFF each
          additional kit.
        </p>
        <button>Buy now</button>
      </div>
    </div>
  );
}

export default OfferBanner;
