import styles from "./Gridscape.module.css";

export const Gridscape = () => {
  return (
    <div className={styles.gridscape} aria-hidden="true">
      <div className={styles.sun} />
      <div className={styles.floor} />
    </div>
  );
};
