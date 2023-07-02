import Button from "../ui/Button";
import classes from "./ExplanationSection.module.css";
import Link from "next/link";

function ExplanationSection() {
  const firstStyle: React.CSSProperties = {
    background: "#A323B026",
  };

  const secondStyle: React.CSSProperties = {
    background: "#A323B04D",
  };

  const thirdStyle: React.CSSProperties = {
    background: "#EC3B8740",
  };

  const fourthStyle: React.CSSProperties = {
    background: "#A323B080",
  };

  const fifthStyle: React.CSSProperties = {
    background: "#EC3B878C",
  };

  const sixtStyle: React.CSSProperties = {
    background: "#A323B0B3",
  };

  const seventhStyle: React.CSSProperties = {
    background: "#EC3B87BF",
  };

  const eigthStyle: React.CSSProperties = {
    background: "#EDA954B3",
  };

  const removePadding: React.CSSProperties = {
    padding: "0px",
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className={classes.container}>
      <div className={classes.gridContainer}>
        <div className={classes.gridItem} style={firstStyle}>
          <div>
            <h2>How Can A Person Get an STD?</h2>
            <p>
              Sexually transmitted diseases (STDs) are most commonly transmitted
              through sexual activities, but they can also be transmitted via
              blood transfusion, infected needles, or placental routes. STDs are
              still one of the fastest-growing diseases worldwide, mainly due to
              the stigma associated with them, which causes many patients to
              avoid seeking appropriate treatment.
            </p>
          </div>
        </div>
        <div className={classes.gridItem} style={removePadding}>
          <img src="howcanapersongetanstd.svg" alt="" />
        </div>
        <div className={classes.gridItem} style={secondStyle}>
          <h2>Symptoms of STDs</h2>
        </div>
        <div className={classes.gridItem} style={thirdStyle}>
          <p>
            Symptoms of STDs can differ in duration and severity based on the
            specific organisms involved. It is important to note that some STDs
            can be asymptomatic, as shown in a study where 75% of women and 50%
            of men with Chlamydia displayed no symptoms.
          </p>
        </div>
        <div className={classes.gridItem} style={fourthStyle}>
          <h2>Convenient and confidential at-home testing </h2>
        </div>
        <div className={classes.gridItem} style={fifthStyle}>
          <div>
            <p>
              Experience the comfort and convenience of home-based testing,
              allowing you to maintain privacy and flexibility. With no need for
              in-person visits, you'll receive a comprehensive sample collection
              kit and can conveniently provide your sample whenever works best
              for you.
            </p>
            <p>
              Your data is in safe hands. We use the latest encryption
              technologies and comply with current GDPR standards.
            </p>
          </div>
        </div>
        <div className={classes.gridItem} style={sixtStyle}>
          <h2>Precise & Best Labs</h2>
        </div>
        <div className={classes.gridItem} style={seventhStyle}>
          <div>
            <p>
              Your samples will be analysed by specialists in our laboratory in
              Germany. All calibrations and test procedures are monitored with
              regular validation tests according to the highest medical
              standards.
            </p>
            <p>
              Our labs use various monitoring techniques to assure the quality
              of the data generated to comply with the German Medical
              Association (Bundesärztekammer) standards for medical laboratories
              (RiliBÄK).
            </p>
          </div>
        </div>
        <div className={classes.gridItem} style={eigthStyle}>
          <div>
            <h2>What's included in your STD test kit?</h2>
            <p>
              As part of our door-to-door service you'll receive everything you
              need to collect your sample whilst enjoying complete privacy.
              Whenever your sample is ready for collection just send it back via
              postal service or throw it into one of our discreet collection
              boxes. Simple, easy, and convenient.
            </p>
          </div>
        </div>
        <div className={classes.gridItem} style={removePadding}>
          <img src="howcanapersongetanstd.svg" alt="" />
        </div>
      </div>
      <p>Have unanswered questions? Get in touch today!</p>
      <Button text="Contact us" onClick={handleClick}></Button>
    </div>
  );
}

export default ExplanationSection;
