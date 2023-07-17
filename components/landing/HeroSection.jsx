import React, { useState } from "react";
import Button from "../ui/Button";
import classes from "./HeroSection.module.css";
import EmailSubscriptionModal from "../ui/EmailSubscriptionModal";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <p className={classes.openingSentence}>
        Introducing quantum technology for at-home STD
        testing
      </p>
      <h1>
        It&apos;s time for STD testing <br />
        to be{" "}
        <span className={classes.purple}>private.</span>
      </h1>
      <div className={classes.content}>
        <img src="DiamedTestKit.svg" alt="Test Kit" />
        <ul>
          <li>
            Our mission is to combat the{" "}
            <span className={classes.purple}>stigma</span>{" "}
            associated with STD testing.
          </li>
          <li>
            Every day over{" "}
            <span className={classes.purple}>
              1 million STDs
            </span>{" "}
            are contracted globally, as reported by the WHO.
          </li>
          <li>
            Using{" "}
            <span className={classes.purple}>
              quantum diamond chips
            </span>
            , we&apos;re the first in Germany to enable{" "}
            <span className={classes.purple}>
              HIV testing based on a saliva sample
            </span>{" "}
            all without any needles!
          </li>
        </ul>
      </div>
      <Button
        text="Get your kit now"
        onClick={handleOpen}
      ></Button>
      <EmailSubscriptionModal
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default HeroSection;
