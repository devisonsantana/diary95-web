import styles from "./FeatureCard.module.css";

export const FeatureCard = ({ title, text }: Props) => {
  return (
    <article className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};

type Props = {
  title: string;
  text: string;
};
