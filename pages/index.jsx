import OfferBanner from "../components/landing/OfferBanner";
import HeroSection from "../components/landing/HeroSection";
import ProductsSection from "../components/landing/ProductsSection";
import TestSection from "../components/landing/TestSection";
import ExplanationSection from "../components/landing/ExplanationSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import SupportSection from "../components/landing/SupportSection";
import FaqSection from "../components/landing/FaqSection";
import NewsletterSection from "../components/landing/NewsletterSection";
import VideoComponent from "../components/landing/VideoSection";
import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <OfferBanner></OfferBanner>
      <HeroSection></HeroSection>
      <VideoComponent></VideoComponent>
      <ProductsSection></ProductsSection>
      <TestSection></TestSection>
      <ExplanationSection></ExplanationSection>
      <HowItWorksSection></HowItWorksSection>
      <SupportSection></SupportSection>
      <FaqSection></FaqSection>
      <NewsletterSection></NewsletterSection>
    </div>
  );
}
