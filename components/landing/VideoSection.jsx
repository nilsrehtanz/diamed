import React from "react";
import classes from "./VideoSection.module.css";

const VideoComponent = () => {
  return (
    <div className={classes.container}>
      <video className={classes.video} controls>
        <source src="/Diamed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
