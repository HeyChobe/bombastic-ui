import styles from "./Button.module.css";

const options = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OK: "ok",
  CANCEL: "cancel",
  WARNING: "warning",
};

interface ButtonProps {
  label: string;
  onClick: (event: any) => void;
  bg?: string;
  ghost?: boolean;
  small?: boolean;
  disabled?: boolean;
}

export default function Button({
  label = "Button",
  onClick = () =>
    console.warn("No onClickHandler provided for Button component"),
  bg = "primary",
  ghost = false,
  small = false,
  disabled = false,
}: ButtonProps) {
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
