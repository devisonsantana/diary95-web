import styles from "./VhsEffect.module.css";

export const VhsEffect = () => {
  return (
    <div className={styles.vhsEffect} aria-hidden="true">
      <div className={styles.vhsNoise} />
      <div className={styles.vhsScanlines} />
      <div className={styles.vhsTracking} />
      <div className={`${styles.vhsGlitch} ${styles.vhsGlitchRed}}`} />
      <div className={`${styles.vhsGlitch} ${styles.vhsGlitchBlue}`} />
    </div>
  );
};
