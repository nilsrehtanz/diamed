import classes from "./StdArticle.module.css";
import React from "react";
import Image from "next/image";

const StdArticle: React.FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>How do I know if I have an STI?</h2>
      <p className={classes.date}>14th Dec</p>
      <p className={classes.text}> 
        Did you have sex recently and now it's itching and
        burning down there? Then it's possible that you have
        contracted an STI. What exactly this is and how you
        can find out whether your complaints are really an
        STI, you will find out in this post.
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
        body's blood and lymphatic pathways. If you are in
        this stage of syphilis infection, you are usually
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
      <h3 className={classes.title}>Gonorrhoe</h3>
      <p>
        Gonorrhoe, auch als Tripper bekannt, ist eine
        sexuell übertragbare Infektion, die durch Bakterien
        namens Gonokokken verursacht wird. Symptome können 1
        bis 14 Tage nach der Ansteckung auftreten und
        beinhalten:
      </p>
      <ul>
        <li>Brennende und juckende Entzündungen</li>
        <li>Bildung von Eiter</li>
        <li>
          Milchig-trüber und später cremig-gelblicher
          übelriechender Ausfluss (bei Infektionen der
          männlichen Geschlechtsorgane oder der Harnröhre)
        </li>
        <li>Rötung und Schwellung der Harnröhrenmündung</li>
        <li>
          Schmerzen beim Pinkeln, häufiger Harndrang,
          übelriechender Ausfluss oder Schmierblutungen (bei
          Infektionen der weiblichen Geschlechtsorgane)
        </li>
      </ul>
      <p>
        Unbehandelt können Gonokokken weitere ernsthafte
        Komplikationen verursachen, einschließlich
        Entzündungen der Prostata, narbige Verklebungen in
        den Samenleitern oder Eileitern,
        Gelenksentzündungen, Hautveränderungen,
        Herzklappenentzündungen oder Hirnhautentzündungen.
      </p>

      <h3 className={classes.title}>Hepatitis C</h3>
      <p>
        Hepatitis C ist eine Leberentzündung, die durch das
        Hepatitis-C-Virus (HCV) verursacht wird und
        hauptsächlich über das Blut übertragen wird.
        Symptome können 3 Wochen bis 6 Monate nach der
        Ansteckung auftreten und beinhalten:
      </p>
      <ul>
        <li>Abgeschlagenheit</li>
        <li>Appetitlosigkeit</li>
        <li>Übelkeit</li>
        <li>Gelenk- und Muskelschmerzen</li>
        <li>Leichtes Fieber</li>
        <li>
          Gelbfärbung der weißen Teile der Augen, gelbliche
          Hautfärbung, heller Stuhl, dunkler Urin und
          Hautjucken (Symptome einer Gelbsucht)
        </li>
      </ul>
      <p>
        Unbehandelt kann Hepatitis C zu Leberfibrosen,
        Leberversagen oder Leberkrebs führen.
      </p>

      <h3 className={classes.title}>HIV</h3>
      <p>
        HIV ist eine Infektionskrankheit, die vor allem bei
        ungeschütztem Sex übertragen wird. Die ersten
        Symptome treten meistens 6 Tage bis 6 Wochen nach
        der Ansteckung auf und ähneln einer Grippe:
      </p>
      <ul>
        <li>Müdigkeit</li>
        <li>Kopfschmerzen</li>
        <li>Erschöpfung</li>
        <li>Verminderte körperliche Leistungsfähigkeit</li>
        <li>Fieber</li>
        <li>Nachtschweiß</li>
        <li>Durchfall</li>
        <li>Geschwollene Lymphknoten und Rachenmandeln</li>
        <li>Muskel- und Gliederschmerzen</li>
        <li>Appetitlosigkeit</li>
        <li>Hautausschlag</li>
      </ul>
      <p>
        Ohne Behandlung kann sich eine akute HIV-Infektion
        zu einem chronischen HIV-Stadium weiterentwickeln,
        das zu weiteren gesundheitlichen Problemen und
        schließlich AIDS führen kann.
      </p>
    </div>
  );
};

export default StdArticle;
