import styles from "./EmptyEntry.module.css";

export const EmptyEntry = ({ title, subtitle, action }: Props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};

type Props = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};
