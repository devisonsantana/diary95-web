import styles from "./StatBox.module.css";

export const StatBox = ({ value, label }: Props) => {
  return (
    <div className={styles.box}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

type Props = {
  value: number | string;
  label: string;
};
