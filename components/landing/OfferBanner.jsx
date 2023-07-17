import React, { useState } from "react";
import Button from "../ui/Button";
import classes from "./OfferBanner.module.css";
import EmailSubscriptionModal from "../ui/EmailSubscriptionModal";

const OfferBanner = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <p>
          Exclusive Offer: Buy one kit, get 20% OFF each
          additional kit.
        </p>
        <button onClick={handleOpen}>Buy now</button>
        <EmailSubscriptionModal
          open={open}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default OfferBanner;
