import React from "react";
import styles from "./SearchField.module.css";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function SearchField({
  placeholder,
  value,
  onChange,
}: InputProps): JSX.Element {
  return (
    <label className={styles.label}>
      <input
        className={styles.label__input}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        value={value}
        required
      />
    </label>
  );
}

export default SearchField;
