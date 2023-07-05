import styles from "./SearchBar.module.css";

interface SearchBarProps {
  disabled?: boolean;
  color?: string;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}

const bgOptions = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OK: "ok",
  CANCEL: "cancel",
  WARNING: "warning",
};

export default function SearchBar({
  onChange,
  onSubmit,
  color = "primary",
  disabled = false,
}: SearchBarProps) {
  const onChangeColor = (newColor: string) => {
    document.documentElement.style.setProperty("--current-color", newColor);
    return { color: "currentcolor" };
  };

  const isCustomColor = !Object.values(bgOptions).includes(color);

  return (
    <div
      className={styles.wrap}
      data-color={color}
      style={isCustomColor ? onChangeColor(color) : undefined}
    >
      <div className={styles.search}>
        <input
          onChange={onChange}
          disabled={disabled}
          type="text"
          required
          className={styles.searchTerm}
          placeholder="What are you looking for?"
        />
        <button
          onSubmit={onSubmit}
          disabled={disabled}
          className={styles.searchButton}
        >
          <img
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.svg"
            alt="search"
          />
        </button>
      </div>
    </div>
  );
}
