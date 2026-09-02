import { Link } from "react-router";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <header className={styles.hero}>
      <p className={styles.prompt}>~/diary $</p>

      <h1 className={styles.title}>DIARY 95</h1>

      <p className={styles.subtitle}>
        Um terminal pessoal para registrar seus dias, ideias e descobertas.
      </p>

      <Link to="/auth" className={styles.link}>
        $ ssh entrar
      </Link>
    </header>
  );
};
