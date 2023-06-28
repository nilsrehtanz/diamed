import HeroSection from "../components/landing/HeroSection";
import ProductsSection from "../components/landing/ProductsSection";
import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <HeroSection></HeroSection>
      <ProductsSection></ProductsSection>
    </div>
  );
}
