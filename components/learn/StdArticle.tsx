import classes from "./StdArticle.module.css";
import React from "react";
import Image from "next/image";

const StdArticle: React.FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        How do I know if I have an STI?
      </h2>
      <p className={classes.date}>14th Dec</p>
      <p className={classes.text}>
        Did you have sex recently and now it&apos;s itching
        and burning down there? Then it&apos;s possible that
        you have contracted an STI. What exactly this is and
        how you can find out whether your complaints are
        really an STI, you will find out in this post.
      </p>

      <h3 className={classes.title}>Chlamydia</h3>
      <p className={classes.text}>
        With a chlamydia infection, it often happens that
        you initially cannot notice any noticeable symptoms.
        If one or more of the symptoms described below apply
        to you, your complaints could be an infection with
        chlamydia. These include:
      </p>
      <ul>
        <li>
          An unusual discharge from the vagina, penis, or
          anus
        </li>
        <li>Intermenstrual bleeding</li>
        <li>
          Pain during sexual intercourse (in the vagina or
          anus)
        </li>
        <li>Burning/pain when peeing</li>
        <li>Itching at the vagina, penis, anus</li>
      </ul>
      <p className={classes.text}>
        Even if these symptoms get better or disappear on
        their own, it is advisable that you see a doctor and
        have it checked out. After all, caution is better
        than cure. If a chlamydia infection is not detected,
        it can lead to severe inflammation or even
        infertility, in both women and men. In addition, the
        risk of you additionally infecting yourself with HIV
        increases with an untreated chlamydia infection. You
        should refrain from sex during chlamydia treatment,
        as they can be transmitted very easily. So get
        tested, go to a doctor and talk to your sexual
        partners about getting tested and treated if
        necessary.
      </p>

      <h3 className={classes.title}>Syphilis</h3>
      <p className={classes.text}>
        Syphilis infection has three stages of symptoms:
      </p>
      <p className={classes.text}>
        The primary syphilis often manifests in the first
        three weeks after infection. It can be identified by
        a red spot that develops into an ulcer with hardened
        edges and later secretes a colorless fluid. This
        ulcer can occur on the labia, in the vagina, on the
        penis, in the mouth or throat, or in the anus. In
        the further course, the surrounding lymph nodes
        start to swell. Without treatment, the symptoms
        disappear on their own, but the disease itself does
        not. Syphilis can still be transmitted.
      </p>
      <p>
        The secondary syphilis occurs after four to ten
        weeks. It has now spread everywhere through your
        body&apos;s blood and lymphatic pathways. If you are
        in this stage of syphilis infection, you are usually
        struggling with fever, fatigue and headaches. Often
        a non-itchy rash follows, which occurs everywhere,
        but in most cases on the palms of the hands and
        soles of the feet, reminiscent of a measles
        infection. These symptoms also disappear on their
        own, but leave the disease and its contagiousness in
        your body. If left untreated, the symptoms can
        reoccur.
      </p>
      <p>
        If the secondary stage of syphilis remains
        untreated, tertiary syphilis can occur. However,
        since syphilis can easily be treated with
        antibiotics, this stage has become very rare. Large
        skin ulcers form from smaller hardened nodules. If
        the syphilis has progressed this far, permanent
        damage to your heart, brain, bones, skin, and other
        organs may result. Damage to the nervous tissue in
        the brain or spinal cord can lead to personality
        changes up to dementia.
      </p>
      <h3 className={classes.title}>Gonorrhea</h3>
      <p>
        Gonorrhea, also known as the clap, is a sexually
        transmitted infection caused by bacteria known as
        gonococci. Symptoms can occur 1 to 14 days after
        infection and include:
      </p>
      <ul>
        <li>Burning and itchy inflammations</li>
        <li>Formation of pus</li>
        <li>
          Milky-cloudy and later creamy-yellowish
          foul-smelling discharge (in infections of the male
          genital organs or the urethra)
        </li>
        <li>
          Redness and swelling of the urethral opening
        </li>
        <li>
          Pain during urination, frequent urination,
          foul-smelling discharge or spotting (in infections
          of the female genital organs)
        </li>
      </ul>
      <p>
        If left untreated, gonococci can cause further
        serious complications, including inflammation of the
        prostate, scarred adhesions in the vas deferens or
        fallopian tubes, joint inflammations, skin changes,
        heart valve inflammations, or meningitis.
      </p>

      <h3 className={classes.title}>Hepatitis C</h3>
      <p>
        Hepatitis C is a liver inflammation caused by the
        Hepatitis C Virus (HCV) and is mainly transmitted
        through the blood. Symptoms can occur 3 weeks to 6
        months after infection and include:
      </p>
      <ul>
        <li>Exhaustion</li>
        <li>Loss of appetite</li>
        <li>Nausea</li>
        <li>Joint and muscle pain</li>
        <li>Mild fever</li>
        <li>
          Yellowing of the white parts of the eyes, yellow
          skin color, light stool, dark urine and itchy skin
          (symptoms of jaundice)
        </li>
      </ul>
      <p>
        If left untreated, Hepatitis C can lead to liver
        fibrosis, liver failure, or liver cancer.
      </p>

      <h3 className={classes.title}>HIV</h3>
      <p>
        HIV is an infectious disease that is mainly
        transmitted through unprotected sex. The first
        symptoms usually occur 6 days to 6 weeks after
        infection and resemble the flu:
      </p>
      <ul>
        <li>Fatigue</li>
        <li>Headaches</li>
        <li>Exhaustion</li>
        <li>Decreased physical performance</li>
        <li>Fever</li>
        <li>Night sweats</li>
        <li>Diarrhea</li>
        <li>Swollen lymph nodes and tonsils</li>
        <li>Muscle and limb pain</li>
        <li>Loss of appetite</li>
        <li>Skin rash</li>
      </ul>
      <p>
        Without treatment, an acute HIV infection can
        develop into a chronic HIV stage, which can lead to
        further health problems and eventually AIDS.
      </p>
    </div>
  );
};

export default StdArticle;
