import styles from "./SearchInput.module.css";

export const SearchInput = ({ value, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="search"
      value={value}
      onChange={handleChange}
      placeholder="buscar por título ou conteúdo..."
      className={styles.input}
      aria-label="Buscar entradas"
    />
  );
};

type Props = {
  value: string;
  onChange: (value: string) => void;
};
