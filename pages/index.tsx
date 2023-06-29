import HeroSection from "../components/landing/HeroSection";
import ProductsSection from "../components/landing/ProductsSection";
import TestSection from "../components/landing/TestSection";
import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <HeroSection></HeroSection>
      <ProductsSection></ProductsSection>
      <TestSection></TestSection>
    </div>
  );
}
