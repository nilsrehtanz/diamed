import { useState } from "react";
import Button from "../ui/Button";
import classes from "./ProductsSection.module.css";

import ButtonM from "@material-ui/core/Button";
import { Modal } from "@material-ui/core";

function ProductsSection() {
  // const handleClick = () => {
  //   window.location.href = "/register";
  // };

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();

    // add validation here

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Something went wrong! Please try again.");
      throw new Error(
        data.message || "Something went wrong."
      );
    }

    // reset email field
    setEmail("");

    // Close the modal
    handleClose();
  };

  return (
    <div className={classes.container}>
      <h2>Our Products</h2>
      <ul className={classes.productsList}>
        <li>
          <p className={classes.price}>€29.90</p>
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
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className={classes.modalBox}>
                <h3>Sorry, we're currently sold out.</h3>
                <p>
                  Please subscribe to our newsletter to be
                  notified once we're back in stock.
                </p>
                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Email Address"
                  />
                  <ButtonM
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Subscribe
                  </ButtonM>
                </form>
              </div>
            </Modal>
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
            <p>8 panel test:</p>
            <ul className={classes.stdList}>
              <li>HIV</li>
              <li>Chlamydia trachomatis</li>
              <li>Trichomonas vaginalis</li>
              <li>Group B Streptococcus</li>
              <li>Syphilis (Treponema pallidum)</li>
              <li>Syphilis</li>
              <li>Hepatitis B</li>
              <li>Hepatitis C</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductsSection;
