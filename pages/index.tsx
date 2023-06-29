import HeroSection from "../components/landing/HeroSection";
import ProductsSection from "../components/landing/ProductsSection";
import TestSection from "../components/landing/TestSection";
import ExplanationSection from "../components/landing/ExplanationSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <HeroSection></HeroSection>
      <ProductsSection></ProductsSection>
      <TestSection></TestSection>
      <ExplanationSection></ExplanationSection>
      <HowItWorksSection></HowItWorksSection>
    </div>
  );
}
