import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import ButtonM from "@material-ui/core/Button";
import classes from "./EmailSubscriptionModal.module.css";

const EmailSubscriptionModal = ({ open, handleClose }) => {
  const [email, setEmail] = useState("");

  const submitHandler = async (event) => {
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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={classes.modalBox}>
        <h3>Sorry, we&apos;re currently sold out.</h3>
        <p>
          Please subscribe to our newsletter to be notified
          once we&apos;re back in stock.
        </p>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
  );
};

export default EmailSubscriptionModal;
