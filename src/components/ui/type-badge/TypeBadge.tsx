import { ENTRY_TYPES, type EntryType } from "@/types/entry";
import styles from "./TypeBadge.module.css";

export const TypeBadge = ({ type }: Props) => {
  const info = ENTRY_TYPES[type];

  return (
    <span
      className={styles.badge}
      style={{ border: `1px solid ${info.color}`, color: info.color }}
    >
      {info.label}
    </span>
  );
};

type Props = {
  type: EntryType;
};
