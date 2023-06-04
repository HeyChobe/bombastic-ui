import styles from "./Button.module.css";

const options = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OK: "ok",
  CANCEL: "cancel",
  WARNING: "warning",
};

export interface Props {
  label: string;
  onClick: () => void;
  bg?: string;
}

export default function Button({ label, onClick, bg = "primary" }: Props) {
  if (!Object.values(options).includes(bg))
    return (
      <button
        className={styles.button}
        style={{ backgroundColor: bg }}
        onClick={onClick}
      >
        {label}
      </button>
    );
  return (
    <button data-bg={bg} className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}
