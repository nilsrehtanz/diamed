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
      "After you provide a saliva sample, diamed uses NV diamond chips to analyse your sample for viruses that can be transmitted sexually. This means ... . We then turn those results into ... . Note that diamed's proprietary STD testing solution is a cutting-edge and novel approach not provided in Germany, yet.",
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
      "To begin, visit www.diamed.online. As soon as you have successfully registered your testing kit, provided a saliva sample, and put the kit in the mail, we will analyse your sample. Once your sample reaches the lab, it is typically processed within a few hours, with results then delivered to your secure online account.",
  },
  {
    id: "5",
    question: "Do diamed STD test kits expire?",
    answer:
      "We encourage customers to provide their sample before the 'Collect saliva by' date on the side of the collection tube. If your sample collection kit is lost or damaged, or if it has expired, please contact customer care to assist you with getting a replacement kit.",
  },
  {
    id: "6",
    question:
      "What do I do if the test result is positive / reactive?",
    answer:
      "You have tested positive/ reactive for a STI - no need to panic! Our doctors will be in touch with you soon and will discuss the next steps together with you.",
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
      <hr />
      <ul>{questionList}</ul>
    </div>
  );
}

export default FaqSection;
