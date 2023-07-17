import Image from "next/image";
import classes from "./FaqSection.module.css";
import Collapsible from "../ui/Collapsible";

const QUESTIONS = [
  {
    id: "1",
    question: "How accurate is diamed?",
    answer:
      "Diamed has rigorous standards that ensure high-quality results. Our team of scientists and medical experts use a robust process to test for STDs. Diamed analyses your samples under the highest German laboratory standards (RiliBÄK criteria) and delivers your results with the utmost accuracy.",
  },
  {
    id: "2",
    question: "How does diamed STD testing work?",
    answer:
      "Diamed employs nanodiamonds with NV centers to analyze your saliva samples for sexually transmitted viruses. The nanodiamonds interact with viral particles, enabling precise detection and quantification. Advanced imaging techniques capture these interactions, and the resulting fluorescence measurements provide accurate results. Our cutting-edge STD testing solution, utilizing nanodiamond technology, sets the benchmark as a pioneering approach, being the first of its kind available in Germany.",
  },
  {
    id: "3",
    question:
      "Who can use diamed and how often should one take a STD test?",
    answer:
      "Most adults who are able to provide saliva samples can use the diamed kit. There are no age limitations meaning anyone could, in theory, use diamed's test kit. If you have an active sex life with multiple partners (and practice safer sex), you should get tested every 3 to 6 months. If you enter a monogamous relationship - or actively maintain one - we recommend that both of you get tested before having unprotected sex and repeat this annually.",
  },
  {
    id: "4",
    question:
      "How do I get my diamed reports and how long does it take?",
    answer:
      "To initiate the process, please access www.diamed.shop. Once you have registered your testing kit and provided a saliva sample, securely mail the kit to our laboratory. Upon receipt, your sample will undergo an optimized processing protocol. Our dedicated team is committed to minimizing processing time to provide timely results. Following the completion of the analysis, the results will be promptly delivered and made available through your secure online account.",
  },
  {
    id: "5",
    question: "Do diamed STD test kits expire?",
    answer:
      "We encourage customers to provide their sample before the 'Collect sample by' date on the side of the collection tube. If your sample collection kit is lost or damaged, or if it has expired, please contact customer care to assist you with getting a replacement kit.",
  },
  {
    id: "6",
    question:
      "What do I do if the test result is positive / reactive?",
    answer:
      "You have tested positive/ reactive for an STI - no need to panic! Our team of experienced doctors will be in touch with you to offer their guidance, provide a thorough diagnosis and discuss the necessary steps moving forward.",
  },
  {
    id: "7",
    question: "How We Protect Your Privacy?",
    answer:
      "Patient Data Protection Act (Patientendatenschutzgesetz - PDSG) guarantees your right to medical privacy and protects your health information from unsolicited access, fraud and abuse. At DiaMed, we strictly adhere to this law, empowering you to control who can access your health information. To maintain transparency and respect your preferences, we will not contact you through phone calls or physical mail.",
  },
];

function FaqSection() {
  const questionList = QUESTIONS.map((question) => (
    <Collapsible
      key={question.id}
      question={question.question}
      answer={question.answer}
    ></Collapsible>
  ));
  return (
    <div className={classes.container}>
      <h1>Frequently Asked Questions</h1>
      <ul>{questionList}</ul>
    </div>
  );
}

export default FaqSection;
