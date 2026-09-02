import { FeatureCard } from "./FeatureCard";
import styles from "./Features.module.css";

export const Features = () => {
  return (
    <section className={styles.features}>
      <FeatureCard
        title="Escreva"
        text="Registre pensamentos, tarefas e o que aconteceu no seu dia."
      />

      <FeatureCard
        title="Categorize"
        text="Marque cada entrada com tipos e tags para encontrar depois."
      />

      <FeatureCard
        title="Visualize"
        text="Acompanhe sequências e estatísticas do que você tem escrito."
      />
    </section>
  );
};
