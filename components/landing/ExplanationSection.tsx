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

  return (
    <div className={classes.container}>
      <div className={classes.gridContainer}>
        <div
          className={classes.gridItem}
          style={firstStyle}
        >
          <div>
            <h2>How Can A Person Get an STD?</h2>
            <p>
              Sexually transmitted diseases (STDs) are most
              commonly transmitted through sexual
              activities, but they can also be transmitted
              via blood transfusion, infected needles, or
              placental routes. STDs are still one of the
              fastest-growing diseases worldwide, mainly due
              to the stigma associated with them, which
              causes many patients to avoid seeking
              appropriate treatment.
            </p>
          </div>
        </div>
        <div
          className={classes.gridItem}
          style={removePadding}
        >
          <img src="howcanapersongetanstd.svg" alt="" />
        </div>
        <div
          className={classes.gridItem}
          style={secondStyle}
        >
          <h2>Symptoms of STDs</h2>
        </div>
        <div
          className={classes.gridItem}
          style={thirdStyle}
        >
          <p>
            Although the symptoms of STDs may look similar,
            they differ in duration and severity as per the
            different organisms. It's also important to
            remember that some STDs show no symptoms. One
            study showed 75% of women and 50% of men show no
            symptoms when they have Chlamydia.
          </p>
        </div>
        <div
          className={classes.gridItem}
          style={fourthStyle}
        >
          <h2>Stay At Home & Confidential </h2>
        </div>
        <div
          className={classes.gridItem}
          style={fifthStyle}
        >
          <div>
            <p>
              Enjoy the privacy and convenience of staying
              at home (or any location that works best for
              you). No one even needs to come into your
              home, instead you'll receive everything you
              need to collect your sample, which will be
              collected from you at your convenience.
            </p>
            <p>
              Your data is in safe hands. We use the latest
              encryption technologies and comply with
              current GDPR standards.
            </p>
          </div>
        </div>
        <div className={classes.gridItem} style={sixtStyle}>
          <h2>Precise & Best Labs</h2>
        </div>
        <div
          className={classes.gridItem}
          style={seventhStyle}
        >
          <div>
            <p>
              Your samples will be analysed by specialists
              in a german laboratory. All calibrations and
              test procedures are monitored with regular
              validation tests according to the highest
              medical standards.
            </p>
            <p>
              Our labs use various monitoring techniques to
              assure the quality of the data generated to
              comply with the German Medical Association
              (Bundesärztekammer) standards for medical
              laboratories (RiliBÄK).
            </p>
          </div>
        </div>
        <div
          className={classes.gridItem}
          style={eigthStyle}
        >
          <div>
            <h2>What's included in your STD test kit?</h2>
            <p>
              As part of our door-to-door service you'll
              receive everything you need to collect your
              sample whilst enjoying complete privacy.
              Whenever your sample is ready for collection
              just send it back via postal service or throw
              it into one of our discreet collection boxes.
              Simple, easy, and convenient.
            </p>
          </div>
        </div>
        <div
          className={classes.gridItem}
          style={removePadding}
        >
          <img src="howcanapersongetanstd.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ExplanationSection;
