import { useState } from "react";
import styles from "./TagInput.module.css";

export const TagInput = ({ tags, onChange }: Props) => {
  const [draft, setDraft] = useState("");

  const commitTag = () => {
    const clean = draft.trim().toLowerCase();
    if (clean && !tags.includes(clean)) {
      onChange([...tags, clean]);
    }
    setDraft("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      commitTag();
    } else if (event.key === "Backspace" && draft === "" && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };

  const removeTag = (tag: string) => {
    onChange(tags.filter((t) => t !== tag));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.chips}>
        {tags.map((tag) => (
          <span key={tag} className={styles.chip}>
            #{tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className={styles.remove}
              aria-label={`Remover tag ${tag}`}
            >
              x
            </button>
          </span>
        ))}
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={commitTag}
          placeholder={tags.length === 0 ? "adicionar tag..." : ""}
          className={styles.input}
        />
      </div>
    </div>
  );
};

type Props = {
  tags: string[];
  onChange: (tags: string[]) => void;
};
