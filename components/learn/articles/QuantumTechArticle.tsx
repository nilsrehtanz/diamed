import classes from "./QuantumTechArticle.module.css";
import React from "react";
import Image from "next/image";

const QuantumTechArticle: React.FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        Quantum diamond chip technology
      </h2>
      <p className={classes.date}>14th Dec</p>
      <p className={classes.text}>
        Our technology utilizes nanodiamonds with precise
        imperfections to harness their quantum properties.
        Specifically, the nitrogen-vacancy (NV) centers
        formed within the nanodiamonds offer various
        applications, such as fluorescent biomarking for
        ultra-sensitive imaging and qubits for quantum
        computing.
      </p>

      <p className={classes.text}>
        The NV centers within nanodiamonds emit a bright
        fluorescent light, enabling the detection of
        antigens or target molecules. Traditional
        fluorescent markers faced limitations due to
        background fluorescence, hindering the detection of
        low concentrations of virus proteins or DNA.
        However, the quantum properties of fluorescent
        nanodiamonds allow their emission to be selectively
        modulated. By fixing the signal frequency using a
        microwave field, the background fluorescence can be
        efficiently separated, overcoming this limitation.
      </p>

      <h3 className={classes.title}>
        Advancement in Diagnostic Tests
      </h3>

      <p className={classes.text}>
        A study led by UCL researchers in the i-sense
        McKendry group demonstrated how the quantum sensing
        capabilities of nanodiamonds can enhance the
        sensitivity of paper-based diagnostic tests. This
        advancement could enable earlier detection of
        diseases like HIV [LINK?].
      </p>

      <p className={classes.text}>
        Paper-based lateral flow tests, similar to pregnancy
        tests, utilize a strip of paper soaked in a fluid
        sample. A change in color or fluorescent signal
        indicates a positive result, indicating the presence
        of virus proteins or DNA. These tests are widely
        used for detecting viruses such as HIV and
        SARS-CoV-2, offering rapid diagnosis without
        requiring lab processing.
      </p>

      <h3 className={classes.title}>
        Using Low-Cost Nanodiamonds
      </h3>

      <p className={classes.text}>
        Using low-cost nanodiamonds, we can detect HIV
        disease markers with significantly greater
        sensitivity than gold nanoparticles commonly used in
        these tests. This enhanced sensitivity allows the
        detection of lower viral loads, enabling early
        disease detection and reducing transmission risks.
        Additionally, the nanodiamond-based approach can be
        easily adapted for other diseases and biomarkers,
        expanding its versatility.
      </p>

      <h3 className={classes.title}>
        Paper-Based Lateral Flow Tests with Gold
        Nanoparticles
      </h3>

      <p className={classes.text}>
        Paper-based lateral flow tests with gold
        nanoparticles are particularly useful in
        low-resource settings and areas with limited
        healthcare access. They are affordable, portable,
        and user-friendly. However, these tests often lack
        the sensitivity required to detect extremely low
        levels of biomarkers. Our novel approach
        significantly enhances sensitivity, offering
        transformative benefits to patients and protecting
        populations from infectious diseases.
      </p>

      <h3 className={classes.title}>Collaborations</h3>

      <p className={classes.text}>
        For any research institutes, companies or students
        interested in collaborating with us and jointly
        advancing this cutting-edge technology, please reach
        out to us!
      </p>
    </div>
  );
};

export default QuantumTechArticle;
