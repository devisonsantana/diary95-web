import styles from "./Window2.module.css";

export const Window2 = ({ title, children }: Props) => {
  return (
    <div className={styles.win}>
      <div className={styles.winTitle}>
        <span className={styles.dots}>
          <span />
          <span />
          <span />
        </span>
        {title}
      </div>
      <div className={styles.winBody}>{children}</div>
    </div>
  );
};

type Props = {
  title: string;
  children: React.ReactNode;
};
