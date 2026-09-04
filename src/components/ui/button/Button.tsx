import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export const Button = ({ variant = "default", className, ...rest }: Props) => {
  const variantClass = styles[variant];

  return (
    <button
      className={`${styles.btn} ${variantClass} ${className ?? ""}`}
      {...rest}
    />
  );
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "ghost" | "danger";
};
