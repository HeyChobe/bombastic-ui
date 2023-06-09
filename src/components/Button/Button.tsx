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
  ghost?: boolean;
  small?: boolean;
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  bg = "primary",
  ghost = false,
  small = false,
  disabled = false,
}: Props) {
  const isCustomColor = !Object.values(options).includes(bg);

  const buttonStyle = {
    backgroundColor: isCustomColor ? bg : undefined,
  };

  const disabledStyle = {
    backgroundColor: "var(--disabled)",
    border: "1.2px solid var(--grey2)",
    color: "var(--white)",
    cursor: "not-allowed",
  };

  const ghostStyle = {
    backgroundColor: "transparent",
    color: bg,
    border: `1.2px solid ${bg}`,
  };

  return (
    <button
      style={disabled ? disabledStyle : ghost ? ghostStyle : buttonStyle}
      className={styles.button}
      data-small={small}
      data-ghost={ghost}
      data-bg={bg}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
