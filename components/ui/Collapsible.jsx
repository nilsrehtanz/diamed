import React, { useState } from "react";
import classes from "./Collapsible.module.css";

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className={classes.container} onClick={toggle}>
        <div
          className={
            open
              ? `${classes.questionSelected}`
              : `${classes.questionContainer}`
          }
        >
          <h4>{props.question}</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>

        {open && <p>{props.answer}</p>}
      </div>
      <hr />
    </div>
  );
};
export default Collapsible;
