import styles from "./InputText.module.css";

interface InputTextProps {
  placeholder: string;
  onChange: (e: any) => void;
  value: any;
  color?: string;
  disabled?: boolean;
  labelColor?: string;
}

const bgOptions = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OK: "ok",
  CANCEL: "cancel",
  WARNING: "warning",
};

const labelColorOptions = {
  DARK: "dark",
  LIGHT: "light",
};

export default function InputText({
  onChange,
  value,
  placeholder = "Type something",
  color = "primary",
  labelColor = "dark",
  disabled = false,
}: InputTextProps) {
  const isCustomColor = !Object.values(bgOptions).includes(color);
  const isCustomLabelColor =
    !Object.values(labelColorOptions).includes(labelColor);

  const inputColorStyle = {
    borderColor: isCustomColor ? color : undefined,
    color: disabled
      ? "var(--grey)"
      : isCustomLabelColor
      ? labelColor
      : undefined,
  };

  const labelColorStyle = {
    color: isCustomColor ? color : undefined,
  };

  return (
    <div className={styles["input-group"]}>
      <input
        style={inputColorStyle}
        disabled={disabled}
        required
        type="text"
        autoComplete="off"
        data-color={color}
        data-label-color={labelColor}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
      <label
        style={labelColorStyle}
        data-color={color}
        className={styles["user-label"]}
      >
        {placeholder}
      </label>
    </div>
  );
}
