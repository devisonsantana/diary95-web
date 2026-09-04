import styles from "./Window1.module.css";

export const Window1 = ({ title, children }: Props) => {
  return (
    <div className={styles.win}>
      <div className={styles.winTitle}>{title}</div>
      <div className={styles.winBody}>{children}</div>
    </div>
  );
};

type Props = {
  title: string;
  children: React.ReactNode;
};
