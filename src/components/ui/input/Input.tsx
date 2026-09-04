import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export const Input = ({
  variant = "default",
  label,
  error,
  id,
  ...rest
}: Props) => {
  const variantClass = styles[variant];
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={`${styles.input} ${variantClass} ${error ? styles.inputError : ""}`}
        {...rest}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  variant?: "default" | "primary";
};
