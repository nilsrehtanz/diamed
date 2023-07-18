import React, { useState } from "react";
import Button from "../ui/Button";
import classes from "./ProductsSection.module.css";
import EmailSubscriptionModal from "../ui/EmailSubscriptionModal";

const ProductsSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <h2>Our Products</h2>
      <ul className={classes.productsList}>
        <li>
          <p className={classes.price}>€69.90</p>
          <div className={classes.divider}>
            <div>
              <h5>HIV test</h5>
              <h6>Biosample: Blood</h6>
              <p>Results within 24 hours</p>
              <p>1 panel test:</p>
              <ul className={classes.stdList}>
                <li>HIV</li>
              </ul>
            </div>
            <Button
              text="Buy now"
              onClick={handleOpen}
            ></Button>
            <EmailSubscriptionModal
              open={open}
              handleClose={handleClose}
            />
          </div>
        </li>
        <li className={classes.comingSoon}>
          <div className={classes.comingSoonText}>
            Coming soon
          </div>
          <p className={classes.price}>€79.90</p>
          <div>
            <h5>Advanced test</h5>
            <h6>Biosample: Urine</h6>
            <p>Results within 24 hours</p>
            <p>4 panel test:</p>
            <ul className={classes.stdList}>
              <li>HIV</li>
              <li>Chlamydia trachomatis</li>
              <li>Herpes simplex virus I</li>
              <li>Herpes simplex virus II</li>
            </ul>
          </div>
        </li>
        <li className={classes.comingSoon}>
          <div className={classes.comingSoonText}>
            Coming soon
          </div>
          <p className={classes.price}>€129.90</p>
          <div>
            <h5>Allround test</h5>
            <h6>Biosample: Saliva</h6>
            <p>Results within 24 hours</p>
            <p>7 panel test:</p>
            <ul className={classes.stdList}>
              <li>HIV</li>
              <li>Chlamydia trachomatis</li>
              <li>Trichomonas vaginalis</li>
              <li>Group B Streptococcus</li>
              <li>Syphilis</li>
              <li>Hepatitis B</li>
              <li>Hepatitis C</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductsSection;
