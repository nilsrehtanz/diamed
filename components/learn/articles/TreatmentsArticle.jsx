import classes from "./TreatmentsArticle.module.css";
import React from "react";
import Image from "next/image";

const TreatmentsArticle = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        Tested and now what?
      </h2>
      <p className={classes.date}>14th Dec</p>
      <p className={classes.text}>
        Have you had an STI test and it turned out negative?
        Congratulations, you currently have no detectable
        sexually transmitted disease! But why only
        currently? Some STIs like HIV can only be safely
        detected from two weeks to 3 months after.
        Therefore, you should have STI tests at regular
        intervals. Many infections also cause no or very
        mild symptoms, which you might not directly
        associate with an STI. Therefore, regular tests are
        very helpful for your and your partners&apos; sexual
        health and are highly recommended.
      </p>
      <h3 className={classes.title}>
        Unfortunately positive ... and now what?
      </h3>
      <p className={classes.text}>
        A positive STI test is not the end of the world.
        Many people face this fact at some point. The
        important thing now is not to freak out! You&apos;ve done
        everything right with the test and now you can be
        helped optimally. However, you should definitely
        contact your sexual partners to tell them that they
        should also get tested to be on the safe side -
        regardless of which STI you tested positive for.
      </p>
      <h3 className={classes.title}>
        Give your STI the attention it needs
      </h3>
      <p className={classes.text}>
        Depending on which STI you&apos;ve contracted, different
        treatment approaches must be chosen. Your doctor
        will prescribe the optimal therapy for your STI, so
        that the STI disappears quickly or at least is
        contained. The sooner you start treatment after a
        positive result, the sooner the therapy can show its
        effect.
      </p>
      <h3>Chlamydia</h3>
      <p>
        If you have chlamydia, your doctor will prescribe
        antibiotic therapy for you. Different antibiotics
        can be used, such as doxycycline, erythromycin,
        clarithromycin, or azithromycin. In most cases, a
        treatment duration of 14 days is recommended, even
        if the chlamydia infection is uncomplicated. If you
        still have symptoms after 14 days, several courses
        of antibiotics may be necessary. In the case of more
        complicated infections such as pelvic inflammation,
        up to 3 weeks of therapy may be required. Your
        sexual partners of the last 60 days may also need to
        be examined and possibly treated directly. Sex
        should definitely be avoided due to the high risk of
        infection during the treatment period.
      </p>

      <h3>Hepatitis C</h3>
      <p>
        If you&apos;ve contracted hepatitis C, treatment is also
        very possible today. Hepatitis C was not treated in
        the acute phase for a long time. Treatment did not
        start until the infection became chronic, i.e.,
        after about 6 months. But since 2020, it is
        recommended to treat an HCV infection as quickly as
        possible, as this greatly increases the risk of
        liver diseases, liver carcinomas, and further
        transmission.
      </p>

      <p>
        Since 2014, the RKI has approved several new
        substances for the treatment of hepatitis C, which
        act directly antiviral and thus significantly
        improve the chances of healing an HCV infection.
        Currently, more and more substances are being
        approved for the therapy of hepatitis C, which leads
        to constantly changing therapy recommendations. The
        substances are administered as combination
        preparations, as in Epclusa, Harvoni, Maviret,
        Vosevi, and Zepatier. Others are also used as single
        substances, such as Sofobuvir and Ribavirin.
      </p>

      <p>
        The treatment usually lasts 8 to 12 weeks, but
        sometimes 16 to 24 weeks in exceptional cases such
        as the presence of cirrhosis or in people who have
        already been treated. Once the therapy is completed,
        a measurement of HCV-RNA is carried out about 12
        weeks later to determine whether the therapy was
        successful. If no HCV-RNA can be detected, permanent
        healing without relapses is very likely. If HCV-RNA
        can still be detected, a relapse or a new hepatitis
        infection can occur. In any case, a further check
        should take place approximately 48 weeks after the
        therapy has been completed, in order to detect late
        relapses and new infections in time.
      </p>

      <p>
        You should be particularly careful if you want to
        get pregnant, as HCV therapies are not designed to
        be carried out during pregnancy. You should
        therefore finish the treatment beforehand. You also
        need to be careful with certain contraceptives, as
        they should not be taken together with HCV
        preparations. You should discuss this with your
        doctor.
      </p>

      <h3>Syphilis</h3>
      <p>
        If you&apos;ve contracted syphilis, the treatment of
        choice in almost all cases is the antibiotic
        penicillin and must be administered for at least 10
        days in a row, up to two to three weeks. This is
        injected into the muscle or administered by infusion
        in severe cases. If treatment is only started at a
        later stage, not in the first or second, then the
        therapy for syphilis can take longer. Three to four
        weeks after starting therapy, checks should be
        carried out through examinations to monitor the
        effectiveness of the antibiotic treatment.
      </p>

      <p>
        During the period of therapy, you should definitely
        abstain from sex. You should also inform your sexual
        partners about your infection so that they can also
        be treated if necessary.
      </p>
      <h3>HIV</h3>
      <p>
        If you have been infected with HIV, this by no means
        implies that you will inevitably develop AIDS.
      </p>

      <p>
        First and foremost, you should know that a PEP
        therapy is possible if you have been in a situation
        with an HIV positive person where you did not
        practice safe sex, or if you have come into contact
        with HIV through a syringe or something similar. In
        this so-called post-exposure prophylaxis (precaution
        after contact with HIV), you have to take HIV
        medication for 4 weeks. This can still prevent an
        infection. This prophylaxis should be carried out as
        quickly as possible to be effective. The best window
        is within 2 to 24 hours, but no later than 48 hours.
      </p>

      <p>
        Although there is no cure for HIV yet and despite
        long research, there is also no vaccine, but since
        1996 very effective combination therapies have been
        available that can offer infected people a largely
        normal and healthy life.
      </p>

      <p>
        Various active ingredients block the replication of
        HI-viruses in body cells, prevent the viruses from
        being released by cells, or prevent the virus from
        taking over the cell until no HIV is detectable in
        the blood anymore. In this way, AIDS cannot break
        out and it is prevented that the virus develops
        resistances. Through this antiretroviral therapy,
        HIV infected people have the opportunity for an
        almost normal life expectancy. Moreover, the therapy
        prevents infection with HIV during sex, if the viral
        load in the blood is no longer detectable. The
        therapy has developed to such an extent today that
        taking one pill a day is sufficient and makes the
        treatment of HIV very simple, effective, and
        well-tolerated with no to light side effects.
        Therapy should be started as soon as possible after
        the HIV diagnosis.
      </p>

      <p>
        However, the HIV infection remains in the body, even
        with therapy and thus constitutes a burden for the
        body. Chronic inflammatory reactions can occur, and
        the risk of cancer can increase. The medication can
        also put a strain on the kidneys or increase
        cholesterol levels. Good medical care and a possible
        change in medication can prevent consequential
        damage.
      </p>

      <p>
        Approaches such as the gene scissors, which cut the
        HIV genetic material from the DNA, or reprogramming
        immune cells to kill HIV cells are being researched.
        In this way, the cure of HIV should be made possible
        someday.
      </p>

      <p>
        Here is more info on HIV therapy:{" "}
        <a href="https://www.aidshilfe.de/hiv-therapie">
          https://www.aidshilfe.de/hiv-therapie
        </a>
      </p>
    </div>
  );
};

export default TreatmentsArticle;
