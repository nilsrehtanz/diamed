import HeroSection from "../components/landing/HeroSection";
import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <HeroSection></HeroSection>
    </div>
  );
}
