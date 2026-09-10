import { ENTRY_TYPES, type EntryType } from "@/types/entry";
import styles from "./TypeSelector.module.css";

export const TypeSelector = ({ selected, onChange }: Props) => {
  const toggle = (type: EntryType) => {
    if (selected.includes(type)) {
      onChange(selected.filter((t) => t !== type));
    } else {
      onChange([...selected, type]);
    }
  };

  return (
    <div className={styles.wrapper}>
      {(Object.keys(ENTRY_TYPES) as EntryType[]).map((type) => {
        const info = ENTRY_TYPES[type];
        const isActive = selected.includes(type);

        return (
          <button
            key={type}
            type="button"
            aria-pressed={isActive}
            onClick={() => toggle(type)}
            className={styles.badge}
            style={{
              borderColor: info.color,
              color: isActive ? "#0a0118" : info.color,
              background: isActive ? info.color : "transparent",
            }}
          >
            {info.label}
          </button>
        );
      })}
    </div>
  );
};

type Props = {
  selected: EntryType[];
  onChange: (types: EntryType[]) => void;
};
