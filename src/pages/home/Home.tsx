import { Footer } from "../../components/ui/footer/Footer";
import { Features } from "../../components/ui/features/Features";
import { Hero } from "../../components/ui/hero/Hero";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
