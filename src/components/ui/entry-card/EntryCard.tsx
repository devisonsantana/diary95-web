import type { Entry } from "@/types/entry";
import { TypeBadge } from "../type-badge/TypeBadge";
import { Link } from "react-router";
import { stripHtml } from "@/utils/html";
import styles from "./EntryCard.module.css";

const formatDate = (iso: string) => {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

export const EntryCard = ({ entry }: Props) => {
  const formatedDate = formatDate(entry.createdAt);
  const content = stripHtml(entry.content);

  return (
    <Link to={`/entry/${entry.id}`} className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.title}>{entry.title}</h3>
        <span className={styles.date}>{formatedDate}</span>
      </div>

      <p className={styles.preview}>{content}</p>

      <div className={styles.types}>
        {entry.types.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </div>
    </Link>
  );
};

type Props = {
  entry: Entry;
};
